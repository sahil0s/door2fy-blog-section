import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.REACT_APP_GRAPHQL_ENDPOINT;

const client = new GraphQLClient(graphqlAPI);

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
