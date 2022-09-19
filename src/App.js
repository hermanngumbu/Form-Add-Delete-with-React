import { useState } from "react";
import Fruit from "./Component/Fruit";
import FruitForm from "./Component/FruitForm";

function App() {
  // State (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Mangue" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Orange" }
  ]);

  // const inputRef = useRef();

  // Comportement
  const handleDelete = (id) => {
    // Copy du state
    const fruitsCopy = [...fruits];
    // Modifier la copy du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // Manipuler le state par sonnouveauFruit setter
    setFruits(fruitsCopyUpdated);
  };

  // Affichage (render)
  return (
    <div className="App">
      <h1>Ajoute et supprime des fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onFruitDelete={handleDelete}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm fruits={fruits} setFruits={setFruits} />
    </div>
  );
}

export default App;
// Gestion du formulaire
// 1. Création du formulaire
// 2 Soumission du formulaire
// 3. Collecte des données du formulaire
// Methode 1 utilisation du UseRef
// Methode 2 syncronisation descendant ascendant
