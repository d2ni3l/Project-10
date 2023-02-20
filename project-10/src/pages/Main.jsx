import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Row from "../components/Row";
import Search from "../components/Search";
import Trending from "../components/Trending";
import requests from "../Request";

const Main = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [latestTV, setLatestTV] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [horrorTV, setHorrorTV] = useState([]);
  const [animationTV, setAnimationTV] = useState([]);
  const [war, setWar] = useState([]);
  const [itemInfo, setItemInfo] = useState('')

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

    axios.get(requests.requestTopRated).then((res) => {
      setTopRated(res.data.results);
    });

    axios.get(requests.requestTopRatedTV).then((res) => {
      setLatestTV(res.data.results);
    });

    axios.get(requests.requestUpcoming).then((res) => {
      setUpcoming(res.data.results);
    });

    axios.get(requests.requestHorrorTV).then((res) => {
      setHorrorTV(res.data.results);
    });

    axios.get(requests.requestAnimationTv).then((res) => {
      setAnimationTV(res.data.results);
    });

    axios.get(requests.requestWar).then((res) => {
      setWar(res.data.results);
    });
 
  }, []);

  console.log(itemInfo)

  return (
    <>
     {itemInfo === '' ?  null : <Modal  setItemInfo={setItemInfo} item={itemInfo}/>}
      <Search />
      <div className='pt-10'></div>
      <Trending setItemInfo={setItemInfo} trending={trending} section='Trending' type='Movie' />
      <div className='pt-10'></div>
      <Row show={topRatedTV} section='Top Rated' type='TV Series' />
      <div className='pt-10'></div>
      <Row show={popular} section='Popular' type='Movie' />
      <div className='pt-10'></div>
      <Trending trending={trendingTV} section='Trending' type='TV Series' />
      <div className='pt-10'></div>
      <Row show={topRated} section='Top Rated' type='Movie' />
      <div className='pt-10'></div>
      <Row show={animationTV} section='Animation' type='TV Series' />
      <div className='pt-10'></div>
      <Trending trending={upcoming} section='Upcoming' type='Movie' />
      <div className='pt-10'></div>
      <Row show={horrorTV} section='Horror' type='TV Series' />
      <div className='pt-10'></div>
      <Row show={latestTV} section='Latest TV' type='TV Series' />
      <div className='pt-10'></div>
      <Row show={war} section='War & Politics' type='Movie' />
      <div className='pt-10'></div>
    </>
  );
};

export default Main;
