import { useState } from "react";

export default function FruitForm({ fruits, setFruits }) {
  // 1. State
  const [nouveauFruit, setNouveauFruit] = useState("");

  // 2. Comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputRef.current.value);

    // 1. Copie du state
    const fruitsCopy = [...fruits];
    // 2. Manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({ id, nom });
    // 3. Modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  // 3. Un afichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={nouveauFruit}
        onChange={handleChange}
        placeholder="Ajouter un fruit..."
      />
      <button>Ajouter +</button>
    </form>
  );
}
