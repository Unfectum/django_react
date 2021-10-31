import {instance} from "./instance";


export const topicsAPI = {
  getAllTopics() {
    return instance({
      method: 'get',
      url: `/api/topics/`
    })
      .then(response => response.data)
      .catch(error => [])
  },
  getTopic(id) {
    return instance({
      method: 'get',
      url: `/api/topics/${id}/`
    })
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  addTopic(data) {
    return instance({
      method: 'post',
      url: `/api/topics/`,
      data
    })
      .catch(error => console.log(error))
  },
  editTopic(id, topicData) {
    return instance({
      method: 'put', 
      url: `/api/topics/${id}`,
      data: topicData
    })
    .catch(error => console.log(error))
  }
}