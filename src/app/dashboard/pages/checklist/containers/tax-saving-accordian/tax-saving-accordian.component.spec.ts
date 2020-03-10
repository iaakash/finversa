import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxSavingAccordianComponent } from './tax-saving-accordian.component';

describe('TaxSavingAccordianComponent', () => {
  let component: TaxSavingAccordianComponent;
  let fixture: ComponentFixture<TaxSavingAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxSavingAccordianComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxSavingAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
