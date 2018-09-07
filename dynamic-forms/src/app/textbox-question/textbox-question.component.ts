import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textbox-question',
  templateUrl: './textbox-question.component.html',
  styleUrls: ['./textbox-question.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextboxQuestionComponent
    }
  ]
})
export class TextboxQuestionComponent implements ControlValueAccessor {
  @ViewChild('textbox') textbox;
  @Input() formGroup;
  @Input() question;

  onChange = (value: any) => { };
  onTouched = () => { };
  writeValue(value: string) { this.textbox.nativeElement.value = value; }

  registerOnChange(fn: (value: any) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }

  constructor() { }

}
