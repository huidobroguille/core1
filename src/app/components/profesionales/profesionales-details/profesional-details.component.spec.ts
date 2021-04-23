import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalDetailsComponent } from './profesional-details.component';

describe('TutorialDetailsComponent', () => {
  let component: ProfesionalDetailsComponent;
  let fixture: ComponentFixture<ProfesionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
