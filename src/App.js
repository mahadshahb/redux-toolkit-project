import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/detailsPage";


function App() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/user/:id" exact element={<DetailsPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
