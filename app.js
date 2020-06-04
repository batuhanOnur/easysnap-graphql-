const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers/index');

const server = new ApolloServer({

    typeDefs: importSchema('./graphql/schema.graphql'),
    resolvers

});

mongoose.connect('mongodb://batuhan:batuhan123456@ds263571.mlab.com:63571/heroku_2rtv800w', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => console.log(e));

const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => {

    console.log('server running');
});