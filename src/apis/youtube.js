import axios from 'axios'

const KEY = 'AIzaSyDMy1zZ_GSUnD3yLUQjVkT5l9dZ41yOIpo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})


