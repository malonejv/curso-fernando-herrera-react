import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";
import GiphyService from "../../../src/services/GiphyService";

describe("useFetchGifs", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test("Should return an inital state with empty gifs and loading true", () => {
        const { result } = renderHook(() => useFetchGifs("Capibara"));

        const [gifs, isLoading] = result.current;

        expect(gifs).toEqual([]);
        expect(isLoading).toBeTruthy();
    });

    test("Should return gifs and loading false after fetching", async () => {
        const mockGifs = [
            { id: "1", title: "Gif 1", url: "http://example.com/gif1.gif" },
            { id: "2", title: "Gif 2", url: "http://example.com/gif2.gif" },
        ];
        jest.spyOn(GiphyService.prototype, "fetchGifs").mockResolvedValueOnce(mockGifs);

        const { result } = renderHook(() => useFetchGifs("Capibara"));

        // Wait for the next update to ensure the fetch has completed
        await waitFor(() => {
            const [gifs, isLoading] = result.current;
            expect(isLoading).toBeFalsy();
        });

        const [gifs, isLoading] = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});