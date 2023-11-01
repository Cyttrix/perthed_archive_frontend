import React from "react";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";

const ProfilePage = () => {
    const [user, token] = useAuth();

    return (
        <h1>Profile Page</h1>
    );
};

export default ProfilePage;