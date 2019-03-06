# TprAngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

##Angular?
Angular was designed by Google to address challenges programmers face building complex, single-page applications. This JavaScript framework takes care of the back end
so you can take care of the client side.

###Modules
Lazy loading: loading modules on demand to save memory. Modules are usually mechanisms to provide bootstrap load of app.

###Components
Angular component is used to render a portion of HTML and provide functionality to that portion. Through component class which helps define application logic for it.
Each component has a selector used to identify as HTML tags within component form. Easy wiring of DOM events and variables from DB into component

###Directives
Directives provide functionality and can transform a DOM. Component is a type of directive:
Components: Directives with a template
Structural Directive: Add or remove DOM element using this. Eg. NgIf *ngIf is inline
Attribute Directive: Change the appearance or behavior of an element, component, or another directive.

###Pipes
Template expression operator that takes in a value and returns a new value representation

###Forms
Effective data binding to achieve UI implementation without script code , provides support for validation and error handling of data for forms in UI side

###Dependency Injection
Dependency injection allows us to write decoupled code which can be injected at any point to proivde more modularity and reusability. Modular components and services.
Dependency injection through bootstrap makes sure your code is available all through the application as an instance.

###Data persistence
Data persistence: data survives after the process with which it was created has ended. In other words, for a data store to be considered persistent, it must write
to non-volatile storage.
In Angular through In Memory by creating a component or dependency injection wherever needed or by using external objects like XHR or JSONP for Rest calls

###Routing
Client side routing without server side interaction (Sub URL routing). define a navigation path among the different application states and view hierarchies in your app.

###What else?
Use of services: MVC Framework, JS or TS code for logic

##Notes

###Forms
Types of Model-Driven Forms:
Template Driven: Form logic in template markup
Model Driven: Form logic in component class
Model driven advantages:
1. Form field contract
2. field validation rules can be applied
3. Live changes in variables can be tracked
4. Fields can be unit tested

ngInit: Lifecycle event (Others too. Check for documentation). Can be done using constructor. But this is better
Validators: in case of non functioning, they create a ng-dirty ng-invalid class added to the property of the field. We can utilise that to verify data and change in css

###Dependency Injection
Two steps: Declaration to Angular of all injectables, and then creating an instance of service wherever needed using constructor or Inject decorator
Services are Singletons. Once an instance of a class is made, it is not created again. Instead same object instance is reused.
This makes sure that once an instance is loaded, it will stick around for the entirety of the application load. Reduces or eliminates calls to server.
This is why Angular is in-memory for application load
Tree structure. Injectable in parent is available in all child elements. Declaration in child will make it available to sub-children

###Services
Help avoid rewriting business logic. Code is more testable as business logic is separate from the view part and components. Services can be mocked to just test UI
private in Constructor helps the transpiled JS to use the declared service within component

###Http Requests
HttpClient returns Observables of any rest call made to the service. Observables can be understood as an rxjs module similar to function provided by JS Promises.
Observables need to be mapped using rxjs operator .map to make sure Angular doesn't have to deal with Observables 
Interface is needed in Angular because get call supports typescript typing of the data types it returns
get() call is a called Observable and prepares the Observable for direct use. This is not called till there is a .subscribe to it

###Routing
Angular provides information on currently active route using ActivatedRoute class which can be injected.
params (observable) in ActivatedRoute class is used to keep track of change in routes by subscribing
params is a collection of route parameters collected by routes

##Command Help:

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).






