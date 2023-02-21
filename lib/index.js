"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeDefinition_1 = __importDefault(require("./GraphQL/typeDefinition"));
const GraphQL_1 = __importDefault(require("./GraphQL"));
dotenv_1.default.config();
const server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefinition_1.default, resolvers: GraphQL_1.default
});
mongoose_1.default.connect(process.env.DATABASE_URL, function (err) {
    if (err)
        throw err;
    console.log('Successfully connected to database');
});
const port = 4080;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
