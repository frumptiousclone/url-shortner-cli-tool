require('dotenv').config();

module.exports = {
    MONGO_URL: process.env.MONGOOSE_URL,
    SECRET: process.env.SECRET,
    PORT: process.env.PORT
};
console.log(this.MONGO_URL)