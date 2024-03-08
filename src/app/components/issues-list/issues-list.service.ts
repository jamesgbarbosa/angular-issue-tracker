import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class IssuesListService {
    constructor(private _http: HttpClient) {

    }

    getIssuesList() {
        return this._http.get('http://localhost:3000/issues').toPromise();
    }
}