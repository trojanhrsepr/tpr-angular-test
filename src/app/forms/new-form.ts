import {Component} from "@angular/core";

@Component ({
  selector: "template-form",
  templateUrl: "./new-form.html",
  styleUrls: ["./new-form.css"]
})
export class TemplateForm {
  onSubmit(testObj) {
    console.log(testObj);
  }

}
