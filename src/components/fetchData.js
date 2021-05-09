import axios from 'axios';

async function getProfile() {
  return await axios.get('http://localhost:8888/api/profileData')
  .then(res => {
    let info = res.data;
    return info
  })
  .catch(err => console.log(err))
}

getProfile()
.then(info => info)
.catch(err => console.log(err))

export { getProfile }
