// ============================= IMPORTS =============================== //
// importam hook-ul useEffect
import { useEffect } from 'react'
// importam css-ul pentru a stiliza componenta
import './App.css'
// importam componente din libraria react-router-dom
import { Routes, Route, useLocation } from 'react-router-dom'
// importam axios pentru a face request-uri catre server
import axios from 'axios'
// importam componenta Toaster din react-hot-toast
import {Toaster} from 'react-hot-toast'
// importam contextul UserContext si UserContextProvider
import { UserContext, UserContextProvider } from '../context/userContext'
// importam componentele Header si Footer
import Header from './components/Header'
import Footer from './components/Footer'
// importam paginile importante ale aplicatiei
import Home from './pages/Home'
import About from './pages/About'
import Contribute from './pages/Contribute'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Curriculum from './pages/Curriculum'
import Survey from './pages/Survey'
import DailyExercise from './pages/DailyExercise'
import AddDaily from './pages/AddDaily'
import AdminDaily from './pages/AdminDaily'
import AddLesson from './pages/AddLesson'
import UpdateLesson from './pages/UpdateLesson'
import AdminLessons from './pages/AdminLessons'
import LessonPage from './pages/LessonPage'
import Ledearboard from './pages/Leaderboard'
import NotFoundPage from './pages/NotFoundPage'
// importam cursurile
import PythonCourseHome from './pages/Courses/Python/PythonCourseHome'
import CAndCPlusPlusCourseHome from './pages/Courses/CAndCPlusPlus/CAndCPlusPlusCourseHome'
import JavaCourseHome from './pages/Courses/Java/JavaCourseHome'
import UnityCourseHome from './pages/Courses/Unity/UnityCourseHome'
import HtmlCourseHome from './pages/Courses/HTML/HtmlCourseHome'
import CSSCourseHome from './pages/Courses/CSS/CssCourseHome'
import JavaScriptCourseHome from './pages/Courses/JavaScript/JavaScriptCourseHome'
import ReactCourseHome from './pages/Courses/React/ReactCourseHome'
import SqlCourseHome from './pages/Courses/Sql/SqlCourseHome'
import PhpCourseHome from './pages/Courses/Php/PhpCourseHome'
import RubyCourseHome from './pages/Courses/Ruby/RubyCourseHome'
import SwiftCourseHome from './pages/Courses/Swift/SwiftCourseHome'
import RustCourseHome from './pages/Courses/Rust/RustCourseHome'
import KotlinCourseHome from './pages/Courses/Kotlin/KotlinCourseHome'
import GoCourseHome from './pages/Courses/Go/GoCourseHome'

// ============================= APP COMPONENT =============================== //

// defineste url-ul de baza pentru request-uri catre server
// schimba-l daca folosesti un port diferit (numele site-ului tau)
axios.defaults.baseURL = `http://localhost:8000`;
axios.defaults.withCredentials = true;

function App() {
  // functia de jos face scroll la inceputul paginii cand se schimba ruta (si la fiecare refresh)
  // foloseste hook-ul useLocation pentru a obtine locatia curenta
  const { pathname } = useLocation();
  // foloseste hook-ul useEffect pentru a face scroll la inceputul paginii
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <UserContextProvider>
        {/* header */}
        <Header />
        {/* notificatiile de la toast */}
        <Toaster position='bottom-right' toastOptions={{duration: 5000}} />
        <Routes>
          {/* paginile principale */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contribute' element={<Contribute />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/survey' element={<Survey />} />
          <Route path='/daily-exercise' element={<DailyExercise />} />
          <Route path='/add-daily' element={<AddDaily />} />
          <Route path='/admin-daily' element={<AdminDaily />} />
          <Route path='/add-lesson' element={<AddLesson />} />
          <Route path='/update-lesson/:id' element={<UpdateLesson />} />
          <Route path='/admin-lessons' element={<AdminLessons />} />
          <Route path="/lessons/:id" element={<LessonPage />} />
          <Route path='/leaderboard' element={<Ledearboard />} />
          <Route path='*' element={<NotFoundPage />} />
          {/* cursurile */}
          <Route path='/curriculum/python' element={<PythonCourseHome />} />
          <Route path='/curriculum/c++' element={<CAndCPlusPlusCourseHome />} />
          <Route path='/curriculum/java' element={<JavaCourseHome />} />
          <Route path='/curriculum/unity' element={<UnityCourseHome />} />
          <Route path='/curriculum/html' element={<HtmlCourseHome />} />
          <Route path='/curriculum/css' element={<CSSCourseHome />} />
          <Route path='/curriculum/javascript' element={<JavaScriptCourseHome />} />
          <Route path='/curriculum/react' element={<ReactCourseHome />} />
          <Route path='/curriculum/sql' element={<SqlCourseHome />} />
          <Route path='/curriculum/php' element={<PhpCourseHome />} />
          <Route path='/curriculum/ruby' element={<RubyCourseHome />} />
          <Route path='/curriculum/swift' element={<SwiftCourseHome />} />
          <Route path='/curriculum/rust' element={<RustCourseHome />} />
          <Route path='/curriculum/kotlin' element={<KotlinCourseHome />} />
          <Route path='/curriculum/go' element={<GoCourseHome />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  )
}

export default App;
