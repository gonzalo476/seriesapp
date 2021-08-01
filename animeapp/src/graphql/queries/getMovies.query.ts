import { gql } from '@apollo/client'

export default gql`
    query anime($first: Int!){
        anime(first: $first) {
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