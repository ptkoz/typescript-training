import { Resource } from "./Resource";

export const RESOURCE_URL = "http://www.klamrowy.eu/resources.json";

export default function loadResources(uri: string): Promise<Resource[]> {
    return fetch(uri)
        .then((response) => response.text())
        .then((text) => JSON.parse(text));
}
