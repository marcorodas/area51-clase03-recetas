import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  logginSuccess: boolean = false;
  mailApp: string;

  doLogin(event) {
    this.logginSuccess = true;
    this.mailApp = event;
  }

}
