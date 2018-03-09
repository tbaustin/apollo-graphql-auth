import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

import UserType from './types/user_type';
import AuthService from '../services/auth';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { email, password }, req) {
        AuthService.signup({ email, password, req });
      }
    }
  }
});

export default mutation;
