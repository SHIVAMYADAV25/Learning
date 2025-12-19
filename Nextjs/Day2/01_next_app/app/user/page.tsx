import axios from 'axios';
import React from 'react'

async function getData() {
    
    let response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

    await new Promise(r => setTimeout(r, 5000))

    return response.data
}

const page = async () => {
    let data = await getData();
  return (
    <div>
      {data.name}
      {data.email}
    </div>
  )
}

export default page
