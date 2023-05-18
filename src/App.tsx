import { Provider } from 'react-redux';
import { store } from '../store/store';
import './App.scss';

function App() {

  return (
    <>
    <Provider store={store}>
    <h1>Youtube Clone</h1>

    </Provider>
    </>
  )
}

export default App
