import { useState } from "react";

import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState();

  return (
    <section>
      <h1 className="postList-title">Programación</h1>
      {/* Botón interactivo */}
      <button onClick={() => setOpen((prev) => !prev)} className="filterBtn">
        {open ? "Cerrar" : "Filtros & Búsqueda"}
      </button>
      {/* Contenido */}
      <div className="postList__content">
        {/* Publicaciones */}
        <div className="">
          <PostList />
        </div>
        {/* Barra lateral */}
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </section>
  );
};

export default PostListPage;
