import PropTypes from "prop-types";
import Names from "../Names/Names";



const Details = ({selectedCourses,totalCreditHours}) => {
    return (
        <div className="ml-10 mt-10 md:mt-0 lg:mt-0">
            <h1 className="text-2xl font-bold text-red-500">Information Center</h1>
            <h1 className="mt-10 font-semibold text-xl">Selected Courses</h1>
            {
                <Names selectedCourses={selectedCourses}></Names>
            }

            <div className="mt-16 mb-10">
                <h1 className="font-semibold text-xl text-red-500">Total Credit Hour:{totalCreditHours}</h1>
            </div>
        </div>
    );
};
Details.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalCreditHours: PropTypes.number.isRequired,
};

export default Details;