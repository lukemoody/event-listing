import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { IsSearchContext } from '../../types/SearchTypes';
import { IsEventCardDetail } from '../../types/EventTypes';
import SearchForm from '../search/SearchForm';
import EventCard from './EventCard';

function EventResults() {
    const { search, setSearch } = useContext(SearchContext) as IsSearchContext;
    const navigate = useNavigate();

    useEffect(() => {
        if (search.results.length === 0) navigate('/');
    }, []);

    if (search.isLoading) return <p>Loading...</p>;

    return (
        <>
            <SearchForm />
            <div className="grid container">
                {search.results.map((events: IsEventCardDetail, idx: number) => (
                    <EventCard
                        key={idx}
                        event={events}
                    />
                ))}
            </div>
        </>
    );
}

export default EventResults;
