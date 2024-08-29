import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

NEXT_PUBLIC_GRAPHCMS_ENDPOINT=url{`https://ap-south-1.cdn.hygraph.com/content/cm09vndeh063a08uvlayx2o7u/master`}

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