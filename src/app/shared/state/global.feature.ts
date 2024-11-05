﻿import { createActionGroup, createFeature, createReducer, emptyProps, on, props } from '@ngrx/store';

export type Silhouette = {
  red: number;
  green: number;
  blue: number;
};

export type GlobalFeatureState = {
  accounts: string[];
  silhouette: Silhouette;
};

const initialState: GlobalFeatureState = {
  accounts: [],
  silhouette: {
    red: 1045353216,
    green: 1045353216,
    blue: 1045353216,
  },
};

export const GlobalFeatureActions = createActionGroup({
  source: 'GlobalFeature',
  events: {
    'Reset State': emptyProps(),
    'Update': props<{ partial: Partial<GlobalFeatureState> }>(),
    'Update Colors': props<{ partial: Partial<GlobalFeatureState['silhouette']> }>(),
    'Add Accounts': props<{ accounts: string[] }>(),
  },
});

export const GlobalFeature = createFeature({
  name: 'GlobalFeature',
  reducer: createReducer(
    initialState,
    on(GlobalFeatureActions.resetState, () => initialState),
    on(GlobalFeatureActions.update, (state, { partial }) => ({
      ...state,
      ...partial,
    })),
    on(GlobalFeatureActions.updateColors, (state, { partial }) => ({
      ...state,
      silhouette: {
        ...state.silhouette,
        ...partial,
      },
    })),
    on(GlobalFeatureActions.addAccounts, (state, { accounts }) => ({
      ...state,
      accounts: [...state.accounts, ...accounts],
    })),
  ),
});