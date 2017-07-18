import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

import { ApiService } from "../api.service";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent {
  userExists = null;
  score = null;
  username = null;
  promise;
  constructor(private _apiService: ApiService) {}

  calculateScore() {
    this.promise = this._apiService.retrieveGithubUser(this.username);
    if (this.promise) {
      this.promise
        .then(user => {
          if (user.id) {
            this.userExists = true;
            this.score = user.public_repos + user.followers;
          } else {
            this.userExists = false;
            this.score = null;
          }
          this.username = null;
          console.log(this.username);
        })
        .catch(err => {
          this.userExists = false;
        });
    } else {
      this.userExists = false;
    }
  }
}
