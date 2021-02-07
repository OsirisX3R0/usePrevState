const React = require('react')

export const usePrevState = initialState => {
    // Declaration of current state using useState hook
    const [currentState, setCurrentState] = React.useState(initialState)
    // Declaration of previous state (initially null) using useRef hook
    const previousState = React.useRef(null)

    // Method for both:
    // 1. Setting the previous state to the value of the current state 
    //    before changing its value.
    // 2. Setting the current state to the new value passed in.
    const setState = newValue => {
        previousState.current = currentState
        setCurrentState(newValue)
    }

    // Return the current state, previous state and setState method in 
    // an array, for easy renaming.
    return [currentState, previousState.current, setState]
}