import { createStore } from 'redux'
import { createReducer } from 'typesafe-actions'
import { Action, Priority, ReduxState } from '../types'
import * as actions from './actions'

const initialState: ReduxState = {
    messages: {
        [Priority.Error]: [],
        [Priority.Info]: [],
        [Priority.Warn]: [],
    },
    isAPIEnabled: true,
    snackbar: {
        isVisible: false,
        message: '',
    }
}

export const general = createReducer<ReduxState, Action>(initialState)
    .handleAction(actions.addMessage, (state, action) => ({
        ...state,
        messages: {
            ...state.messages,
            [action.payload.priority]: [ ...state.messages[action.payload.priority], action.payload ]
        },
    }))
    .handleAction(actions.clear, (state) => ({
        ...state,
        messages: {
            [Priority.Error]: [],
            [Priority.Info]: [],
            [Priority.Warn]: [],
        },
    }))
    .handleAction(actions.toggleApi, (state) => ({
        ...state,
        isAPIEnabled: !state.isAPIEnabled,
    }))

const store = createStore(general, initialState)

export default store