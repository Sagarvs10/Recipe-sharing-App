import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext'; 
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import Recipe from '../Recipe/Recipe';
import AddRecipe from '../AddRecipe/AddRecipe';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Signup from '../Signup/Signup';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

function HomePage() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} exact />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/recipes/add-recipe" element={<AddRecipe />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default HomePage;
