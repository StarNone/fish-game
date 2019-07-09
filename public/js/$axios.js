var $axios = axios.create({
  baseURL: '/img/'
})

$axios.interceptors.response.use(function (response) {
  return eval('(' + response.data +')')
})