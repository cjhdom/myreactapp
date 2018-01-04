import React from 'react';

const Search = () => {
    return (
        <form className="header_search" name="header_search">
            <input type="search" placeholder="검색" className=""/>
            <input type="button" value="검색" />
        </form>
    )
};

export default Search