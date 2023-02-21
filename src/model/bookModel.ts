import mongoose,{Schema} from "mongoose";



export interface bookInstance {
    Title: string,
    datePublished: string,
    Description:  string,
    pageCount: number,
    Genre: string,
    id: string,
    Publisher: string,
    authorid: string
};

const bookSchema = new Schema({
    Title: {type: String},
    datePublished: {type: String},
    Description: {type: String},
    pageCount: {type: Number},
    Genre: {type: String},
    Publisher: {type: String},
    authorid: {type: String},
},
{
   timestamps: true
})

const Book = mongoose.model<bookInstance>("books", bookSchema)

export default Book