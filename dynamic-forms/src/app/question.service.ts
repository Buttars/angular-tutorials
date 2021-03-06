import { Injectable } from '@angular/core';

import { DropdownQuestion } from './questions/question-dropdown';
import { QuestionBase } from './questions/question-base';
import { TextboxQuestion } from './questions/question-textbox';
import { MultipleChoiceQuestion } from './questions/question-multiple-choice';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new MultipleChoiceQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
          { key: 'Male', value: 'male' },
          { key: 'Female', value: 'female' },
          { key: 'Apache Helicopter', value: 'apache'}
        ],
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
