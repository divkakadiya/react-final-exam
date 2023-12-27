import axios from "axios"
import { API, BASE_URL } from "../../constant"

// get api
export const getApi = () => {
    return axios.get(BASE_URL + API).then(res => {
        const data = res.data
        const status = res.status

        return {
            data, status
        }
    })
}

// delete api
export const deleteApi = (action) => {
    return axios.delete(BASE_URL + API + action.payload).then(res => {
        const delete_data = action.payload
        const status = res.status

        return {
            delete_data, status
        }
    })
}

export const statusApi = (action) => {
    return axios.put(BASE_URL + API + action.payload.id, action.payload).then(res => {
        const data = action.payload
        const status = res.status

        return { data, status }
    })
}

