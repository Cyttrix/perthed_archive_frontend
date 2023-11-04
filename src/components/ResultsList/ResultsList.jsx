import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
    return (
        <div>
            <h2>Search Results:</h2>
            
            {searchResults?.map((singleMovie, index) => {
                return (
                   
                    <Link to={`/${singleMovie?.name}/${singleMovie?.tvdb_id}`} key={index}>
                    <h5>
                    <img src={singleMovie.image_url} width={136} height={200} />  
                        {singleMovie?.name}
                          
                    </h5>
                    </Link>   

                )
            
            })} 
    
</div>
 
   


    );
    
};



export default ResultsList;