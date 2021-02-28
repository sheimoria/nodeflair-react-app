import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import data from "./Data";

const App = () => {
  const [category, setCategory] = useState(data.mountains);

  const changeCategory = (text) => {
    switch (text) {
      case "Mountains":
        setCategory(data.mountains);
        break;
      case "Birds":
        setCategory(data.birds);
        break;
      case "Beaches":
        setCategory(data.beaches);
        break;
      case "Food":
        setCategory(data.food);
        break;
      default:
        setCategory(data.mountains);
    }
  };

  return (
    <div className="App">
      <Header onClick={changeCategory} category={category} />
      <Body images={category.images} />
    </div>
  );
};

export default App;
