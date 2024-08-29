import { request, gql } from 'graphql-request'

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

    const results = await request(graphql, query)
}