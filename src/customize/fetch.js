import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  let [isErr, setIsErr] = useState(false);
  async function fetchData() {
    let res = await axios.get(url);
    let dataRes = res && res.data ? res.data : [];
    setdata(dataRes);
    setLoading(false);
    setIsErr(false);
  }
  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      setIsErr(true);
      setLoading(false);
      console.log("Error: ", e.message);
    }
  }, []);
  return { data, loading, isErr };
};
export default useFetch;
