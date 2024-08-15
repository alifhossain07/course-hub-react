import PropTypes from "prop-types";
import Names from "../Names/Names";



const Details = ({selectedCourses,totalCreditHours}) => {
    return (
        <div className="ml-10">
            <h1 className="text-2xl font-bold text-red-500">Information Center</h1>
            <h1 className="mt-10 font-semibold text-xl">Selected Courses</h1>
            {
                <Names selectedCourses={selectedCourses}></Names>
            }

            <div className="mt-20">
                <h1 className="font-semibold text-xl text-red-500">Total Credit Hour:{totalCreditHours}</h1>
            </div>
        </div>
    );
};
Details.propTypes = {
  selectedCourses: PropTypes.array.isRequired
};

export default Details;