import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: '744bfb10eab840e98a7df65c9b184ff6'
}
}) 