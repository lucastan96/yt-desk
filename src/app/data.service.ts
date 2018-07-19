import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, startWith } from 'rxjs/operators';
import { interval } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // Insert Youtube Data API key below
    key: String = 'API_KEY_HERE';

    constructor(private http: HttpClient) { }

    getStats(name) {
        return interval(5000)
            .pipe(
                startWith(0),
                switchMap(() => this.http.get("https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=" + name + "&key=" + this.key)),
                map(res => res)
            );
    }
}
