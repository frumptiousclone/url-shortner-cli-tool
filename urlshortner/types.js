const zod = require("zod");

const urlSchema = zod.string().url({ message: "Invalid URL" });

module.exports = urlSchema;