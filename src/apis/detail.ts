import { get } from "./request";

export const getInfo = () => {
  console.log("mmmmmm :>> ");
  return get("/xsc/xsc/homePageItem", {}, {});
};
export const getInfos = () => {};
