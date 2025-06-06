import { Assertion } from "./Assertion";

export class UrlFormatter {
    constructor(url) {
        Assertion.This(url)
            .IsNotNullOrEmpty("URL no puede ser nula o vacía.")
            .IsString("URL debe ser una cadena de texto.");

        this.url = url;
    }

    getUrl() {
        return this.url;
    }

    addApiKey(apiKey) {
        Assertion.This(apiKey)
            .IsNotNullOrEmpty("API key no puede ser nula o vacía.")
            .IsString("API key debe ser una cadena de texto.");

        const separator = this.url.includes('?') ? '&' : '?';
        this.url += `${separator}api_key=${encodeURIComponent(apiKey)}`;
        return this;
    }

    addParameter(name, value) {
        Assertion.This(name)
            .IsNotNullOrEmpty("Name no puede ser nula o vacía.")
            .IsString("Name debe ser una cadena de texto.");

        if (value === undefined || value === null) {
            throw new Error("Value must not be undefined or null.");
        }
        const separator = this.url.includes('?') ? '&' : '?';
        this.url += `${separator}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        return this;
    }   

    addSegment(segment) {
        Assertion.This(segment)
            .IsNotNullOrEmpty("Segment no puede ser nula o vacía.")
            .IsString("Segment debe ser una cadena de texto.");

        this.url += `/${encodeURIComponent(segment)}`;
        return this;
    }   
}