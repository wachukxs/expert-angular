import { Action } from '@ngrx/store';
import { FormActions, EFormActions } from './form.actions';

// have initial state... initialize with session variables like login username etc.

const initialState: Array<string> = ['wachukxs', 'passworded'];

export function formReducer(state: Array<string> = [...initialState], action: FormActions) {
    switch (action.type) {
        case EFormActions.EDIT_PASSWORD:
            const editedPasswordState: Array<string> = [...initialState];

            editedPasswordState[1] = action.payload;
            return editedPasswordState;
        case EFormActions.EDIT_USERNAME:
            const editedUsernameState: Array<string> = [...initialState];

            editedUsernameState[0] = action.payload;
            return editedUsernameState;
        default:
            return [...initialState];
    }
}
