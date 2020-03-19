import { createSelector } from '@ngrx/store';

import { IFormState } from './form.state';

const formState = (formstate: IFormState) => formstate.form;

export const selectUsername = createSelector(formState, (state: Array<string>) => state[0] );

export const selectPassword = createSelector(formState, (state: Array<string>) => state[1] );
