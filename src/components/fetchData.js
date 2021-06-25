import axios from 'axios';

async function getProfile() {
  return await axios.get('http://localhost:8888/api/profileData')
  .then(res => {
    let info = res.data;
    return info
  })
  .catch(err => console.log(err))
}

async function findIp() {
   await axios.get('https://api.ipify.org/?format=json')
  .then(res => {
    let data = res.data;
    let currentIp = data.ip;
    //console.log(currentIp);
    return currentIp;
  })
  .catch(err => console.log(err))
}

getProfile()
.then(info => info)
.catch(err => console.log(err))
/*
findIp()
.then(data => data)
.catch(err => console.log(err))
*/
export { getProfile, findIp }
