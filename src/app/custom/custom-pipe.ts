import {Pipe} from "@angular/core";
import {forEach} from "@angular/router/src/utils/collection";

@Pipe({
  name: 'customChange'
})
export class CustomChange {
  transform (testObjInstance) {
    var categories = [];
    testObjInstance.forEach(testObjInstance => {
      if(categories.indexOf(testObjInstance.class < 0)) {
        categories.push(testObjInstance.class);
      }
    });
    return categories.join(', ');
  }
}
