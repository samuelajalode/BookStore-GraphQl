"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDef = (0, apollo_server_1.gql) `

type book{
    id:ID!,
    book_author: String,
    book_ISBN: String,
    book_category: String,
    book_name: String,
    book_id: String
}

type Message{
    message:String!
}

type Query{
    allBooks:[book]
    singleBook(id:ID!):book
}


input CreateBookInput{
    book_author: String!,
    book_ISBN: String!,
    book_category: String!,
    book_name: String!,
    book_id: String!
}


input UpdateBookInput{
    id:ID!,
    book_author: String,
    book_ISBN: String,
    book_category: String,
    book_name: String,
    book_id: String
}


type Mutation{
    createBook(input:CreateBookInput):book
    updateBook(input:UpdateBookInput):book
    deleteBook(id:ID!):Message!
}`;
exports.default = typeDef;
/*import {gql} from 'apollo-server'


const typeDef = gql`


type daddress{
    building: String,
    coord: [Float],
    street: String,
    zipcode: String
}

type dgrades{
    date: String,
    grade: String,
    score: Int
}

type Restaurant{
    id:ID!,
    address: daddress,
    borough: String,
    cuisine: String,
    grades: [dgrades],
    name: String,
    restaurant_id: String
}

type Message{
    message:String!
}

type Query{
    allRestaurants:[Restaurant]
    singleRestaurant(id:ID!):Restaurant
}


input address{
    building: String,
    coord: [Float],
    street: String,
    zipcode: String
}

input grades{
    date: String,
    grade: String,
    score: Int
}


input CreateRestaurantInput{
    address: address,
    borough: String!,
    cuisine: String!,
    grades: [grades],
    name: String!,
    restaurant_id: String!
}


input UpdateRestaurantInput{
    id:ID!,
    address: address,
    borough: String,
    cuisine: String,
    grades: [grades],
    name: String,
    restaurant_id: String
}


type Mutation{
    createRestaurant(input:CreateRestaurantInput):Restaurant
    updateRestaurant(input:UpdateRestaurantInput):Restaurant
    deleteRestaurant(id:ID!):Message!
}`

export default typeDef

*/
