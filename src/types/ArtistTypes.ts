export interface IsArtistLink {
    artistid: string;
    name: string;
    image: string;
}

export interface IsArtistLinks {
    artists: IsArtistLink[];
}

export interface IsArtistDetail {
    name: string;
    description: string;
    imageurl: string;
    favouritesCount: number;
    spotifyPopularity: string;
    isLoading: boolean;
}

export interface IsArtistContext {
    artist: IsArtistDetail;
    setArtist: (artist: IsArtistDetail) => void;
}
