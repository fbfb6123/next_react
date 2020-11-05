import { Component } from 'react';
import {initStore} from '../store';

const isServer = typeof window === 'undefined'
const _NRS_= '__NEXT_REDUX_STORE__'

function getOrCreateStore (initialState) {
  if (isServer) {
    return initStore(initialState)
  }

  if (!window[_NRS_]) {
    window[_NRS_] = initStore(initialState)
  }
  return window[_NRS_]
}
