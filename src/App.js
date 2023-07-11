

import "./Reset.css"
import "./Style.css"
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`}>
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
  </BrowserRouter>
  ) 
}

export default App;
