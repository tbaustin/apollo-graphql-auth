import { GraphQLID, GraphQLObjectType } from 'graphql';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
