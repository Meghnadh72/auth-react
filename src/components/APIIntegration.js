import axios from "axios";
import { useEffect, useState } from "react";
/* name - direct key {title, first, last}
gender - direct key String
country - location key  */
const RandomUserComponent = () => {
    const [userList, setUserList] = useState([]);
    const [errorMsg, setError] = useState("");
    const getURL = `https://randomuser.me/api/?results=20`;
    const [userListExists, setUserListExists] = useState(false);

    useEffect( () => {
        fetchUserDetails(getURL);
    }, [])

    useEffect( () => {
        if(userList.length > 0) setUserListExists(true);
    }, [userList])

    const parseListOfUsers = (listOfUsers) => {
        let requiredUserDetails = [];
        listOfUsers.forEach(user => {
            let {name, gender, location} = user;
            let fullName = `${name.title}.${name.first} ${name.last}`
            let country = location.country;
            let userObject = {
                fullName,
                gender,
                country
            }
            requiredUserDetails.push(userObject);
        });
        console.log(requiredUserDetails);
        setUserList(requiredUserDetails);
    }
    const fetchUserDetails = async (url) => {
        try{
            let resp = await axios.get(url);
            let listOfUsers = resp.data;
            console.log(listOfUsers);
            parseListOfUsers(listOfUsers.results);
        }catch(error) {
            console.error(error);
            setError(String(error));
        }
    } 

    if (errorMsg.length > 1) {
        return (<div>{errorMsg}</div>)
    }

    const userListJSX = userList.map((user, index) => (
        <div key={index}>
            <p>Full Name : {user.fullName}</p>
            <p>Gender : {user.gender}</p>
            <p>Country : {user.country}</p>
        </div>
    ));

    return (
        <>
            {userListExists ? userList[0].country : <></>}
            {userListJSX}
        </>
    )
}

export default RandomUserComponent;