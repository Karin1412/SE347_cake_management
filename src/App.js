import React, {Fragment} from "react"
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_API_URL_BACKEND}/product/getAll`)
  }
  return (
    <div></div>
    
  );
}

export default App;