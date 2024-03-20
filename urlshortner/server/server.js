require('dotenv').config();
const crypto = require("crypto");
const express = require("express");
const URL = require("../server/db");
const urlSchema = require("../server/types");
const config = require("../server/config");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const secret = config.SECRET;
const PORT = config.PORT;
const hostname = config.HOSTNAME;

function urlShortenSHA256(url, secret) {
    const hash = crypto.createHmac('sha256', secret).update(url).digest('hex');
    return hash.slice(0, 6);
}

function schemaValidator(req, res, next) {
    const url = req.body.URL;
    const isUrl = urlSchema.safeParse(url);
    if (!isUrl.success) {
        res.status(400).json({
            msg: "Invalid URL"
        })
        return;
    }
    next();
}

app.post("/url-shortner", schemaValidator, async (req, res) => {
    const longURL = req.body.URL;
    const key = urlShortenSHA256(longURL, secret);
    const shortURL = `${hostname}:${PORT}/${key}`;
    try {
        const duplicateURL = await URL.findOne({key});
        if (!duplicateURL) {
            const new_URL = await URL.create({
                key,
                longURL,
            });
        }
        res.json({
            key,
            longURL,
            shortURL
        });
    } catch(error) {
        console.error(error);
        res.json({
            msg: "error"
        });
    }
});

app.get("/:key", async (req, res) => {
    const key = req.params.key;
    try {
        const url = await URL.findOne({key});
        if (url) {
            const longURL = url.longURL;
            res.redirect(302, longURL);
        }
        else {
            res.json({
                msg: "URL does not exist in our database."
            });
        }
    } catch (error) {
        console.error(error);
        res.json({
            msg: "error"
        })
    }
});

app.use((error, req, res, next) => {
    console.error(error);
    res.json({
        msg: "Internal server error"
    });
})

app.listen(PORT, '0.0.0.0' , () => console.log("Live"));