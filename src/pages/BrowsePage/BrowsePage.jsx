import React from "react";
import {useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import ResultsList from "../../components/ResultsList/ResultsList";
import NewReleasesList from "../../components/NewReleasesList/NewReleasesList.jsx";
import RandomMoviesList from "../../components/RandomMoviesList/RandomMoviesList.jsx";


const BrowsePage = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

  const fetchMedia = async () => {
    try {

        const token = '';

        
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
        <div style={{marginLeft:40}}>
            <div>
            <h1>Browse Page</h1>
                <SearchBar
                style={{}}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSubmit={handleSubmit}
                />
            </div>
                <ResultsList searchResults={searchResults}/>
                <RandomMoviesList />
                <NewReleasesList/>
        </div>
    );
};

export default BrowsePage;