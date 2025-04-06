import './App.css'
import Home from './component/home';
import Test from './component/test';
import { CounterProvider } from './testt/useCounter';

function App() {

  return (
    <>
    <Home/>
    <CounterProvider>
    <Test/>
    </CounterProvider>

    </>
  )
}

export default App
