import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizModalComponent } from './new-quiz-modal.component';

describe('NewQuizModalComponent', () => {
  let component: NewQuizModalComponent;
  let fixture: ComponentFixture<NewQuizModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuizModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
