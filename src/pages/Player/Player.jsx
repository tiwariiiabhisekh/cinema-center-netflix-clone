import React, { use, useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [server, setServer] = useState("https://vidsrc.cc/v2/embed/movie/");

  // const [apiData, setApiData] = useState({
  //   name: "",
  //   key: "",
  //   published_at: "",
  //   typeof: "",
  // });

  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThkZDNmZjBhNjMzNWI5ZjM1ODU1YjJmNjA0NTNmNiIsIm5iZiI6MTc1MzQ0MDY5MC44NjQsInN1YiI6IjY4ODM2MWIyZDlkYTE4ZTUxNjhhNjQ0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHZ70CBlnfcYvsDgxCHWQpbTgj6z7Tl8s2Fg1DvqZD0",
  //   },
  // };

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  //     options
  //   )
  //     .then((res) => res.json())

  //     .then((res) => setApiData(res.results[0]))
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   console.log(apiData);
  // }, [apiData]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />

      <iframe
        width="90%"
        height="90%"
        src={server + `${id}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="servers">
        <button 
        
        style={{border: server === "https://vidsrc.cc/v2/embed/movie/" ? "3px solid blue":null}}
        
        onClick={()=>setServer("https://vidsrc.cc/v2/embed/movie/")}>Server 1


        </button>


        <button 
        style={{border: server === "https://player.autoembed.cc/embed/movie/" ? "3px solid blue":null}}
        onClick={()=>setServer("https://player.autoembed.cc/embed/movie/")}>Server 2</button>
        <button 
        style={{border: server === "https://vidlink.pro/movie/" ? "3px solid blue":null}}
        onClick={()=>setServer("https://vidlink.pro/movie/")} >Server 3</button>
        <button 
        style={{border: server === "https://embed.su/embed/movie/" ? "3px solid blue":null}}
        onClick={()=>setServer("https://embed.su/embed/movie/")} >Server 4</button>
      </div>
    </div>
  );
};

export default Player;
