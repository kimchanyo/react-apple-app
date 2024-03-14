import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { imageBasePath } from "../../constant";
import "./DetailPage.css";

const DetailPage = () => {
  console.log(useParams());

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return null;

  return (
    <section className="detail-page">
      <img
        className="detail-page__poster-img"
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
      />
      <div className="detail-page__content">
        <p className="detail-page__details">
          <span>100% for you</span>{" "}
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </p>
        <h2 className="detail-page__title">
          {movie.title ? movie.title : movie.name}
        </h2>
        <p className="detail-page__overview">평점 : {movie.vote_average}</p>
        <p className="detail-page__overview">{movie.overview}</p>
      </div>
    </section>
  );
};

export default DetailPage;
