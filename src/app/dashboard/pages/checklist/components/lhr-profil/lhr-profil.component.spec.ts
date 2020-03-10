import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LhrProfilComponent } from './lhr-profil.component';

describe('LhrProfilComponent', () => {
  let component: LhrProfilComponent;
  let fixture: ComponentFixture<LhrProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LhrProfilComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LhrProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
