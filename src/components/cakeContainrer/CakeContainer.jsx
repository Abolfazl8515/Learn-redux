import { connect } from "react-redux";
import { buyCakeAction } from "../../redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Num of cakes : {props.numOfCakes}</h2>
      <button type="button" onClick={props.buyCake}>
        Buy a cake
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCakeAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
