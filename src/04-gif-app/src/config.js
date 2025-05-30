export const config = {
  API: {
    Giphy: {
      ApiKey: "5V4qT0Rw3tYMxCP91GRA91wStDv0QXqK",
      Url: "https://api.giphy.com/v1/gifs",
      EndPoints: {
        Search: "/search",
        Limit: 20
      },
    },
  },
};

export const GiphyUrl  = (endpoint, query, limit)=>
`${config.API.Giphy.Url}${endpoint}?apikey=${config.API.Giphy.ApiKey}&q=${query}&limit=${limit || config.API.Giphy.EndPoints.Limit}`