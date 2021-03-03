import request from "../axios/axios";

export default {
  getBanner() {
    return request({
      url: `/club/promotional`,
      method: "get",
    });
  },
  getClubList() {
    return request({
      url: `/club/list`,
      method: "get",
    });
  },
};
