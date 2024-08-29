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



// Example usage:
// getPosts().then(posts => console.log(posts)).catch(err => console.error(err));
