import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({handleSelectCourse}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="md:w-9/12 ">
            <h1 className="text-2xl font-bold mb-10 text-red-500">Courses: {courses.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <Course key={course.id} course={course} handleSelectCourse={handleSelectCourse} />
                ))}
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelectCourse: PropTypes.func
}

export default Courses;