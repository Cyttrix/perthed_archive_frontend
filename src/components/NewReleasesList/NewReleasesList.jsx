import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../NewReleasesList/NewReleasesList.css"

const NewReleasesList = ({ }) => {
    const [newReleases, setNewReleases] = useState([]);

    useEffect(() => {
        fetchNewReleases();
    }, []);

    const fetchNewReleases = async () => {
        try {
            const token = '';
    
            
            const config = {
                headers: {Authorization: `Bearer ${token}` },
            };
    
            let response = await axios.get(`https://api4.thetvdb.com/v4/movies/filter?country=usa&genre=3&lang=eng&sort=firstAired&year=2023`, config);
    
            console.log(response.data.data);
            setNewReleases(response.data.data);
        } catch (error) {
            console.log("Error in fetchNewReleases: ", error);
        }
      }

    return (
        <div>
            <h2 style={{marginTop:100}}>New Releases:</h2>
            <div className="container-wrap">
            {newReleases?.map((singleMovie, index) => {
                console.log(singleMovie.image_url);
                return (
                   
                    <Link to={`/${singleMovie?.name}/${singleMovie?.id}`} key={index} className="Link">
                    <div className="inline-div">
                        <img src={`https://artworks.thetvdb.com${singleMovie.image}`} width={165} height={229} />
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



export default NewReleasesList;