import Image from "./Image";

const Body = ({ images }) => {
  return (
    <body>
      {images.map((image) => (
        <Image image={image} />
      ))}
    </body>
  );
};

export default Body;
