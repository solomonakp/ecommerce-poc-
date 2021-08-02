import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/index";

interface Props {}

const useCart = () => {
  const {cart} = useSelector((state: RootState) => state);
  return {...cart};
};

export default useCart;
