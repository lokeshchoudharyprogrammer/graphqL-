
const express = require("express")
const { ApolloServer } = require('@apollo/server')
const bodyParser = require("body-parser")
const cors = require("cors")
const { expressMiddleware } = require("@apollo/server/express4")
const axios = require("axios")
const { USER } = require("./user")
const { TODO } = require("./todo")

// TODO
const StartServer = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs: `
        type User {
            id:ID!
            name:String!
            username:String!
            email:String!
            phone:String!
            website:String!


        },

            type Todo {

            id:ID!
            title:String!
            completed:Boolean
            user:User

            }

            type Query {

             getTodos:[Todo]
             getrUser:[User]
             getUserId(id:ID!):User

            }
        `,
        resolvers: {
            Todo: {
                user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`)).data

            },
            Query: {
                getTodos: async () => (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
                getrUser: async () => (await axios.get('https://jsonplaceholder.typicode.com/users')).data,
                getUserId: async (parnet, { id }) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            }
        }

    });
    app.use(bodyParser.json())
    app.use(cors())
    await server.start()
    app.use("/graphql", expressMiddleware(server))

    app.listen(8000, () => {
        console.log("yes")
    })

}

StartServer()