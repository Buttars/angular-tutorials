import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { QuestionBase } from '../questions/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button-question',
  templateUrl: './radio-button-question.component.html',
  styleUrls: ['./radio-button-question.component.scss']
})
export class RadioButtonQuestionComponent {
  @ViewChild('radioGroup') radioGroup;
  @Input() formGroup: FormGroup;
  @Input() question: QuestionBase<any>;

  onChange = (value: any) => { };
  onTouched = () => { };
  writeValue = (value: string) => { this.radioGroup.nativeElement.value = value; };

  registerOnChange(fn: (value: any) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }

  constructor() { }
}
