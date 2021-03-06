import { Action } from '@ngrx/store';

export enum EFormActions {
    EDIT_PASSWORD = 'EDIT_PASSWORD',
    EDIT_USERNAME = 'EDIT_USERNAME'
}

export class EditPassword implements Action {
    readonly type = EFormActions.EDIT_PASSWORD;
    constructor(public payload: string) {}
}

export class EditUsername implements Action {
    readonly type = EFormActions.EDIT_USERNAME;
    constructor(public payload: string) {}
}

export type FormActions = EditPassword | EditUsername;
