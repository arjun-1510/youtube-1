import axios from 'axios';

const KEY  = 'AIzaSyAhoalurugfH8cPdiRZj5FBDH1NZAtikPE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});