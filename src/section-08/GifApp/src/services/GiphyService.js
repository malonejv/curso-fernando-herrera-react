import { apiKey } from "config/env.js";
import { UrlFormatter } from "../common/UrlFormatter";
import { Assertion } from "../common/Assertion";

export default class GiphyService {
    constructor() {
        this.url = "https://api.giphy.com/v1/gifs";
    }

    random() {
        const formatter = new UrlFormatter(this.url);
        return fetch(
            formatter
                .addSegment('random')
                .addParameter('rating', 'g')
                .addApiKey(apiKey)
                .getUrl(), {
            method: "GET"
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Error fetching random gif: " + res.status);
                }
            })
            .catch(function (err) {
                console.error("Error fetching random gif:", err);
            });
    }

    list(category, limit = 10) {
        const search = category.trim();
        Assertion.This(category)
            .IsNotNullOrEmpty("La categoría no puede ser nula o vacía.")
            .IsString("La categoría debe ser una cadena de texto.");
        Assertion.This(limit)
            .IsNumber("El límite debe ser un número.")
            .IsInRange(1, 10, "El límite debe estar entre 1 y 10.");

        const formatter = new UrlFormatter(this.url);
        return fetch(
            formatter
                .addSegment('search')
                .addParameter('q', search)
                .addParameter('limit', limit)
                .addApiKey(apiKey)
                .getUrl(), {
            method: "GET"
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Error fetching gifs: " + res.status);
                }
            })
            .catch(function (err) {
                console.error("Error fetching gifs:", err);
            });
    }


    async fetchGifs(category, limit = 10) {
        const search = category.trim();
        Assertion.This(category)
            .IsNotNullOrEmpty("La categoría no puede ser nula o vacía.")
            .IsString("La categoría debe ser una cadena de texto.");
        Assertion.This(limit)
            .IsNumber("El límite debe ser un número.")
            .IsInRange(1, 10, "El límite debe estar entre 1 y 10.");

        try {
            let gifs = {
                data: []
            };

            if (search.toLowerCase() === "random") {
                for (let i = 0; i < limit; i++) {
                    const { data } = await this.random();
                    gifs.data.push({
                        id: data.id,
                        title: data.title,
                        images: {
                            downsized_medium: {
                                url: data.images.downsized_medium.url
                            }
                        }
                    });
                }
            } else {
                gifs = await this.list(search, limit);
            }

            return gifs.data.map(img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                };
            }) || [];
        } catch (error) {
            console.error(error.message);
            return [];
        }
    }
}