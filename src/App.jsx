import { BrowserRouter, Routes , Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<ProtectedPage page={<Dashboard/>}/>}/>
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