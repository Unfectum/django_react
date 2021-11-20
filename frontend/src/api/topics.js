import { instance } from "./instance";

export const topicsAPI = {
  getAllTopics() {
    return instance({
      method: "get",
      url: `/api/topics/`,
    }).then((response) => response.data);
  },

  getTopic(id) {
    return instance({
      method: "get",
      url: `/api/topics/${id}/`,
    }).then((response) => response.data);
  },

  addTopic(data) {
    return instance({
      method: "post",
      url: `/api/topics/`,
      data,
    });
  },

  editTopic(id, topicData) {
    return instance({
      method: "put",
      url: `/api/topics/${id}`,
      data: topicData,
    });
  },
};
