import PropTypes from "prop-types";
import Names from "../Names/Names";



const Details = ({selectedCourses}) => {
    return (
        <div className="ml-10">
            <h1 className="text-2xl font-bold">Information Center</h1>
            <h1 className="mt-10 font-semibold text-xl">Selected Courses</h1>
            {
                <Names selectedCourses={selectedCourses}></Names>
            }
        </div>
    );
};
Details.propTypes = {
  selectedCourses: PropTypes.array.isRequired
};

export default Details;