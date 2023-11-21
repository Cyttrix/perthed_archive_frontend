import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
    return (
        <div>
            <h2>Search Results:</h2>
            <div className="container-wrap">
            {searchResults?.map((singleMovie, index) => {
                return (
                   
                        
                            <Link to={`/${singleMovie?.name}/${singleMovie?.tvdb_id}`} key={index} className="Link">
                            <div className="inline-div">
                                <img src={singleMovie.image_url} width={165} height={229} />  
                                <div>
                                {singleMovie?.name}
                                </div>
                            </div>
                          
                    
                            </Link>
                        
                        
                       

                )
            
            })} 
            </div>
    
</div>
 
   


    );
    
};



export default ResultsList;