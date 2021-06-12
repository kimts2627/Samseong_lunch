import React from "react";
import { GetServerSideProps } from 'next'
import Header from "../components/Header";
import Footer from '../components/Footer'
import KakaoMap from "../components/KakaoMap";

const Home: React.FC = () => {

  return <div>
    <Header />
    <KakaoMap />
    <Footer />
  </div>;
};



export default Home;
