import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ef449bf6b20f454b99391649d38ae6ba'
    }
})