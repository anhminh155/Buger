import { connect } from "react-redux";
import BTBurger from "../../components/btBuger/btBurger";
import { addItemBurger, deleteItemBurger } from "../../redux/burgerReducer";

const mapStateToProps = (state) => ({
  dataBuger: state.burgerReducer,
});

const mapDispatchToProps = {
  addItemBurger: addItemBurger,
  deleteItemBurger: deleteItemBurger,
};

export default connect(mapStateToProps, mapDispatchToProps)(BTBurger);
