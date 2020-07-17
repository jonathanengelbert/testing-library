import React, {useState} from 'react';
import TestHook from "./Testing_Simple_State_Changes/TestHook";
import TestHookReducer from "./Testing_Use_Reducer/TestHookReducer";
import './App.css';

function App() {
    const [name, setName] = useState('Moe');
    const changeName = () => setName('Steve');
    return (
        <div className="App">
            <header className="App-header">
                <h1>Testing with React</h1>
                <TestHook
                    name={name}
                    changeName={changeName}
                ></TestHook>
               <TestHookReducer></TestHookReducer>
            </header>
        </div>
    );
}

export default App;
