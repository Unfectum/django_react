import axios from "./instance";


export const topicsAPI = {
  getAllTopics() {
    return axios({
      method: 'get',
      url: `/api/topics/`
    })
      .then(response => response.data)
      .catch(error => {alert('server error'); return []})
  },
  getTopic(id) {
    return axios({
      method: 'get',
      url: `/api/topics/${id}/`
    })
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  addTopic(data) {
    return axios({
      method: 'post',
      url: `/api/topics/`,
      data
    })
      .catch(error => console.log(error))
  },
  editTopic(id, topicData) {
    return axios({
      method: 'put', 
      url: `/api/topics/${id}`,
      data: topicData
    })
    .catch(error => console.log(error))
  }
}