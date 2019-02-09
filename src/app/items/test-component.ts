import {Component} from "@angular/core";


@Component ({
  selector: 'test-component',
  templateUrl: './test-component.html',
  styleUrls: ['./test-component.css']
})
export class TestComponent {
  onClick() {
    console.log("Testing event binding");
  }

  testObject = {
    name: 'Hello',
    surname: 'World',
    class: '10th',
    conditional: "Conditional text"
  };

  deleteValue(testObj) {
    console.log("delete");
  }
}
