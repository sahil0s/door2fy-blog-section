import { request, gql } from 'graphql-request'
import axios from "axios";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        admin {
                            bio
                            name
                            id
                                photo {
                                    url
                                }
                            }
                                createdAt
                                slug
                                title
                                excerpt
                                featuredImage {
                                url
                                }
                                category {
                                    name
                                    slug
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.postConnection.edges;
}