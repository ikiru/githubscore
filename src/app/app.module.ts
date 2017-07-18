// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

// Components
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { ScoreComponent } from "./score/score.component";

// Services
import { HttpService } from "./http.service";
import { ApiService } from "./api.service";

@NgModule({
  declarations: [AppComponent, UserComponent, ScoreComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
