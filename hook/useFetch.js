import {useState, useEffect} from 'react'
import axios from 'axios'
//import {RAPID_API_KEY} from '@env'

//const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //const axios = require('axios');

    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        "X-RapidAPI-Key": "bf34a0625fmsh4f2be780e0e52dap12ef87jsnc18c3890c2ae",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
      params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)
        try {
          const response = await axios(options);
          console.log(response.data.data);
          setData(response.data.data);
          setIsLoading(false)
        } catch (error) {
          console.error('API Error', error)
          setError(error);
        }finally {
          setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data, isLoading, error, refetch}

}

export default useFetch;
