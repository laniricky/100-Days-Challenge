import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // This is where your Redux store is created
import TodoApp from './components/TodoApp'; // Your main to-do app component

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;

