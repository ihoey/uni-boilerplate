import { get } from "./request";

export const getInfo = () => {
  return get("/11", {}, {});
};
export const getInfos = () => {};
