import React from "react";
import {useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import ResultsList from "../../components/ResultsList/ResultsList";


const BrowsePage = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

  const fetchMedia = async () => {
    try {

        const token = "";
        
        const config = {
            headers: {Authorization: `Bearer ${token}` },
        };

        let lowerCaseSearch = searchTerm.toLowerCase();
        let response = await axios.get(`https://api4.thetvdb.com/v4/search?query=${lowerCaseSearch}&type=movie`, config);
        console.log(response.data.data);
        setSearchResults(response.data.data);
    } catch (error) {
        console.log("Error in fetchMoviesByTitle: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchMedia();
  }
    
    return (
        <div>
            <h1>Browser Page</h1>
                <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSubmit={handleSubmit}
                />
                <ResultsList searchResults={searchResults}/>
        </div>
    );
};

export default BrowsePage;