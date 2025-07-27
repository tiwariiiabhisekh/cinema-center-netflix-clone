import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
// import card_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
import { tmdbOptions, TMDB_ENDPOINTS, getImageUrl } from "../../api/tmdbConfig";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          TMDB_ENDPOINTS.GET_MOVIES(category),
          tmdbOptions
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setApiData([]);
      }
    };

    fetchMovies();

    const currentCardsRef = cardsRef.current;
    if (currentCardsRef) {
      currentCardsRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentCardsRef) {
        currentCardsRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={getImageUrl(card.backdrop_path, "w500")}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
