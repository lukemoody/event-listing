import { Link } from 'react-router-dom';
import { IsArtistLinks, IsArtistLink } from '../../types/ArtistTypes';
import { ReadonlyProps } from '../../types/UtilityTypes';

const ArtistLinks = ({ artists }: ReadonlyProps<IsArtistLinks>) => (
    <section className="artist-links">
        <h2 className="artist-links__title">Artists</h2>
        <ul className="artist-links__list">
            {artists.map((artist: ReadonlyProps<IsArtistLink>, idx: number) => (
                <li key={idx}>
                    <Link
                        to={`/artists/${artist.name.toLowerCase().replace(' ', '-')}/${artist.artistid}/`}
                        className="artist-links__list-item"
                    >
                        <img
                            className="artist-links__cover"
                            src={artist.image}
                            alt={artist.name}
                        />
                        <h3 className="artist-links__name">{artist.name}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);

export default ArtistLinks;
