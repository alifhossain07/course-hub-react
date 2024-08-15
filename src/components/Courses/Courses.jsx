import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import Course from "../Course/Course";

const Courses = () => {

    const [courses,setCourses] =useState([]);

    useEffect(() =>{

        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));


    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl font-semibold mb-10">Courses : {courses.length}</h1>
            {
                courses.map(course => 
               <Course key={course.id}></Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Courses;