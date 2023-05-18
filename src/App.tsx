import { Provider } from 'react-redux';
import { store } from '../store/store';
import './globals.scss';

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
