import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [resp, setResp] = useState({});
    const [error, setError] = useState("");

    const doLogin = ()=> {
        const fetchData = async (url) => {
            try {
                let resp = await axios.get(url);
                let jsonBody = resp.data;
                setResp(jsonBody);
            } catch (error) {
                console.error(`Inside Error Block  ${String(error)}`);
                setError(String(error));
            }
        }
        fetchData(url);
    };

    return [resp, error, doLogin];
    
}

export default useFetch;

