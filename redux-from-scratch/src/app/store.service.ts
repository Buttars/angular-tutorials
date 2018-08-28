import { Injectable } from '@angular/core';
import { Subject, Observable, pipe } from 'rxjs';
import { scan, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { omit, get, isEqual } from 'lodash';


const win = window as any;

export class Action {
  constructor(public type: string, public payload?: any) {}
}

@Injectable({
  providedIn: 'root'
})
export class Store {
  state: Observable<any>;

  actions: Subject<Action> = new Subject();

  constructor() {
    this.state = this.actions.pipe(
      reducer(),
      shareReplay(1)
    );

    win.devTools = win.__REDUX_DEVTOOLS_EXTENSION__.connect();
   }

  dispatch(action: Action) {
    this.actions.next(action);
  }

  select(path: string) {
    return this.state.pipe(select(path));
  }
}

export const reducer = () =>
  scan<any>((state, action) => {
    let next;
    switch (action.type) {
      case 'SET':
        next = action.payload;
        break;
      case 'UPDATE':
        next = { ...state, ...action.payload };
        break;
      case 'DELETE':
        next = omit(state, action.payload);
        break;
      default:
        next = state;
        break;
    }

    win.devTools.send(action.type, next);

    return next;
  }, {});

export const select = path =>
  pipe(
    map(state => get(state, path, null)),
    distinctUntilChanged(isEqual)
  );
