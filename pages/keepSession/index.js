import React from "react";
import useSWR from "swr";

function keepSession() {
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const apiUrl = "/ib20/act/PBKMAN0000002400A";

  const { data, error, mutate } = useSWR(apiUrl, fetchData);

  const fetchPeriodically = async () => {
    // 데이터를 새로고침하고 싶은 경우 fetchData 함수를 호출
    const newData = await fetchData(apiUrl);
    mutate(newData);
  };

  // 8분마다 fetchPeriodically 함수 호출
  setInterval(fetchPeriodically, 8 * 30 * 1000);

  return <div>keepSession</div>;
}

export default keepSession;
