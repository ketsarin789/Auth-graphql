 const graphql = require('graphql');
 const { GraphQLObjectType, GraphQLID} = graphql;
const UserType = require('./user_type');
// //const RootQueryType = require('../types/root_query_type');

const RootQueryType = new GraphQLObjectType({
   name: 'RootQueryType',
    fields: {
      user:{
        type: UserType,
        resolve(parentValue, args, req){  //passport use behide the scine with req
            return req.user;
        }
      }
    }
});



module.exports = RootQueryType;
