import React, { useEffect, useState } from 'react'

const DataFetcher = ({ render }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(params) {
      const data = await fetch("https://dummyjson.com/users");
      const response = await data.json();
      setData(response.users);
    };
    fetchData();
  }, []);

  return (
    <div>{render(data)}</div>
  )
};

export default DataFetcher