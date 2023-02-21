import mongoose, {Schema} from 'mongoose';


export interface AuthorInstance {
    name: string,
    email: string,
    password: string,
    phonenumber: string,
    id: string,
    verified: boolean,
    salt: string,
    otp: number,
    otp_expiry: string
};

const authorSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    phonenumber: {type: String},
    verified: {type: Boolean},
    salt: {type: String},
    otp: {type: Number},
    otp_expiry: {type: String},
},
{
   timestamps: true
})

const Author = mongoose.model<AuthorInstance>("authors", authorSchema)

export default Author