import { gql } from '@apollo/client'

export default gql`
    query searchByTitle($first: Int!, $title: String!){
    searchAnimeByTitle(first: $first, title: $title){
        nodes{
            id,
            ageRating,
            titles{
                canonical
            },
            description,
            episodeLength,
            episodeCount,
            averageRating,
            favoritesCount
            }
        }
    }
`