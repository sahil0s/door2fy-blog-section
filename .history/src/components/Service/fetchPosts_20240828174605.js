import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = ;

const client = new GraphQLClient(graphqlAPI);

// Fetch all categories
export const fetchCategories = async () => {
  const query = gql`
    query {
      categories {
        id
        name
        slug
      }
    }
  `;
  
  try {
    const result = await client.request(query);
    return result.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Fetch posts by category slug
export const fetchPostsByCategory = async (categorySlug) => {
  const query = gql`
    query GetPostsByCategory($slug: String!) {
      posts(where: { categories_some: { slug: $slug } }) {
        id
        title
        slug
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
    const variables = { slug: categorySlug };
    const result = await client.request(query, variables);
    return result.posts;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return [];
  }
};

// Fetch all posts
export const fetchPosts = async () => {
  const query = gql`
    query {
      posts {
        id
        title
        slug
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
    const result = await client.request(query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Fetch a single post by slug
export const getPostBySlug = async (slug) => {
  const query = gql`
    query GetPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        title
        featuredImage {
          url
        }
        content {
          raw
        }
        createdAt
        slug
        categories {
          slug
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
    const variables = { slug };
    const result = await client.request(query, variables);
    return result.post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};

// Fetch similar posts based on categories
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, categories_some: { slug_in: $categories } }
        first: 3
      ) {
        id
        title
        slug
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
    const variables = { slug, categories };
    const result = await client.request(query, variables);
    return result.posts;
  } catch (error) {
    console.error("Error fetching similar posts:", error);
    return [];
  }
};

// Fetch recent posts
export const getRecentPosts = async () => {
  const query = gql`
    query {
      posts(first: 3, orderBy: createdAt_DESC) {
        id
        title
        slug
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
    const result = await client.request(query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};
