import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Basic Component] Increment');
export const decrement = createAction('[Basic Component] Decrement');
export const reset = createAction('[Basic Component] Reset');

export const incrementBy = createAction('[Basic Component] Increment by', props<{ value: number }>());
export const decrementBy = createAction('[Basic Component] Decrement by', props<{ value: number }>());

export const changeText = createAction('[Basic Component] change text', props<{ changeBy: string }>())

