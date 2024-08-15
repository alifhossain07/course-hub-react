import PropTypes from "prop-types";

const Names = ({ selectedCourses }) => {
    const {course_name} = selectedCourses;
    return (
        <ul>
            {selectedCourses.length > 0 ? (
                selectedCourses.map(course => (
                    <li key={course.id} className="border-b border-gray-200 py-2">
                        {course.course_name}
                    </li>
                ))
            ) : (
                <p>No courses selected</p>
            )}
        </ul>
    );
};

Names.propTypes = {
    selectedCourses: PropTypes.array.isRequired
};

export default Names;
