import './App.css'
import Header from './components/Header/Header'

import Courses from './components/Courses/courses'
import Details from './components/Details/Details'
import { useState } from 'react';


function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);



const handleSelectCourse =(course)=>{

  setSelectedCourses(prevCourses => {
      if (!prevCourses.some(selected => selected.id === course.id)) {
        return [...prevCourses, course];
      }
      return prevCourses;
    });

};

  return (
    <>
      <Header></Header>
      <div className='flex'>
      <Courses handleSelectCourse={handleSelectCourse}></Courses>
      <Details selectedCourses={selectedCourses}></Details>
      </div>
     
    
    </>
  )
}

export default App;