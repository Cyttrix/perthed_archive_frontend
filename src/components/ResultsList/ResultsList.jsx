import React from "react";
import "./ResultsList.css";

const ResultsList = ({ searchResults }) => {
    return (
        <div>
            <h2>Search Results:</h2>
            {searchResults?.map((singleMovie) => (
                <div>
                    <h3>
                        {singleMovie?.data?.name}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default ResultsList;