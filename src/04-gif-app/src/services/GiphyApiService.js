import { config, GiphyUrl } from "../config";

export default class GiphyApiService {
  constructor() {}

  async getGifs(category) {
    const url = GiphyUrl(config.API.Giphy.EndPoints.Search, category);
    try {
      const resp = await fetch(url);
      const { data } = await resp.json();
      const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }));

      console.log(gifs);
      return gifs;
    } catch (err) {
      console.log(err);
    }
  }
}
