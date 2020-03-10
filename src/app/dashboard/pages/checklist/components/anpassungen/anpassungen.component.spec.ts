import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnpassungenComponent } from './anpassungen.component';

describe('AnpassungenComponent', () => {
  let component: AnpassungenComponent;
  let fixture: ComponentFixture<AnpassungenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnpassungenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnpassungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
