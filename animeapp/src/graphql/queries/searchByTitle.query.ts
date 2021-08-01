import { gql } from '@apollo/client'

export default gql`
    query searchByTitle($first: Int!, $title: String!){
    searchAnimeByTitle(first: $first, title: $title){
        nodes{
            id,
            titles{
                canonical
            },
            episodeCount,
            description,
            episodeLength,
            posterImage{
                original{
                url
                }
            }
        }
    }
    }
`