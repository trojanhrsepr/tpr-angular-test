import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component ({
  selector: 'test-component2',
  templateUrl: './test-component2.html',
  styleUrls: ['test-component2.css']
})
export class TestComponent2 {

  @Input() testObj;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.testObj);
  }
}
