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
  // One call to get all paths
  // No need to throttle this
  // Unless you have a LOT of these calls
  const products = await allProducts();
  const paths = products.map((product) => ({
    params: { slug: product?.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // For each path, there will be an API call
  // We need to throttle this
  // We need to throttle it on a global throttle, so we need to set that externally

  // throttleFetch comes from a utility area and is shared among all dynamic route files
  /*
    import pThrottle from 'p-throttle'
    import hygraphClient from './hygraph-client'

    // Set the limit of # of calls per interval in ms (5 per second)
    const throttle = pThrottle({limit: 5, interval: 1000})
    export const throttledFetch = throttle(async (...args) => {
        const [query, vars] = args

        const data = await hygraphClient.request(query, vars)

        return data
    })
  */
  const product = await throttledFetch(query, { slug: params.slug });
  return {
    props: product,
  };
}

export default function Page({ product }) {
  // Each page produced by paths and props
  return (
    <>
      <h1>{product.name}</h1>
    </>
  );
}