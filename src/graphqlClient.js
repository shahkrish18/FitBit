import { GraphQLClient } from "graphql-request";

const url='https://public8846a886a3e6a4e3.stepzen.net/api/listening-rat/__graphql';
const apiKey=process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;
const client = new GraphQLClient(url,{
    headers:{
        Authorization:
        `apikey ${apiKey}`
    }
});

export default client;