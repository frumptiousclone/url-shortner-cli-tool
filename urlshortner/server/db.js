const mongoose  = require("mongoose");
const config = require("../server/config");
require('dotenv').config();

const connectdb = async () => {
try {
    await mongoose.connect(config.MONGO_URL);
    console.log("MONGO connection established");
} catch(err) {
    console.error(err);
    }
}

connectdb();

const URL_schema = new mongoose.Schema({
    key: {
        type: String, 
        unique: true
    },
    longURL : {
        type: String
    },
});
const URL = mongoose.model("URL", URL_schema)

module.exports = URL
