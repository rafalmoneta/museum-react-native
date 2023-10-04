import React from "react";
import axios from "axios";

interface QueryOptions {} // TODO: add type

export default function useFetch(endpoint: string, query: any) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const options = {
    method: "GET",
    url: `https://api.artic.edu/api/v1/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, error, isLoading, refetch };
}
