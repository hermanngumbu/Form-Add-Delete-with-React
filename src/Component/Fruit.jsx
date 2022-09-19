export default function Fruit({ fruitInfo, onFruitDelete }) {
  // Un state (data, état)

  // other method to define a props
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;
  // const {fruitInfo, onFruitDelete} = props

  // Un Comportement

  // Un affichage (render)

  return (
    <li>
      {fruitInfo.nom}{" "}
      <button
        onClick={(event) => {
          onFruitDelete(fruitInfo.id);
        }}
      >
        X
      </button>
    </li>
  );
}
