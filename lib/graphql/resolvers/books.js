"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookModel_1 = __importDefault(require("../../model/bookModel"));
const BookResolver = {
    Query: {
        allBooks: async () => {
            try {
                const books = await bookModel_1.default.find();
                return books;
            }
            catch (error) {
                console.log(error);
            }
        },
        singleBook: async (_, args) => {
            try {
                const id = args.id;
                const book = await bookModel_1.default.findById(id);
                return book;
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        CreateBookInput: async (_, args) => {
            try {
                const newBook = {
                    Title: args.input.Title,
                    datePublished: args.input.datePublished,
                    Description: args.input.Description,
                    pageCount: args.input.pageCount,
                    Genre: args.input.Genre,
                    Publisher: args.input.Publisher,
                    authorid: args.input.authorid
                };
                const book = await bookModel_1.default.create(newBook);
                return book;
            }
            catch (error) {
                console.log(error);
            }
        },
        UpdateBookInput: async (_, args) => {
            try {
                const id = args.input.id;
                const updatebook = {
                    id: args.input.id,
                    Title: args.input.Title,
                    datePublished: args.input.datePublished,
                    Description: args.input.Description,
                    pageCount: args.input.pageCount,
                    Genre: args.input.Genre,
                    Publisher: args.input.Publisher,
                    authorid: args.input.authorid
                };
                const updateNew = await bookModel_1.default.findByIdAndUpdate(id, updatebook, { new: true });
                if (updateNew) {
                    return updateNew;
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteBook: async (_, args) => {
            try {
                const id = args.id;
                const del = bookModel_1.default.findByIdAndDelete(id);
                return "successfully deleted book";
            }
            catch (error) {
                console.log(error);
            }
        }
    }
};
exports.default = BookResolver;
