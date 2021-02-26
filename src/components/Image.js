const Image = ({ image }) => {
  return (
    <div>
      <img src={image.src} alt={image.id} className="rounded float-start p-2" />
    </div>
  );
};

export default Image;
