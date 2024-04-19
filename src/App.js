import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Recipe from './components/Recipe';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import CreateIngredient from './components/CreateIngredient';
import CreateRecipe from './components/CreateRecipe';

function App() {
  return (
    
    <Router>
      <div className="App">
        <h1>Recipe System</h1>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/getMeals" element={<Recipe/>} />
        <Route path="/add-ingredient" element={<CreateIngredient/>}/>
        <Route path="/add-recipe" element={<CreateRecipe/>}/>
      </Routes>
    </Router>
  )
}

export default App;
