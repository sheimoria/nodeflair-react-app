import Button from "./Button";

const Header = ({ onClick, category }) => {
  return (
    <header>
      <div class="d-flex gap-2 justify-content-center p-2">
        <Button text="Mountains" onClick={onClick} />
        <Button text="Birds" onClick={onClick} />
        <Button text="Beaches" onClick={onClick} />
        <Button text="Food" onClick={onClick} />
      </div>
      <h3 className="text-center p-2">Pictures of {category.id}</h3>
    </header>
  );
};

export default Header;
