import { get } from "./request";

export const getInfo = () => {
  return get("/xsc/xsc/homePageItem", {}, {});
};
export const homePageItem = (params: any) => {
  return get("/xsc/xsc/homePageItem", params, {});
};
export const loveItem = (params: any) => {
  return get("/xsc/xsc/loveItem", params, {});
};
export const getInfos = () => {};
