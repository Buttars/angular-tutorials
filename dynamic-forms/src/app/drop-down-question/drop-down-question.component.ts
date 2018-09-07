import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownQuestion } from '../questions/question-dropdown';

@Component({
  selector: 'app-drop-down-question',
  templateUrl: './drop-down-question.component.html',
  styleUrls: ['./drop-down-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DropDownQuestionComponent
    }
  ]
})
export class DropDownQuestionComponent {
  @ViewChild('dropDown') dropDown;
  @Input() formGroup: FormGroup;
  @Input() question: DropdownQuestion;

  onChange = (value: any) => { };
  onTouched = () => { };
  writeValue = (value: string) => { this.dropDown.nativeElement.value = value; };

  registerOnChange(fn: (value: any) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }

}
