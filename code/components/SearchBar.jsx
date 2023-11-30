import React from "react";
import { MdSearch } from 'react-icons/md';
import './SearchBar.css';
const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            {/* <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            /> */}
            <button className="btn" disabled={isLoading || !query} type="submit"><MdSearch size='20px'/></button>
        </form>
    )
};

export default SearchBar;