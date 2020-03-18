import { Action } from '@ngrx/store';
import { FormActions, EFormActions } from './form.actions';

// have initial state... initialize with session variables like login username etc.

const initialState: Array<string> = ['wachukxs', 'passworded'];

export function formReducer(state = initialState, action: FormActions) {
    switch (action.type) {
        case EFormActions.EDIT_PASSWORD:
            return { ...initialState, password: action.payload };
        case EFormActions.EDIT_USERNAME:
            return { ...initialState, username: action.payload };
        default:
            return initialState;
    }
}
