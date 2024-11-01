import Button from './components/Button/Button'
import './App.css'
import TextInput from './components/TextInput/TextInput'
import TextInputForm from './components/TextInputForm/TextInputForm'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import { Route, Routes } from 'react-router-dom'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'

function App() {

  return (
      <Routes>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/' element={<div>Home</div>} />
    </Routes>
  )
}

export default App

 
