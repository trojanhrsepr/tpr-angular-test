import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { TestObjectService } from "../services/object-helper.service";
import {Router} from "@angular/router";

@Component ({
  selector: 'model-form',
  templateUrl: './model-form.html',
  styleUrls: ['./model-form.css']
})
export class ModelForm {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private testObjectService: TestObjectService,
    private router: Router,
    @Inject('lookUpListToken') public lookupList
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('Default', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
        ])),
      surname: new FormControl('Movies1'),
      class: new FormControl(''),
      year: new FormControl('', Validators.compose([
        this.yearValidator1,
        this.yearValidator
      ])),
      isFavorite: new FormControl('true')
    });
  }

  NgOnInitAlternative() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('Default', Validators.compose([
        Validators.pattern('[\\w\\-\\s\\/]+'),
        Validators.required
      ])),
      surname: this.formBuilder.control('Movies1'),
      class: this.formBuilder.control(''),
      year: this.formBuilder.control('', Validators.compose([
        this.yearValidator
      ])),
      isFavorite: new FormControl('true')
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0)
      return null;
    let year = parseInt(control.value);
    if (year >= 1900 && year <= 2100)
      return null;
    else
      return { 'year' :true };
  }

  // Not functional
  yearValidator1(control) {
    if (control.value.trim().length === 0)
      return null;
    let year = parseInt(control.value);
    if (year >= 1900 && year <= 2100)
      return null;
    else
      return { 'year' : {
        'minYear': 2000,
        'maxYear': 2020
      }};
  }

  onSubmit(testObj) {
    console.log(testObj);
    this.testObjectService.add(testObj);
    // Observable returned so in case of subscribe, this can be used to return the list again after addition
    // this.router.navigate('/list');
  }
}
