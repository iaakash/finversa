import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EinkommenComponent } from './einkommen.component';

describe('EinkommenComponent', () => {
  let component: EinkommenComponent;
  let fixture: ComponentFixture<EinkommenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinkommenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EinkommenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
