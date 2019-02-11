import {Component} from "@angular/core";
import {TestObjectService} from "../services/object-helper.service";

@Component ({
  selector: "template-form",
  templateUrl: "./new-form.html",
  styleUrls: ["./new-form.css"]
})
export class TemplateForm {

  constructor(private testObjectService: TestObjectService) {}

  onSubmit(testObj) {
    console.log(testObj);
    this.testObjectService.add(testObj);
  }

}
