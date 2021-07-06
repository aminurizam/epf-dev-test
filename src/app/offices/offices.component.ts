import { Component, OnInit } from '@angular/core';
import { Office } from './offices';
import { OfficesServices } from './offices.services';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css'],
})
export class OfficesComponent implements OnInit {
  offices: Office[] = [];
  states: Array<string> = [
    'johor',
    'kedah',
    'kelantan',
    'melaka',
    'negeri sembilan',
    'pahang',
    'pulau pinang',
    'perak',
    'perlis',
    'selangor',
    'terengganu',
    'sabah',
    'sarawak',
    'kuala lumpur',
    'labuan',
    'putrajaya'
  ];
  stateFilterArray: Array<any> = [];
  showFilter: Boolean = false;

  constructor(private _officeServices: OfficesServices) {
    // console.log(_officeServices.getOffices().lis)
  }

  ngOnInit(): void {
    this.offices = this._officeServices.getOffices().lis;

    // can create interface this called State with value id string and state string
    this.offices.forEach((office) => {
      switch (office.ste) {
        case '01':
          office.ste = 'Johor';
          break;
        case '02':
          office.ste = 'Kedah';
          break;
        case '03':
          office.ste = 'Kelantan';
          break;
        case '04':
          office.ste = 'Melaka';
          break;
        case '05':
          office.ste = 'Negeri Sembilan';
          break;
        case '06':
          office.ste = 'Pahang';
          break;
        case '07':
          office.ste = 'Pulau Pinang';
          break;
        case '08':
          office.ste = 'Perak';
          break;
        case '09':
          office.ste = 'Perlis';
          break;
        case '10':
          office.ste = 'Selangor';
          break;
        case '11':
          office.ste = 'Terengganu';
          break;
        case '12':
          office.ste = 'Sabah';
          break;
        case '13':
          office.ste = 'Sarawak';
          break;
        case '14':
          office.ste = 'Kuala Lumpur';
          break;
        case '15':
          office.ste = 'Labuan';
          break;
        case '16':
          office.ste = 'Putrajaya';
          break;
      }
    });
  }

  // not best practice to put any. need to explore about accessing property if declare Object type
  search(e: any) {
    // console.log(e)
    if (e.target.value.length === 0) this.ngOnInit();
    // currently only support address searching
    this.offices = this.offices.filter((office) => {
      return office.ads
        .toLocaleLowerCase()
        .match(e.target.value.toLocaleLowerCase());
    });
  }

  filterByState(event: any) {
    this.ngOnInit(); // have to put here to reset offices object
    if(event.target.checked) {
      this.stateFilterArray.push(event.target.value)
      this.offices = this.offices.filter((office) => {
        // console.log(office.ste)
        return this.stateFilterArray.includes(office.ste.toLocaleLowerCase())
      })
    } else {
      let index = this.stateFilterArray.indexOf(event.target.value);
      this.stateFilterArray.splice(index, 1);
    }

    console.log(this.stateFilterArray)
    console.log(this.offices)
  }

  sortBy(prop: any) {
    // TODO
    // return this.offices.sort((a,b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1)
    // return this.offices.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}
