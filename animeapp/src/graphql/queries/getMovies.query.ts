import { gql } from '@apollo/client'

export default gql`
    query anime($first: Int!, $cursor: String!){
        anime(first: $first, after: $cursor ) {
            pageInfo{
                hasNextPage,
                endCursor,
                startCursor
            },
            nodes{
                id,
                titles{ 
                    canonical
                },
                episodeCount,
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