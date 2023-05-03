import { useSelector, useDispatch } from "react-redux";
import { buyCakeAction } from "../../redux/cake/cakeActions";

const HookCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes : {numOfCakes}</h2>
      <button type="button" onClick={() => dispatch(buyCakeAction())}>
        Buy a cake
      </button>
    </div>
  );
};

export default HookCakeContainer;
