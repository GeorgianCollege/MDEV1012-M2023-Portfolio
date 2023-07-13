"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const UserSchema = new Schema({
    displayName: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    emailAddress: {
        type: String,
        trim: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});
UserSchema.plugin(passport_local_mongoose_1.default);
const Model = mongoose_1.default.model("User", UserSchema);
exports.default = Model;
//# sourceMappingURL=user.js.map