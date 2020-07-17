import React, { useState } from 'react';

type Props = {
    name: string,
    changeName: Function
}

const TestHook = (props: Props) => {
    const [state, setState] = useState("Initial State")

    const changeState = () => {
        setState("Initial State Changed")
    }

    const changeNameToSteve = () => {
        props.changeName()
    }

    return (
        <div>
            <button onClick={changeState}>
                State Change Button
            </button>
            <p>{state}</p>
            <button onClick={changeNameToSteve}>
                Change Name
            </button>
            <p>{props.name}</p>
        </div>
    )
}


export default TestHook;