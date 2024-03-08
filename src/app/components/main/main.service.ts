import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MainService {
    constructor(private _http: HttpClient) {

    }

    getIssuesList() {
        return this._http.get('http://localhost:3000/issues').toPromise();
    }

    createIssue(req: any) {
        return this._http.post('http://localhost:3000/issue', req).toPromise();
    }

    deleteIssue(id: any) {
        return this._http.delete(`http://localhost:3000/issue/${id}`,).toPromise();
    }

    getIssue(id: any) {
        return this._http.get(`http://localhost:3000/issue/${id}`).toPromise();
    }

    editIssue(req: any) {
        return this._http.put(`http://localhost:3000/issue`, req).toPromise();
    }
}