import { createAction } from 'typesafe-actions'
import { Message } from '../Api';

export const addMessage = createAction('ADD_MESSAGE')<Message>()
export const toggleApi = createAction('TOGGLE_FAKE_API')()
export const clear = createAction('CLEAR')()

export const showSnackbar = createAction('SHOW_SNACKBAR')<{
    message: string;
}>()
