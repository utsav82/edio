import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { useEffect, useRef, useState } from "react";

export default function Home({ url, time }) {
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const audioRef = useRef(null);
  const messageRef = useRef(null);

  const load = async () => {
    setIsLoading(true);
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on("log", ({ message }) => {
      if (messageRef.current) messageRef.current.innerHTML = message;
    });
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
    });
    setLoaded(true);
    setIsLoading(false);
  };

  const transcode = async () => {
    try {
      const ffmpeg = ffmpegRef.current;
      await ffmpeg.writeFile("input.mp3", await fetchFile(url));

      await ffmpeg.exec([
        "-ss",
        (time.start / 1000).toString(),
        "-t",
        ((time.end - time.start + 1000) / 1000).toString(),
        "-i",
        "input.mp3",
        "-c",
        "copy",
        "output.mp3",
      ]);

      const data = await ffmpeg.readFile("output.mp3");

      if (audioRef.current)
        audioRef.current.src = URL.createObjectURL(
          new Blob([data.buffer], { type: "audio/mp3" })
        );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return loaded ? (
    <div className="flex flex-col items-center justify-center p-6">
      <audio ref={audioRef} controls ></audio>
      <button
        onClick={transcode}
        className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded mt-5"
      >
        Trim Audio
      </button>
      {/* Uncomment if you want to show FFmpeg logs */}
      {/* <p ref={messageRef}></p> */}
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <button className="py-3 px-6 bg-blue-500 text-white rounded mt-5">
        Loading FFmpeg
        {isLoading && (
          <span className="animate-spin ml-3">
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="loading"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}
