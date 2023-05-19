import { useEffect } from 'react';
import SearchForm from '../components/search/SearchForm';

function IndexPage() {
    useEffect(() => document.body.classList.add('bg-grey'), []);

    return (
        <div className="search">
            <SearchForm />
        </div>
    );
}

export default IndexPage;
