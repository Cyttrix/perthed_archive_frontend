import React from "react";
import "./SearchBar.css";
import { Button } from "@mui/material";

const SearchBar = ({ searchTerm = "", setSearchTerm, handleSubmit }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="searchForm">
        <input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
        />
            <Button varient="contained" type="submit" color="success">Search</Button>
        </form>
    );
};

export default SearchBar;