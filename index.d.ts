/**
 * The 'setState' method returned by usePrevState. Sets previous state to current state, then current state to new state.
 */
type SetPrevStateFunction = (newState: T) => void

// type UsePrevStateFunction = (initialState: T | undefined) => [T, T, SetPrevStateFunction]

/**
 * Captures both current state and previous state. Previous state is defaulted to null initially.
 * 
 * 
 */
export function usePrevState<T>(initialState: T | undefined): [T, T, SetPrevStateFunction]