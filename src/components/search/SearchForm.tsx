import { useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { SearchContext } from '../../context/SearchContext';
import { IsSearchContext } from '../../types/SearchTypes';

const SearchForm = () => {
    const { search, setSearch } = useContext(SearchContext) as IsSearchContext;
    const input = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    /**
     * Initiate Search
     * @param e
     */
    const initSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = `https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_API_KEY}&keyword=${input.current?.value}`;

        axios
            .get(url)
            .then(res => {
                setSearch({
                    ...search,
                    keyword: input.current?.value,
                    results: res.data.results,
                    isLoading: false,
                });
                navigate('/whats-on/events/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="search-form">
            <div className="search-form__logo">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Skiddle"
                    />
                </Link>
            </div>
            <form
                className="form container-slim"
                onSubmit={e => initSearch(e)}
            >
                <input
                    className="form-input"
                    name="search"
                    placeholder="Search for events"
                    ref={input}
                    defaultValue={search.keyword}
                />
            </form>
        </div>
    );
};

export default SearchForm;
