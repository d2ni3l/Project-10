import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "../components/Row";
import Search from "../components/Search";
import Trending from "../components/Trending";
import requests from "../Request";

const Main = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);

  useEffect(() => {
    axios.get(requests.requestTrending).then((res) => {
      setTrending(res.data.results);
    });

    axios.get(requests.requestPopular).then((res) => {
      setPopular(res.data.results);
    });

    axios.get(requests.requestTopRatedTV).then((res) => {
      setTopRatedTV(res.data.results);
    });

    axios.get(requests.requestPopularTV).then((res) => {
      setTrendingTV(res.data.results);
    });
  }, []);
  return (
    <>
      <Search />
      <div className='pt-10'></div>
      <Trending trending={trending} section='Trending' type='Movie' />
      <div className='pt-10'></div>
      <Row show={topRatedTV} section='Top Rated' type='TV Series' />
      <div className='pt-10'></div>
      <Row show={popular} section='Popular' type='Movie' />
      <div className='pt-10'></div>
      <Trending trending={trendingTV} section='Trending' type='TV Series' />
    </>
  );
};

export default Main;
