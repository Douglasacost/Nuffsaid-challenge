import { ActionType } from 'typesafe-actions'
import * as actions from '../redux/actions'
import { Message } from '../Api';

export type Action = ActionType<typeof actions>

export enum Priority {
    Error,
    Warn,
    Info,
}

export type ReduxState = {
    messages: {
        [Priority.Error]: Message[];
        [Priority.Info]: Message[];
        [Priority.Warn]: Message[];
    }
    isAPIEnabled: boolean;
    snackbar: {
        isVisible: boolean;
        message: string;
    }
}