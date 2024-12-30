import { useContext } from "react";
import { AppLoadingContext } from "./LoadingContext";

export const useAppLoadingContext = () => useContext(AppLoadingContext);