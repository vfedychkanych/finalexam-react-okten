import axios from "axios";

import {baseURL} from "../constants"


const apiService = axios.create({baseURL});
apiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjczMjgyOWY4NWE4ZmYxYzMyMDkxODk3YmM3ZmMxYiIsInN1YiI6IjY1ZTBmODYwYTI4NGViMDE4N2Q0N2Y3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CO3p1Jr-NjjcTz6qNEO7Xlvc2ed2ArPaPwKqqPS-JLc`;
    return request;
})

export {
    apiService
}