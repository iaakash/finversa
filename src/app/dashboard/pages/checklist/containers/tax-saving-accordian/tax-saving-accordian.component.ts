import { Component, OnInit } from '@angular/core';
import * as fromComponents from '../../components';

@Component({
  selector: 'app-tax-saving-accordian',
  templateUrl: './tax-saving-accordian.component.html',
  styleUrls: ['./tax-saving-accordian.component.scss'],
})
export class TaxSavingAccordianComponent implements OnInit {

  config:any;
  constructor() { }

  ngOnInit() {
    this.config = [
      {
        label: 'Online Rechner',
        component: fromComponents.OnlineRechnerComponent,
      },
      {
        label: 'lhl Profil',
        component: fromComponents.LhrProfilComponent,
      }
    ]
  }
 
}
