import { get } from "./request";

export const getInfo = () => {
  return get("/xsc/xsc/homePageItem", {}, {});
};
export const homePageItem = (params: any) => {
  return get("/xsc/xsc/homePageItem", params, {});
};
// 爱心项目页面
export const loveItem = (params: any) => {
  return get("/xsc/xsc/loveItem", params, {});
};
//项目详情页面
export const projectDetails = (id: any) => {
  return get("/xsc/xsc/loveItem", { subProjectId: id }, {});
};
//项目详情总体
export const projectDetailAggregate = (params: any) => {
  return get("/xsc/xsc/projectDetailAggregate", params, {});
};
// 我发起的
export const selectItemByOpenId = (params: any) => {
  return get("/xsc/xsc/selectItemByOpenId", params, {});
};
// 查看详情内容
export const viewDetails = (params: any) => {
  return get("/xsc/xsc/viewDetails", params, {});
};
// 志愿者行动
export const volunteerAction = (params: any) => {
  return get("/xsc/xsc/volunteerAction", params, {});
};
