import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../../redux/IceCream/IceCreamActions";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of ice cream : {numOfIceCream}</h2>
      <button type="button" onClick={() => dispatch(buyIceCream())}>
        Buy a ice cream
      </button>
    </div>
  );
};

export default IceCreamContainer;
