import { Link } from "react-router-dom";
import Image from "./Image";

const ListItem = () => {
  return (
    <div className="ListItem">
      {/* Imagen */}
      <div className="ListItem__imageContainer">
        <Image
          src={"postImg.jpeg"}
          alt={"Image"}
          className={"ListItem-image"}
        />
      </div>
      {/* Detalles */}
      <div className="ListItem__detailsContainer">
        {/* Título */}
        <Link to={"/test"} className="ListItem-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Link>
        {/* Detalles */}
        <div className="ListItem__detailsItem">
          <span>Publicado por</span>
          <Link className="detailsItem-link">Luigi P.</Link>
          <span>en</span>
          <Link className="detailsItem-link">Diseño Web</Link>
          <span>hace días.</span>
        </div>
        <p className="detailsItem-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut,
          consectetur porro aspernatur error accusamus, dicta aut ipsum
          corporis, dignissimos necessitatibus. Qui voluptate eum sunt id
          numquam ab minus commodi?
        </p>
        <Link to={"/test"} className="detailsItem-viewMore">Leer más</Link>
      </div>
    </div>
  );
};

export default ListItem;
