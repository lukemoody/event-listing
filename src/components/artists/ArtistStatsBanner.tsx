import { useContext } from 'react';
import { ArtistContext } from '../../context/ArtistContext';
import { IsArtistContext } from '../../types/ArtistTypes';

const ArtistStatsBanner = () => {
    const { artist, setArtist } = useContext(ArtistContext) as IsArtistContext;

    return (
        <div className="artist-stats-banner">
            <div className="artist-stats-banner__card container">
                {artist.imageurl && (
                    <div className="artist-stats-banner__card-image">
                        <img
                            src={artist.imageurl}
                            alt={artist.name}
                        />
                    </div>
                )}
                <div className="artist-stats-banner__card-content">
                    {artist.name && <h1 className="artist-stats-banner__card-title">{artist.name}</h1>}
                    <ul className="artist-stats-banner__card-list">
                        {artist.favouritesCount && (
                            <li className="artist-stats-banner__card-list-item">
                                {artist.favouritesCount} tracking this
                            </li>
                        )}
                        {artist.spotifyPopularity && (
                            <li className="artist-stats-banner__card-list-item">
                                {artist.spotifyPopularity} popularity on Spotify
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="artist-stats-banner__image">
                <img
                    src="https://d1plawd8huk6hh.cloudfront.net/images/landing/backgrounds/artist-background.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ArtistStatsBanner;
