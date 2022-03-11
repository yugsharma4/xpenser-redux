import Header from "./components/header";
import Home from "./pages/home";
import {
  BrowserRouter as Router, Route,Routes
} from "react-router-dom";
import AddExpense from "./pages/addExpense/index";
import Footer from "./components/footer";

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
      
      <Route path="/" exact element={<Home />} />

      <Route path="/add-expense"  exact element={<AddExpense />} />
     
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
