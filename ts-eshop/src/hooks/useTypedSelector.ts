import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers";


export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector