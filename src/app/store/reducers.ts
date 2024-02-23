import { createFeature, createReducer, on } from "@ngrx/store";
import { sumActions } from "./actions";

export interface SumState {
  sum: number;
}

const initialState: SumState = {
  sum: 0,
};

const sumFeature = createFeature({
    name: 'sum',
    reducer: createReducer(
        initialState,
        
        on(sumActions.sum, (state) => ({
            ...state
        })),
        on(sumActions.summarizedSuccessfully, (state,action) => ({
            ...state,
            sum: state.sum + action.request.value
        }))
    )
})

export const {
    name: sum,
    reducer: sumReducer,
    selectSum
} = sumFeature