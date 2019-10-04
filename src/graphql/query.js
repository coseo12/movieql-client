import gql from 'graphql-tag';

export const movies = gql`
  query {
    movies {
      id
      title
      score
    }
  }
`;

export const movieDetails = gql`
  query getMovieDetails($id: Float!) {
    movie(id: $id) {
      id
      title
      score
    }
  }
`;
