import axios from "./instance";


export const topicsAPI =  {
  getAllTopics() {
    return axios({
      method: 'get',
      url: `/api/topics/`
    })
      .then(response => response.data)
      .catch(error => console.log(error))
  },
  getTopic(id){
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
}