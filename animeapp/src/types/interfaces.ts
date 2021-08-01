

interface PageInfo {
    hasNextPage?: boolean,
    endCursor?: string,
    startCursor?: string
}

interface Titles {
    canonical?: string
}

interface Original {
    url?: string
}

interface PosterImage {
    original?: Original[]
}

interface Nodes {
    id?: string,
    titles?: Titles[],
    episodeCount?: number,
    episodeLength?: number,
    posterImage?: PosterImage[]
}

export interface iMovieCard {
    pageInfo?: PageInfo[]
    nodes?: Nodes[]
}