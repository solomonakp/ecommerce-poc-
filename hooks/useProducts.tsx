import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/index";

interface Props {}

const useProducts = () => {
  const {products} = useSelector((state: RootState) => state);
  return {...products};
};

export default useProducts;
