import { describe, test, expect, jest } from "@jest/globals";
import GiphyService from "../../../src/services/GiphyService";

describe("GiphyService", () => {

    let giphyService;
    const mockedApiResponse = {
        data: [
            {
                id: "12345",
                title: "Funny GIF",
                images: {
                    downsized_medium: {
                        url: "https://media.giphy.com/media/12345/giphy.gif"
                    }
                }
            }
        ]
    };
    const expected = [
        {
            id: "12345",
            title: "Funny GIF",
            url: "https://media.giphy.com/media/12345/giphy.gif"
        }
    ];

    beforeEach(() => {
        global.fetch = jest.fn();
        global.fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockedApiResponse)
        });
        giphyService = new GiphyService();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe("fetchGifs", () => {
        test("Should return a list of gifs with the search term", async () => {
            const searchTerm = "funny";
            const response = await giphyService.fetchGifs(searchTerm);
            expect(response).toEqual(expected);
        });

        test("Should return a list of random gifs", async () => {
            giphyService.random = jest.fn().mockResolvedValue({
                data: {
                    id: "12345",
                    title: "Funny GIF",
                    images: {
                        downsized_medium: {
                            url: "https://media.giphy.com/media/12345/giphy.gif"
                        }
                    }
                }
            });
            const response = await giphyService.fetchGifs("random", 1);
            expect(response).toEqual(expected);
            expect(giphyService.random).toHaveBeenCalledTimes(1);
        });

        test("Should call the correct API endpoint with the category and limit", async () => {
            const category = "funny";
            const limit = 5;
            const response = await giphyService.fetchGifs(category, limit);
            expect(response).toEqual(expected);
            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining(`q=${category}`),
                expect.any(Object)
            );
            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining(`limit=${limit}`),
                expect.any(Object)
            );
        });

        test("Should throw an error if the category is empty", async () => {
            await expect(giphyService.fetchGifs("", 5)).rejects.toThrow("La categoría no puede ser nula o vacía.");
        });

        test("should throw an error if the limit is out of range", async () => {
            await expect(giphyService.fetchGifs("funny", 11)).rejects.toThrow("El límite debe estar entre 1 y 10.");
        });

        test("Should handle fetch error gracefully", async () => {
            global.fetch.mockResolvedValueOnce({
                ok: false,
                status: 500,
                json: jest.fn()
            });
            const response = await giphyService.fetchGifs("funny");
            expect(response).toEqual([]);
        });

        test("Should trim category before searching", async () => {
            const response = await giphyService.fetchGifs("   funny   ");
            expect(response).toEqual(expected);
        });

        test("Should return empty array if API returns empty data", async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: jest.fn().mockResolvedValue({ data: [] })
            });
            const response = await giphyService.fetchGifs("funny");
            expect(response).toEqual([]);
        });
        
        test("Should handle API response with no images", async () => {
            const noImageResponse = {
                data: [
                    {
                        id: "12345",
                        title: "No Image GIF",
                        images: {}
                    }
                ]
            };
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: jest.fn().mockResolvedValue(noImageResponse)
            });
            const response = await giphyService.fetchGifs("no image");
            expect(response).toEqual([]);
        });
    });
});