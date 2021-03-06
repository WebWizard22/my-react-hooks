import useStateListener from "./useStateListener";

export default function useWindowSize() {
  return useStateListener("resize", () => innerHeight).state;
};
