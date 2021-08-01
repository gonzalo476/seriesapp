import { gql } from '@apollo/client'

export default gql` 
    query findAnimeById($id: String!){
    findAnimeById(id: $id) {
    titles {
      canonical
    }
    averageRating
    favoritesCount
    youtubeTrailerVideoId
    episodeCount
    episodeLength
    bannerImage {
      original {
        url
      }
    }
    posterImage {
      original {
        url
      }
    }
    description
  }  
}
`