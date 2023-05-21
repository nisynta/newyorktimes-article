import axios from "axios";

const apiKey = "h3rbGMhDGn2yyfqmnrBnqvbjYjp6vQpj";

const getData = async (url, callback, errorCallback) => {
  try {
    const response = await axios.get(url);
    callback(response);
  } catch (error) {
    console.log("error = " + error);
    errorCallback(error);
  }
};

export const getArticleData = (topic, callback, errorCallback) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=${apiKey}`;
  getData(url, callback, errorCallback);
};
