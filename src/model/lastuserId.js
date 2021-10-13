const mongoose = require("mongoose");

const lastUserIdSchema = new mongoose.Schema({ index: String });

module.exports = mongoose.model("lastUserId", lastUserIdSchema);
