import { QuestionBase } from './question-base';

export class MultipleChoiceQuestion extends QuestionBase<string> {
  controlType = 'radio';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
