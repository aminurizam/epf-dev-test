import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Office } from './../offices/offices';
import { OfficesServices } from './../offices/offices.services';

@Component({
  selector: 'app-office-detail',
  templateUrl: './office-detail.component.html',
  styleUrls: ['./office-detail.component.css'],
})
export class OfficeDetailComponent implements OnInit {
  office: Office|undefined

  constructor(
    private route: ActivatedRoute,
    private _officeServices: OfficesServices
  ) {}

  ngOnInit(): void {
    let offices = this._officeServices.getOffices().lis; //should improve here, no need to request api multiple time
    const routeParams = this.route.snapshot.paramMap;
    const officeKeyFromRoute = String(routeParams.get('officeKey'));

    this.office = offices.find((office) => office.key === officeKeyFromRoute);
  }
}
