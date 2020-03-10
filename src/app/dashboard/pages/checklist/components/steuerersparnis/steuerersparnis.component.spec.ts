import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SteuerersparnisComponent } from './steuerersparnis.component';

describe('SteuerersparnisComponent', () => {
  let component: SteuerersparnisComponent;
  let fixture: ComponentFixture<SteuerersparnisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteuerersparnisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SteuerersparnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
