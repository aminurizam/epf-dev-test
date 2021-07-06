# EpfDevV2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## TODO
- [x] Display the KWSP offices list with a list view that retrieves from API (Details below). - refer offices.services.ts
- [x] Build live search to allow end-user to do wild card searches on the office address or name. 
- [ ] Build a menu with sorting option to allow users to sort the KWSP office list by office name or nearest location.
- [ ] Display the live distance of the office if the user allows GPS location permission. (sample https://www.w3schools.com/html/html5_geolocation.asp)
- [ ] The distance formula can refer to https://www.geodatasource.com/developers/javascript
- [ ] If the live distance less than 1 KM, display unit in Meter. If the live distance equal or more than 1 KM, display unit in KM.
- [x] Build a menu with a filter option to allows the user to filter the records by all states or single states only. The default filter is all states.
- [x] Display the full information on the new page when the user taps on the view list.  
- [x] Sample wireframe can refer to
- [x] REMEMBER: The app needs to be responsive to display in mobile web and desktop version


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
