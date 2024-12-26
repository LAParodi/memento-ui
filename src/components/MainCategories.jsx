import { Link } from "react-router-dom";

import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="mainCategories">
      {/* Enlaces */}
      <div className="mainCategories__links">
        <Link
          to="/posts"
          className="links-ref active"
        >
          Todo
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 links-ref"
        >
          Diseño Web
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 links-ref"
        >
          Programación
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 links-ref"
        >
          Base de Datos
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 links-ref"
        >
         SEO
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 links-ref"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* Botón de búsqueda */}
      <Search />
    </div>
  );
};

export default MainCategories;
