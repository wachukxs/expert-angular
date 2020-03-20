import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {

  private readonly form1state = new BehaviorSubject<string[]>(['1st Username', '1st Password']);

  // Expose the observable$ part of the form subject (read only stream)
  readonly form$ = this.form1state.asObservable();

  // the getter will return the last value emitted in form subject
  private get form(): string[] {
    return this.form1state.getValue();
  }

  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  private set form(val: string[]) {
    this.form1state.next(val);
  }

  editForm(ind: number, val: string) {
    // we edit the form
    // this.form = [...this.form];
    this.form[ind] = val;
  }

  constructor() { }
}
