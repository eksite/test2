import React, { useState, useEffect } from "react";

const useLoadData = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    const loadData = async () => {
      const result = await fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    loadData();
  }, [url]);
  return data;
};

export default useLoadData;
