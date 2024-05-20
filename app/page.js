"use client";
import React, { useState } from "react";
import Mirt from "react-mirt";
import "./player.css";
import FileUploader from "@/app/components/Uploader";
import AudioEditor from "@/app/components/AudioEditor";
import Link from "next/link";
import Header from "./components/Header";
import FeaturesSection from "./components/Features";
const Home = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [url, setUrl] = useState(null);
  const [time, setTime] = useState(null);

  const handleFileUpload = (file) => {
    const url = URL.createObjectURL(file);
    setAudioSrc(file);
    setUrl(url);
  };

  const handleTime = (e) => {
    console.log(e);
    setTime(e);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y h-screen">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Effortlessly Trim Your Audio
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4 ml-10">
                <FileUploader onFileUpload={handleFileUpload} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              {audioSrc && (
                <>
                  <Mirt
                    className="w-1/2 m-10"
                    file={audioSrc}
                    waveformLoading={true}
                    onChange={handleTime}
                  />
                  <AudioEditor url={url} time={time} />
                </>
              )}
            </div>
          </div>
        </section>
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Home;
