import React from "react";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const [user, token] = useAuth();

    return (
        <h1>Profile Page {user.userName}</h1>
    );
};

export default ProfilePage;