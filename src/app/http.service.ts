import { Injectable } from "@angular/core";

@Injectable()
export class HttpService {
  constructor() {}
  //code
  retreieveTasks() {
    return this._http.get("/");
  }
}
