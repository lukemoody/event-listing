import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ArtistContext } from '../../context/ArtistContext';
import { IsArtistContext } from '../../types/ArtistTypes';
import Header from '../common/Header';
import ArtistStatsBanner from './ArtistStatsBanner';

function ArtistDetail() {
    const params = useParams();
    const { artist, setArtist } = useContext(ArtistContext) as IsArtistContext;

    useEffect(() => {
        const url = `https://www.skiddle.com/api/v1/artist/${params.id}/?api_key=${process.env.REACT_APP_API_KEY}`;
        axios
            .get(url)
            .then(res => {
                console.log(res.data.results);
                setArtist({
                    ...artist,
                    name: res.data.results.name,
                    description: res.data.results.description,
                    imageurl: res.data.results.imageurl,
                    favouritesCount: res.data.results.favouritesCount,
                    spotifyPopularity: res.data.results.spotifyPopularity,
                    isLoading: false,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Header />
            <ArtistStatsBanner />
            <div className="artist container">
                <div className="artist__description">
                    <p>{artist.description}</p>
                </div>
            </div>
        </>
    );
}

export default ArtistDetail;
