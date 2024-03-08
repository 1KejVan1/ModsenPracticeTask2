import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
