import Author from "../../model/authorModel";
import { Authorlist } from "./type";
import { Updateauthor } from "./type";
import { GetSinA, DelAut } from "./type";


const AuthorResolver = {
    Query: {
        allAuthors: async()=>{
            try {
                const authors = await Author.find()
                return authors;
            } catch (error) {
                console.log(error);
                
            }
        },
        singleAuthor: async(_:unknown, args:GetSinA)=>{
            try {
                const id = args.id
                const author = await Author.findById(id)
                return author;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        CreateAuthorInput: async(_:unknown, args:Authorlist)=>{
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
                }
                const author = await Author.create(newAuthor)
                return author
                
            } catch (error) {
                console.log(error);
            }
        },
        UpdateAuthorInput: async(_:unknown, args:Updateauthor)=>{
            try {
                const id = args.input.id
                const updateauthor={
                    id: args.input.id,
                    name: args.input.name,
                    email: args.input.email,
                    password: args.input.password,
                    phonenumber: args.input.phonenumber,
                    verified: args.input.verified,
                    salt: args.input.salt,
                    otp: args.input.otp,
                    otp_expiry: args.input.otp_expiry
                }
                const updateNew = await Author.findByIdAndUpdate(id, updateauthor, {new:true});
                if(updateNew){
                    return updateNew
                }
            } catch (error) {
                console.log(error);
            }
        },
        deleteAuthor: async(_:unknown, args:DelAut)=>{
            try {
                const id = args.id
                const del = Author.findByIdAndDelete(id)
            } catch (error) {
                console.log(error);
                
            }
        }
    }
}






export default AuthorResolver;