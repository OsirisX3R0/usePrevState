const React = require('react')

module.usePrevState = initialState => {
    const [state, setState] = React.useState(initialState)
    const previousState = React.useRef(null)

    const setValue = newValue => {
        previousState.current = state
        setState(newValue)
    }

    return [state, previousState.current, setValue]
}