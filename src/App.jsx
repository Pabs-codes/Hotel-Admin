import { BrowserRouter, Routes , Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useState } from "react";
import ProtectedPage from "./ProtectedPage";


function App() {

  const [apiUrl, setApiUrl] = useState('')
  
  fetch('config.json')
    .then(response => response.json())
    .then(data => {
      setApiUrl(data.API_URL)
    })
    .catch(error => {
      console.error('Error fetching config:', error)
    })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login apiUrl={apiUrl} />} />
        <Route path="/dashboard" element={<ProtectedPage page={<Dashboard apiUrl={apiUrl}/>}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


// echo "# Hotel-Admin" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Pabs-codes/Hotel-Admin.git
// git push -u origin main