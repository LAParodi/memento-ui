import { Link } from "react-router-dom";

import Image from "../components/Image";
import Search from "../components/Search";
import PostMenuActions from "../components/PostMenuActions";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="singlePost">
      {/* Detalles */}
      <div className="singlePost__details">
        <div className="singlePost__header">
          <h1 className="header__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            veniam!
          </h1>
          <div className="singlePost__header__info">
            <span>Publicado por</span>
            <Link className="header__info-link">Luigi P.</Link>
            <span>en</span>
            <Link className="header__info-link">Diseño Web</Link>
            <span>hace 5 días</span>
          </div>
          <p className="header-intro">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            voluptatibus quisquam maiores, eveniet blanditiis adipisci eaque hic
            quo impedit temporibus!
          </p>
        </div>
        {/* Imagen */}
        <div className="singlePost__header__image">
          <Image
            src={"postImg.jpeg"}
            alt={"Image"}
            className={"header__image-img"}
            w={600}
          />
        </div>
      </div>
      {/* Contenido */}
      <div className="singlePost__content">
        {/* Contenido - Texto */}
        <div className="content__paragraphs">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ut
            harum, iure maxime, neque illo deleniti rem blanditiis et molestias
            laboriosam, labore qui rerum nihil ea. Mollitia omnis magni
            temporibus, quam iusto vitae possimus nam, est illum aperiam nihil
            quisquam ipsa asperiores quaerat explicabo rem blanditiis esse
            debitis aliquid, reprehenderit doloremque facilis! Numquam sit
            aspernatur, placeat atque necessitatibus tempora earum, fugit,
            similique error saepe magni provident unde? Laboriosam pariatur
            possimus natus incidunt ad nisi in hic nemo? Soluta sequi quisquam
            enim eaque adipisci asperiores at aperiam illum mollitia
            perspiciatis corrupti, vitae ex fugiat, vel dicta, placeat beatae
            quas ratione odio!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ut
            harum, iure maxime, neque illo deleniti rem blanditiis et molestias
            laboriosam, labore qui rerum nihil ea. Mollitia omnis magni
            temporibus, quam iusto vitae possimus nam, est illum aperiam nihil
            quisquam ipsa asperiores quaerat explicabo rem blanditiis esse
            debitis aliquid, reprehenderit doloremque facilis! Numquam sit
            aspernatur, placeat atque necessitatibus tempora earum, fugit,
            similique error saepe magni provident unde? Laboriosam pariatur
            possimus natus incidunt ad nisi in hic nemo? Soluta sequi quisquam
            enim eaque adipisci asperiores at aperiam illum mollitia
            perspiciatis corrupti, vitae ex fugiat, vel dicta, placeat beatae
            quas ratione odio!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ut
            harum, iure maxime, neque illo deleniti rem blanditiis et molestias
            laboriosam, labore qui rerum nihil ea. Mollitia omnis magni
            temporibus, quam iusto vitae possimus nam, est illum aperiam nihil
            quisquam ipsa asperiores quaerat explicabo rem blanditiis esse
            debitis aliquid reprehenderit doloremque facilis! Numquam sit
            aspernatur, placeat atque necessitatibus tempora earum, fugit,
            similique error saepe magni provident unde? Laboriosam pariatur
            possimus natus incidunt ad nisi in hic nemo? Soluta sequi quisquam
            enim eaque adipisci asperiores at aperiam illum mollitia
            perspiciatis corrupti, vitae ex fugiat, vel dicta, placeat beatae
            quas ratione odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus id soluta animi earum molestiae eum magnam ipsum
            necessitatibus, cum, nostrum quod, voluptatum officia. Iure ipsa
            accusantium consequuntur dolorum quas aliquam. Ex quod, pariatur
            unde nobis minima culpa sapiente at numquam vel eveniet blanditiis
            dolorem! Sit non possimus aspernatur. Rem, quibusdam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus id soluta animi earum molestiae eum magnam ipsum
            necessitatibus, cum, nostrum quod, voluptatum officia. Iure ipsa
            accusantium consequuntur dolorum quas aliquam. Ex quod, pariatur
            unde nobis minima culpa sapiente at numquam vel eveniet blanditiis
            dolorem! Sit non possimus aspernatur. Rem, quibusdam!
          </p>
        </div>
        {/* Menú lateral */}
        <div className="singlePost__sideBar">
          <h1 className="sideBar-title mt-0">Autor</h1>
          {/* Información del usuario */}
          <div className="sideBar__user">
            {/* Avatar */}
            <div className="sideBar__avatar">
              <Image
                src={"userImg.jpeg"}
                alt={"User"}
                className={"sideBar__image-img"}
                w={48}
                h={48}
              />
              <Link to={"/"} className="avatar-name">
                Jhon Doe
              </Link>
            </div>
            {/* Descripción del usuario y redes */}
            <p className="sideBar-description">Lorem ipsum dolor sit amet.</p>
            <div className="sideBar__socials">
              <Link to={"/"}>
                <Image src={"facebook.svg"} alt={"Facebook"} w={32} h={32} />
              </Link>
              <Link to={"/"}>
                <Image src={"instagram.svg"} alt={"Instagram"} w={32} h={32} />
              </Link>
            </div>
          </div>
          {/* Acciones */}
          <PostMenuActions />
          {/* Categorías */}
          <h1 className="sideBar-title">Categorías</h1>
          {/* Enlaces */}
          <div className="singlePost__categories">
            <Link className="underline">Todo</Link>
            <Link className="underline">Diseño Web</Link>
            <Link className="underline">Programación</Link>
            <Link className="underline">Base de Datos</Link>
            <Link className="underline">SEO</Link>
            <Link className="underline">Marketing</Link>
          </div>
          <h1 className="sideBar-title">Buscar</h1>
          <Search />
        </div>
      </div>
      {/* Commentarios */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
