import axios from 'axios';

const baseApiUrl = '/myapi/';

const getNumberValidated = async (action, number) => {
  const axiosUrl = `${baseApiUrl}?action=${action}&${number}`;
  return await axios.get(axiosUrl);
};

export default {
  getNumberValidated,
};

