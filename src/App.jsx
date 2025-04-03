
import './App.css'
import Layout from './components/Layout'
import Dashbord from './page/Dashboad/Dashbord'
import Conversation from './page/Conversation'
import { Route, Routes as Routres } from 'react-router-dom'

function App() {

  return (
    <>
      <div>

        <Layout />
        {/* <Routres >
        <Route path="/" element={<Dashbord />} />
        <Route path="/conversation" element={<Conversation />} />
      </Routres> */}
      </div>
    </>
  )
}

export default App
