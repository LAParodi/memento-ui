import { Link } from "react-router-dom";

import PostList from "../components/PostList";
import FeaturedPost from "../components/FeaturedPost";
import MainCategories from "../components/MainCategories";

const Homepage = () => {
  return (
    <div className="section">
      {/* Breadcrumbs */}
      <div className="flex gap-4">
        <Link to={"/"}> Inicio </Link>
        <span>•</span>
        <span className="breadcrumb">Blog & Artículos</span>
      </div>
      {/* Introducción */}
      <div className="flexBetween">
        {/* Titular */}
        <div className="">
          <h1 className="main-title">Lorem ipsum dolor sit amet.</h1>
          <p className="main-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores dicta molestias sequi corporis sed.
          </p>
        </div>
        {/* Botón animado */}
        <Link to={"write"} className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Escribe tu historia •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Piensa & Recuerda •
              </textPath>
            </text>
          </svg>          
          <button className="main-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* Categorías principales */}
      <MainCategories />
      {/* Publicaciones principales */}
      <FeaturedPost />
      {/* Publicaciones de usuarios */}
      <div className="">
        <h1 className="post-title">Entradas recientes</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
