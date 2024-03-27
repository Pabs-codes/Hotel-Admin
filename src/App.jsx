import { BrowserRouter, Routes , Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";
import config from "./config-loader";


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login apiUrl={config?.API_URL} />} />
        <Route path="/dashboard" element={<ProtectedPage page={<Dashboard apiUrl={config?.API_URL}/>}/>}/>
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