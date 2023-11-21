import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../NewReleasesList/NewReleasesList.css"

const RandomMoviesList = ({ }) => {
    const [randomMovies, setRandomMovies] = useState([]);

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber); // You can replace this with whatever you want to do with the random number
        return randomNumber;
      };

    useEffect(() => {
        fetchRandomMovies();
    }, []);

    const fetchRandomMovies = async () => {
        try {
            const randomNumber = generateRandomNumber();
            const token = '';
    
            
            const config = {
                headers: {Authorization: `Bearer ${token}` },
            };
    
            let response = await axios.get(`https://api4.thetvdb.com/v4/movies?page=${randomNumber}`, config);
    
            
            setRandomMovies(response.data.data);
        } catch (error) {
            console.log("Error in fetchNewReleases: ", error);
        }
      }

    return (
        <div>
            <h2 style={{marginTop:100}}>Random Movies:</h2>
            <div className="container-wrap">
            {randomMovies?.map((singleMovie, index) => {
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



export default RandomMoviesList;