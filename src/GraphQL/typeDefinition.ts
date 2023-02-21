import {gql} from 'apollo-server'


const typeDef =gql`

type Author{
    id: ID!,
    name: String,
    email: String,
    password: String,
    phonenumber: String,
    verified: Boolean,
    salt: String,
    otp: Int,
    otp_expiry: String
}

type Message{
    message: String
}

input CreateAuthorInput{
    name: String,
    email: String,
    password: String,
    phonenumber: String,
    verified: Boolean,
    salt: String,
    otp: Int,
    otp_expiry:String
}

input UpdateAuthorInput{
    id: ID!,
    name: String,
    email: String,
    password: String,
    phonenumber: String,
    verified: Boolean,
    salt: String,
    otp: Int,
    otp_expiry: String
}

type Book{
    Title: String,
    datePublished: String,
    Description:  String,
    pageCount: Int,
    Genre: String,
    id: ID!,
    Publisher: String,
    authorid: String
}

input CreateBookInput{
    Title: String,
    datePublished: String,
    Description:  String,
    pageCount: Int,
    Genre: String,
    Publisher: String,
    authorid: String
}

input UpdateBookInput{
    Title: String,
    datePublished: String,
    Description:  String,
    pageCount: Int,
    Genre: String,
    id: ID!,
    Publisher: String,
    authorid: String
}

type Query{
    allAuthors: [Author]
    singleAuthor(id:ID!): Author
    allBooks: [Book]
    singleBook(id: ID!): Book
}

type Mutation{
    CreateAuthorInput(input: CreateAuthorInput): Author
    UpdateAuthorInput(input: UpdateAuthorInput): Author
    deleteAuthor(id:ID!): Message!
    deleteBook(id:ID!): Message!
    CreateBookInput(input: CreateBookInput): Book
    UpdateBookInput(input: UpdateBookInput): Book
}
`

export default typeDef;