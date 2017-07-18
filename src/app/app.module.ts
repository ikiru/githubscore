// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Components
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { ScoreComponent } from "./score/score.component";

// Services
import { HttpService } from "./http.service";

@NgModule({
  declarations: [AppComponent, UserComponent, ScoreComponent],
  imports: [BrowserModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
