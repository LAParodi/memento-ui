import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="comments">
      <h1 className="comments-title">Comentarios</h1>
      {/* Área de comentarios */}
      <div className="comments__textArea">
        <textarea
          className="textArea"
          placeholder="Escribe un comentario..."
          id="textArea"
        />
        <button className="sendBtn">Enviar</button>
      </div>
      {/* Comentario */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
