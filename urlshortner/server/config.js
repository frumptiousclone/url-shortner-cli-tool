require('dotenv').config('.env');

module.exports = {
    MONGO_URL: process.env.MONGOOSE_URL,
    SECRET: process.env.SECRET,
    PORT: process.env.PORT,
    HOSTNAME: process.env.HOSTNAME
};
