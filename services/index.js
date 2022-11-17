import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPostsCount = async()=>{
  const query= gql`
  query getPostCount {
    postsConnection {
      aggregate {
        count
      }
    }
  }`
  const result = await request(graphqlAPI,query)
  return result;
}
export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection(where: {date_gte: "today"},orderBy: date_ASC) {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          excerpt
          title
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
          date
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
export const getPostsByPage = async (skip) => {
  const query = gql`
  query MyQuery ($skip: Int!) {
    postsConnection(where: {date_gte: "today"},orderBy: date_ASC,skip: $skip) {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          excerpt
          title
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
          date
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query, {skip});

  return result.postsConnection.edges;
};
export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        date
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        date
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        date
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        date
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            date
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {slug} );

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
  query GetFeaturedPost {
    posts(where: {featuredPost: true, date_gte: "today"}) {
      author {
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      date
      title
      slug
      createdAt
    }
  }
 
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: date_ASC,
        last: 3,
        where: {date_gte: "today"}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        date
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};