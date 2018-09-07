import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownQuestionComponent } from './drop-down-question.component';

describe('DropDownQuestionComponent', () => {
  let component: DropDownQuestionComponent;
  let fixture: ComponentFixture<DropDownQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
