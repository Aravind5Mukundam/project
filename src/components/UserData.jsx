import React,{ useState, useEffect } from 'react';
import axios from "axios";

const dataUrl = "https://panorbit.in/api/users.json";




const UserData = () =>{

    const [userData, setUserData] = useState({});

    useEffect(() => {
        getUserWithFetch();
    }, []);

    const getUserWithFetch = async () => {
        const response = await fetch(dataUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    };
    return(
        <>  
            <img src={response.profilepicture}></img><h4>{response.name}</h4>
        </>
    );
}

export default UserData;