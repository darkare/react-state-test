import axios from 'axios';

export const getWaterSource = async () => {
  try {
    return axios.get("https://waterinsights-test.waternsw.com.au/api/water-source/v2");
    //console.log(res);
    // return { data: res.data };
  } catch (error) {
      console.log(error);
    throw error;
  }
};


