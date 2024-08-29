import { request, gql } from 'graphql-request';

const graphqlAPI = 'https://ap-south-1.cdn.hygraph.com/content/cm09vndeh063a08uvlayx2o7u/master';


// fetching post
export const fetchPosts = async () => {
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
  `;

  try {
      const result = await request(graphqlAPI, query);
      return result.postsConnection.edges;
  } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
  }
}

// fetching recentposts

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(
        orderBy: createdAt_ASC
        last: 3
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
    const result = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug,
          AND: { category_some: { slug_in: $categories } }
        }
        last: 3
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
}


// fetching categories
export const fetchCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  try {
    const result = await request(graphqlAPI, query);
    return result.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export const fetchPostsByCategory = async (slug) => {
  const query = gql`
    query GetPostsByCategory($slug: String!) {
      posts(where: { category: { slug: $slug } }) {
        title
        slug
        excerpt
        featuredImage {
          url
        }
        admin {
          name
        }
        createdAt
      }
    }
  `;
  
  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.posts;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return [];
  }
};

// In fetchPosts.js
export const fetchPostBySlug = async (slug) => {
  const query = gql`
    query GetPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        title
        featuredImage {
          url
        }
        content
        // Add other fields as needed
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
};

// fetchPosts.js


export const fetchPostBySlug = async (slug) => {
  const query = gql`
    query GetPostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        title
        featuredImage {
          url
        }
        content
        createdAt
        slug
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { slug });
    return result.post; // Ensure this matches the structure expected by PostDetail
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; // Return null in case of error
  }
};



// Example usage:
// getPosts().then(posts => console.log(posts)).catch(err => console.error(err));
