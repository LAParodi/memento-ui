import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPost = () => {
  return (
    <div className="featuredPost">
      {/* Publicación estrella */}
      <div className="featuredPost__container">
        {/* Imagen */}
        <Image
          src="featured1.jpeg"
          className="featuredPost-image"
          alt={"Imagen"}
          w={895}
        />
        {/* Detalles */}
        <div className="featuredPost__details">
          <h1 className="details-title">01.</h1>
          <Link className="details-link">Diseño Web</Link>
          <span className="details-date">hace 2 días</span>
        </div>
        {/* Título */}
        <Link to={"/test"} className="featuredPost-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Publicaciones importantes */}
      <div className="featuredPost__container">
        {/* Segunda publicación */}
        <div className="featuredPost__box">
          {/* Imagen */}
          <div className="box__image">
            <Image
              src="featured2.jpeg"
              className="featuredPost-image"
              alt={"Imagen"}
              w="298"
            />
          </div>
          {/* Detalles */}
          <div className="w-2/3">
            <div className="box__details">
              <h1 className="boxDetails-title">02.</h1>
              <Link className="boxDetails-link">Diseño Web</Link>
              <span className="boxDetails-date">hace 3 días</span>
            </div>
            <Link to={"/test"} className="boxDetails-mainTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* Tercera publicación */}
        <div className="featuredPost__box">
          {/* Imagen */}
          <div className="box__image">
            <Image
              src="featured3.jpeg"
              className="featuredPost-image"
              alt={"Imagen"}
              w="298"
            />
          </div>
          {/* Detalles */}
          <div className="w-2/3">
            <div className="box__details">
              <h1 className="boxDetails-title">02.</h1>
              <Link className="boxDetails-link">Diseño Web</Link>
              <span className="boxDetails-date">hace 3 días</span>
            </div>
            <Link to={"/test"} className="boxDetails-mainTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* Cuarta publicación */}
        <div className="featuredPost__box">
          {/* Imagen */}
          <div className="box__image">
            <Image
              src="featured4.jpeg"
              className="featuredPost-image"
              alt={"Imagen"}
              w="298"
            />
          </div>
          {/* Detalles */}
          <div className="w-2/3">
            <div className="box__details">
              <h1 className="boxDetails-title">02.</h1>
              <Link className="boxDetails-link">Diseño Web</Link>
              <span className="boxDetails-date">hace 3 días</span>
            </div>
            <Link to={"/test"} className="boxDetails-mainTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
