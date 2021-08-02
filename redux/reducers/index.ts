import {combineReducers, AnyAction} from "redux";
import productsReducer from "./products/productsReducer";
import {ThunkAction} from "redux-thunk";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default rootReducer;
