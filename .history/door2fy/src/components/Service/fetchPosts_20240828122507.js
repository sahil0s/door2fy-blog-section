import { request, gql } from 'graphql-request';

const graphqlAPI = 'https://ap-south-1.cdn.hygraph.com/content/cm09vndeh063a08uvlayx2o7u/master';

// Fetch all posts
export const fetchPosts = async () => {
  const query = gql`
    query {
      postsConnection {
        edges {
          node {
            admin {
              name
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
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Fetch recent posts
export const getRecentPosts = async () => {
  const query = gql`
    query {
      posts(orderBy: createdAt_DESC, first: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};

// Fetch similar posts based on categories and slug
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query ($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: { category_some: { slug_in: $categories } } }
        first: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug, categories });
    return result.posts;
  } catch (error) {
    console.error("Error fetching similar posts:", error);
    return [];
  }
};

// Fetch a single post by slug
export const fetchPostBySlug = async (slug) => {
  const query = gql`
    query ($slug: String!) {
      post(where: { slug: $slug }) {
        title
        featuredImage {
          url
        }
        content
        createdAt
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};
