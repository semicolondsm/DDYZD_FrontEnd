import request from "../axios/axios";

export default {
  getBanner() {
    return request({
      url: `/club/promotional`,
      method: "get",
    });
  },
};
