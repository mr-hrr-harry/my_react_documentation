import axios from 'axios'

class ServerData{
    static fetchData(){
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
}

export default ServerData