const React = require('react')

module.usePrevState = initialState => {
    const [currentState, setCurrentState] = React.useState(initialState)
    const previousState = React.useRef(null)

    const setState = newValue => {
        previousState.current = currentState
        setCurrentState(newValue)
    }

    return [currentState, previousState.current, setState]
}