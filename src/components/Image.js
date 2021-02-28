const Image = ({ image }) => {
  return (
    <div>
      <img src={image.src} alt={image.id} className="float-start rounded p-2" />
    </div>
  );
};

export default Image;
