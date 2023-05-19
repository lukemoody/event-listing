import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContext } from './context/SearchContext';
import { EventContext } from './context/EventContext';
import { ArtistContext } from './context/ArtistContext';
import IndexPage from './pages/IndexPage';
import EventResults from './components/events/EventResults';
import EventDetail from './components/events/EventDetail';
import ArtistDetail from './components/artists/ArtistDetail';
import NoPage from './components/error/NoPage';

function App() {
    const [search, setSearch] = useState<object>({
        keyword: '',
        results: [],
        isLoading: true,
    });

    const [event, setEvent] = useState<object>({
        artists: [],
        eventname: '',
        description: '',
        date: '',
        venue: {
            name: '',
        },
        largeimageurl: '',
        openingtimes: {
            doorsclose: '',
            doorsopen: '',
            lastentry: '',
        },
        isLoading: true,
    });

    const [artist, setArtist] = useState<object>({
        name: '',
        description: '',
        imageurl: '',
        favouritesCount: null,
        spotifyPopularity: '',
        isLoading: true,
    });

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            <EventContext.Provider value={{ event, setEvent }}>
                <ArtistContext.Provider value={{ artist, setArtist }}>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={<IndexPage />}
                            />
                            <Route
                                path="/whats-on/events/"
                                element={<EventResults />}
                            />
                            <Route
                                path="/whats-on/events/:id"
                                element={<EventDetail />}
                            />
                            <Route
                                path="/artists/:name/:id/"
                                element={<ArtistDetail />}
                            />
                            <Route
                                path="*"
                                element={<NoPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </ArtistContext.Provider>
            </EventContext.Provider>
        </SearchContext.Provider>
    );
}

export default App;
