import Image from "./Image";

const Comment = () => {
  return (
    <div className="comment">
      {/* Usuario */}
      <div className="comment__image">
        <Image
          src={"userImg.jpeg"}
          alt="User img"
          className={"comment__image-img"}
          w={40}
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">hace 5 días</span>
      </div>
      {/* Comentario */}
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          dignissimos maiores corrupti similique rerum sapiente minima
          architecto? Quas, voluptatum temporibus!
        </p>
      </div>
    </div>
  );
};

export default Comment;
