# usePrevState
## Basic usage

```javascript
import React, { useEffect } from 'react'
import usePrevState from 'use-prev-state'

const App = () => {
    const [count, prevCount, setCount] = usePrevState(0) // [0, null]

    useEffect(() => {
        setCount(prev => prev + 1) // [1, 0]
    }, [])
}

export default App
```