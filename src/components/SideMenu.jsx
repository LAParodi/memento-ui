import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="postList__sideMenu">
      <h1 className="postList-subTitles">Buscar</h1>
      <Search />
      <h1 className="mt-8 postList-subTitles">Filtros</h1>
      {/* Filtros */}
      <div className="postList__filters">
        <label className="postList__filters-label">
          <input
            type="radio"
            name="sort"
            value={"newest"}
            className="postList__filters-input"
          />
          Lo último
        </label>
        <label className="postList__filters-label">
          <input
            type="radio"
            name="sort"
            value={"popular"}
            className="postList__filters-input"
          />
          Populares
        </label>
        <label className="postList__filters-label">
          <input
            type="radio"
            name="sort"
            value={"trending"}
            className="postList__filters-input"
          />
          En tendencia
        </label>
        <label className="postList__filters-label">
          <input
            type="radio"
            name="sort"
            value={"oldest"}
            className="postList__filters-input"
          />
          Antiguos
        </label>
      </div>
      <h1 className="mt-8 postList-subTitles">Categorías</h1>
      {/* Enlaces */}
      <div className="postList__cat">
        <Link className="underline" to={"/posts"}>
          Todo
        </Link>
        <Link className="underline" to={"/posts?cat=web-design"}>
          Diseño Web
        </Link>
        <Link className="underline" to={"/posts?cat=development"}>
          Programación
        </Link>
        <Link className="underline" to={"/posts?cat=databases"}>
          Base de Datos
        </Link>
        <Link className="underline" to={"/posts?cat=seo"}>
          SEO
        </Link>
        <Link className="underline" to={"/posts?cat=marketing"}>
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
