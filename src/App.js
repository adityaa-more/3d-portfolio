import "./App.css";
import React from "react";
import VideoGallery from "./components/VideoGallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="font-mono text-white">

      <Header/>

      <VideoGallery />

      <Footer/>

    </div>
  );
}

export default App;
