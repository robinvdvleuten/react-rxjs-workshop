import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import Application from './containers/application';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { resultsReceived } from './actions';

const initialState = {
  query: null,
  isLoading: false,
  results: []
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'SEARCH_QUERY':
      return { ...state, query: action.query };

    case 'SEARCH_QUERY_REQUEST':
      return { ...state, isLoading: true };

    case 'SEARCH_QUERY_SUCCESS':
      return { ...state, isLoading: false, results: action.results };

    default:
      return state;
  }
}

const searchQueryEpic = action$ =>
  action$.ofType('SEARCH_QUERY')
    .switchMap(action => {
      return ajax.getJSON(`/api/v1/search?query=${action.query}&tags=story`)
        .map(response =>
          response.hits.map(hit => ({ title: hit.title, text: hit.story_text }))
        )
        .map(results => {
          return resultsReceived(results);
        })
        .startWith({ type: 'SEARCH_QUERY_REQUEST' })
    })

const epicMiddleware = createEpicMiddleware(searchQueryEpic);

const store = createStore(reducer, applyMiddleware(epicMiddleware));

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
