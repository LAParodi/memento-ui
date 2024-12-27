import { useUser } from "@clerk/clerk-react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  if (!isLoaded && !isSignedIn) {
    return <div>Debes iniciar sesión.</div>;
  }

  return (
    <section className="writeContainer">
      <h1 className="write-title">Crear publicación</h1>
      <form className="write-form">
        <button className="write-imgBtn">Añade una portada</button>
        <input
          type="text"
          name="cover"
          placeholder="Escribe aquí el título"
          className="write-inputTitle"
        />
        <div className="write-selectContainer">
          <label htmlFor="cat" className="write-label">
            Elige una categoría:
          </label>
          <select name="cat" className="write-select">
            <option value="general">General</option>
            <option value="web-design">Diseño Web</option>
            <option value="desarrollo">Programación</option>
            <option value="databases">Bases de Datos</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="Escribe aquí"
          className="write-textArea"
        />
        <ReactQuill className="write-editor" />
        <button className="sendBtn">Publicar</button>
      </form>
    </section>
  );
};

export default Write;
