import { IKImage } from "imagekitio-react";

const Image = ({ src, w, h, alt, className }) => {
  return (
    <IKImage
      path={src}
      width={w}
      height={h}
      alt={alt}
      loading={"lazy"}
      className={className}
      lqip={{ active: true, quality: 20 }}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
