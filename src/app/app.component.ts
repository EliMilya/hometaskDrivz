import { Component } from "@angular/core";
import { Bus } from "./models/bus";
import { Line } from "./models/line";
import { Person } from "./models/person";
import { Stop } from "./models/stop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homework";
  person = new Person("42", 3, 4, 12);
  stop = new Stop("21", 4, "Some name", [this.person]);

  bus = new Bus(
    "134",
    new Line("321", [], 32, "Name", true, [this.stop]),
    this.stop,
    3,
    6,
    [this.person]
  );
}
