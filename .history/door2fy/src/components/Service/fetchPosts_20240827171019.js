import { request, gql } from 'graphql-request';

const graphqlAPI = 'https://ap-south-1.cdn.hygraph.com/content/cm09vndeh063a08uvlayx2o7u/master';


export const fetchPosts = async () => {
    const query = gql `query MyQuery {
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
}`

try {
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
} catch (error) {
  console.error("Error fetching posts:", error);
  return [];
}
}

export const getRecentPosts = async () => {
  const query = gpl`
    query GetPostDetails(){
      posts(orderBy:)
    }
  `
}


// Example usage:
// getPosts().then(posts => console.log(posts)).catch(err => console.error(err));
