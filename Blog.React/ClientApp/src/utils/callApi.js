import Axios from 'axios'
import * as Config from '../constants/config'

export default function callApi(endpoint, method="Get", data= null){
    console.log(`${Config.API_URL}/${endpoint}`);
    return Axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err);
    })

}