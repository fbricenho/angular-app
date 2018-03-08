import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
 * Youtube API REQUEST
 */
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyDQCl6oZNAEtp0Gig5Qg4X7bQooZXlSSOk';

@Injectable()
export class YoutubeService {

    constructor(private _http: Http) {}

    /*
     * function search
     * @param: query string
     * @auto: fbricenho
     * return Observable
     */
    search(query) {
        return this._http.get(`${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}&maxResults=5`
                                    + `&type=video&order=viewCount&regionCode=DE`
                                    + `&safeSearch=strict&relevanceLanguage=de`);
    }
}
