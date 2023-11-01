import React from "react";
import {useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import ResultsList from "../../components/ResultsList/ResultsList";


const BrowsePage = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

  const fetchMoviesByTitle = async () => {
    try {
        const token = '';

        const config = {
            headers: {Authorization: `Bearer ${token}` },
        };

        let lowerCaseSearch = searchTerm.toLowerCase();
        let response = await axios.get(`https://api4.thetvdb.com/v4/search?query=${lowerCaseSearch}`, config);
        console.log(response.data);
        setSearchResults(response.data);
    } catch (error) {
        console.log("Error in fetchMoviesByTitle: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchMoviesByTitle();
  }
    
    return (
        <div>
            <h1>Browser Page</h1>
                <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSubmit={handleSubmit}
                />
                <ResultsList />
        </div>
    );
};

export default BrowsePage;