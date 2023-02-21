import Book from "../../model/bookModel";
import { CreateBook, DelBk, Updatebook } from "./type";
import { GetBk } from "./type";



const BookResolver = {
    Query: {
        allBooks: async()=>{
            try {
                const books = await Book.find()
                return books;
            } catch (error) {
                console.log(error);
                
            }
        },
        singleBook: async(_:unknown, args:GetBk)=>{
            try {
                const id = args.id
                const book = await Book.findById(id)
                return book;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        CreateBookInput: async(_:unknown, args:CreateBook)=>{
            try {
                const newBook = {
                    Title: args.input.Title,
                    datePublished: args.input.datePublished,
                    Description: args.input.Description,
                    pageCount: args.input.pageCount,
                    Genre: args.input.Genre,
                    Publisher: args.input.Publisher,
                    authorid: args.input.authorid
                }
                const book = await Book.create(newBook)
                return book
                
            } catch (error) {
                console.log(error);
            }
        },
        UpdateBookInput: async(_:unknown, args:Updatebook)=>{
            try {
                const id = args.input.id
                const updatebook={
                    id: args.input.id,
                    Title: args.input.Title,
                    datePublished: args.input.datePublished,
                    Description: args.input.Description,
                    pageCount: args.input.pageCount,
                    Genre: args.input.Genre,
                    Publisher: args.input.Publisher,
                    authorid: args.input.authorid
                }
                const updateNew = await Book.findByIdAndUpdate(id, updatebook, {new:true});
                if(updateNew){
                    return updateNew
                }
            } catch (error) {
                console.log(error);
            }
        },
        deleteBook: async(_:unknown, args:DelBk)=>{
            try {
                const id = args.id
                const del = Book.findByIdAndDelete(id)
                return "successfully deleted book";
            } catch (error) {
                console.log(error);
                
            }
        }
    }
}

export default BookResolver;