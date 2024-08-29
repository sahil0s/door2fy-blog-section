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
}
`

try {
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
} catch (error) {
  console.error("Error fetching posts:", error);
  return [];
}
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last: 3
        ) {
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }
  `
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export const getSimilarPosts = async() => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]){
      posts(
        where: { sulg_not: $slug, AND { categories_some:{ slug_in: $categories}}}
        last:3
      ) {
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }
  `
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// fetchPosts.js
export const getRecentPosts = async () => {
  // Fetch recent posts from your API
  const response = await fetch('YOUR_RECENT_POSTS_API_ENDPOINT');
  const data = await response.json();
  return data.posts; // Adjust based on actual API response
};

export const getSimilarPosts = async (categories, slug) => {
  // Fetch similar posts based on categories and slug
  const response = await fetch('YOUR_SIMILAR_POSTS_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ categories, slug }),
  });
  const data = await response.json();
  return data.posts; // Adjust based on actual API response
};


// Example usage:
// getPosts().then(posts => console.log(posts)).catch(err => console.error(err));
