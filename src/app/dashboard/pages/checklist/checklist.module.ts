import { TaxSavingAccordianComponent } from './containers/tax-saving-accordian/tax-saving-accordian.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistPageRoutingModule } from './checklist-routing.module';

import { ChecklistPage } from './checklist.page';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const containers = [fromContainers.TaxSavingAccordianComponent];

const components = [
  fromComponents.AnpassungenComponent,
  fromComponents.EinkommenComponent,
  fromComponents.LhrProfilComponent,
  fromComponents.OnlineRechnerComponent,
  fromComponents.SteuerersparnisComponent,
  fromComponents.VermogenComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistPageRoutingModule
  ],
  declarations: [ChecklistPage, ...containers, ...components],
  entryComponents: [...components],
})
export class ChecklistPageModule {}
