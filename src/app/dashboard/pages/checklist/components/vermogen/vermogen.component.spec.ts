import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VermogenComponent } from './vermogen.component';

describe('VermogenComponent', () => {
  let component: VermogenComponent;
  let fixture: ComponentFixture<VermogenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VermogenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VermogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
