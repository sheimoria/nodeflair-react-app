import Button from "./Button";

const Header = ({ onClick }) => {
  return (
    <header className="gap-2 d-md-flex justify-content-md-center p-2">
      <Button text="Mountains" onClick={onClick} />
      <Button text="Birds" onClick={onClick} />
      <Button text="Beaches" onClick={onClick} />
      <Button text="Food" onClick={onClick} />
    </header>
  );
};

export default Header;
