import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Details from './components/Details/Details';
import IntroBanner from './components/IntroBanner/IntroBanner';
import Credit from './components/Credit/Credit';
import { useState } from 'react';
import 'daisyui/dist/full.css'; 

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectCourse = (course) => {
    setSelectedCourses((prevCourses) => {
      const isAlreadySelected = prevCourses.some(selected => selected.id === course.id);

      if (!isAlreadySelected) {
        setTotalCreditHours((prevHours) => {
          const newTotal = Number(prevHours) + Number(course.credit_hour);

          if (newTotal > 20) {
            setIsModalOpen(true); // Show the modal
            return prevHours; 
          }

          return newTotal;
        });

        return [...prevCourses, course];
      }

      return prevCourses; 
    });
  };

  return (
    <div className='w-10/12 mx-auto'>
      <Header />
      <IntroBanner />
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <Courses handleSelectCourse={handleSelectCourse} />
        <Details selectedCourses={selectedCourses} totalCreditHours={totalCreditHours} />
      </div>

      {/* DaisyUI Modal */}
      {isModalOpen && (
        <div className="">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-xl font-bold mb-4">Credit Limit Exceeded</h2>
              <p>You cannot take more than 20 credits. Please deselect some courses to continue.</p>
              <div className="modal-action">
                <button
                  className="btn btn-primary"
                  onClick={() => setIsModalOpen(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Credit></Credit>
      </div>

      
  );
}

export default App;
