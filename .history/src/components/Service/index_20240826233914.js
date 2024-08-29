// import { request, gql } from 'graphql-request';

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


// export const getPosts = async () => {
//     const query = gql `query MyQuery {
//   postsConnection {
//     edges {
//       node {
//         admin {
//           bio
//           name
//           id
//           photo {
//             url
//           }
//         }
//         createdAt
//         slug
//         title
//         excerpt
//         featuredImage {
//           url
//         }
//         category {
//           name
//           slug
//         }
//       }
//     }
//   }
// }`

//     const result = await request(graphqlAPI, query);

//     return result.postsConnection.edges;
// }

import React from 'react';
import { allProducts } from '../../utils/getProducts';
import { gql } from '../../utils/hygraph-client';
import { throttledFetch } from '../../utils/throttle';

// Singular query used in getStaticProps
const query = gql`
  query GetSingleItem($slug: String!) {
    product(where: { slug: $slug }) {
      name
      slug
    }
  }
`;
export async function getStaticPaths() {
  =
  const products = await allProducts();
  const paths = products.map((product) => ({
    params: { slug: product?.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
 
  const product = await throttledFetch(query, { slug: params.slug });
  return {
    props: product,
  };
}

export default function Page({ product }) {
 
  return (
    <>
      <h1>{product.name}</h1>
    </>
  );
}