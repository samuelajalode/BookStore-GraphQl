import AuthorResolver from "./resolvers/authors";
import BookResolver from "./resolvers/books";







export default {
    Query: {
        ...AuthorResolver.Query,
        ...BookResolver.Query
    },
    Mutation: {
        ...AuthorResolver.Mutation,
        ...BookResolver.Mutation
    }
}