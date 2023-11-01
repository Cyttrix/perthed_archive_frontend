import React from "react";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";

const MovieListPage = () => {
    const [user, token] = useAuth();

    return (
        <h1>Movie List Page</h1>
    );
};

export default MovieListPage;