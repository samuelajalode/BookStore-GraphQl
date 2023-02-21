import {ApolloServer} from "apollo-server"
import mongoose from "mongoose"
import dotenv from "dotenv"
import typeDefs from "./GraphQL/typeDefinition"
import resolvers from "./GraphQL"
dotenv.config()

const server = new ApolloServer({
    typeDefs, resolvers
})

mongoose.connect(process.env.DATABASE_URL!, function (err) {
    if (err) throw err;
    console.log('Successfully connected to database');
})

const port = 4080;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})