"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactSchema = new Schema({
    FirstName: {
        type: String,
        trim: true,
        required: true
    },
    LastName: {
        type: String,
        trim: true,
        required: true
    },
    EmailAddress: {
        type: String,
        trim: true,
        required: true
    },
    ContactNumber: {
        type: String,
        trim: true,
        required: true
    }
}, {
    collection: "contacts"
});
exports.Contact = mongoose_1.default.model("Contact", ContactSchema);
//# sourceMappingURL=contact.js.map