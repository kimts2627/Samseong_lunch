import React from "react";
import { GetServerSideProps } from 'next'
import Header from "../components/Header";
import Footer from '../components/Footer'
import KakaoMap from "../components/KakaoMap";
import NewsLetter from "../components/NewsLetter";

const Home: React.FC = () => {

  return <div>
    <Header />
    <NewsLetter />
    <section className='w-full mx-auto max-w-7xl px-4 h-96 flex justify-center items-center'>
      <KakaoMap />
    </section>
    <Footer />
  </div>;
};



export default Home;
