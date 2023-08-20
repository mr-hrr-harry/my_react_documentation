import axios from "axios"

class APIData2{
    static getUsers(){
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
}

export default APIData2