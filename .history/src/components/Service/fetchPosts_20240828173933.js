import axios from 'axios';

// Replace with your actual GraphQL endpoint or REST API URL
const API_URL = 'https://your-api-endpoint.com/graphql';

// Fetch recent posts
export const getRecentPosts = async () => {
  const query = `
    {
      posts(orderBy: createdAt_DESC, first: 5) {
        title
        slug
        createdAt
      }
    }
  `;
  
  try {
    const response = await axios.post(API_URL, { query });
    return response.data.data.posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};

// Fetch similar posts
export const getSimilarPosts = async (categories, slug) => {
  const query = `
    {
      posts(
        where: {
          slug_not: "${slug}", 
          AND: {categories_some: {slug_in: ${JSON.stringify(categories)}}}
        }
        orderBy: createdAt_DESC
        first: 3
      ) {
        title
        slug
        createdAt
      }
    }
  `;

  try {
    const response = await axios.post(API_URL, { query });
    return response.data.data.posts;
  } catch (error) {
    console.error("Error fetching similar posts:", error);
    return [];
  }
};

// Fetch post details
export const getPostDetails = async (slug) => {
  const query = `
    {
      post(where: { slug: "${slug}" }) {
        title
        content {
          raw
        }
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
        createdAt
      }
    }
  `;

  try {
    const response = await axios.post(API_URL, { query });
    return response.data.data.post;
  } catch (error) {
    console.error("Error fetching post details:", error);
    return null;
  }
};

// Fetch posts for PostCard component
export const getPosts = async () => {
  const query = `
    {
      posts {
        title
        slug
        excerpt
        createdAt
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(API_URL, { query });
    return response.data.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
