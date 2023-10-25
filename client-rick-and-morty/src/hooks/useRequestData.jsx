import { useState, useEffect} from "react"
import axios from "axios"; 
export function useRequestData(url){
const [data, setData]= useState([])
const [isLoading, setIsLoading] = useState(true)
const [error, setIsError] = useState(false)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false)
        setData(res.data.results);

      })
      .catch((err) => {
        setIsLoading(false)
        setIsError(true)
        console.log(err);
        
      })  }, [url]);


  return [data, isLoading,error]
}