"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorModel_1 = __importDefault(require("../../model/authorModel"));
const AuthorResolver = {
    Query: {
        allAuthors: async () => {
            try {
                const authors = await authorModel_1.default.find();
                return authors;
            }
            catch (error) {
                console.log(error);
            }
        },
        singleAuthor: async (_, args) => {
            try {
                const id = args.id;
                const author = await authorModel_1.default.findById(id);
                return author;
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        CreateAuthorInput: async (_, args) => {
            try {
                const newAuthor = {
                    name: args.input.name,
                    email: args.input.email,
                    password: args.input.password,
                    phonenumber: args.input.phonenumber,
                    verified: args.input.verified,
                    salt: args.input.salt,
                    otp: args.input.otp,
                    otp_expiry: args.input.otp_expiry
                };
                const author = await authorModel_1.default.create(newAuthor);
                return author;
            }
            catch (error) {
                console.log(error);
            }
        },
        UpdateAuthorInput: async (_, args) => {
            try {
                const id = args.input.id;
                const updateauthor = {
                    id: args.input.id,
                    name: args.input.name,
                    email: args.input.email,
                    password: args.input.password,
                    phonenumber: args.input.phonenumber,
                    verified: args.input.verified,
                    salt: args.input.salt,
                    otp: args.input.otp,
                    otp_expiry: args.input.otp_expiry
                };
                const updateNew = await authorModel_1.default.findByIdAndUpdate(id, updateauthor, { new: true });
                if (updateNew) {
                    return updateNew;
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteAuthor: async (_, args) => {
            try {
                const id = args.id;
                const del = authorModel_1.default.findByIdAndDelete(id);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
};
exports.default = AuthorResolver;
