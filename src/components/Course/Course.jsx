import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa6";
import { LuBookOpen } from "react-icons/lu";

const Course = ({ course,handleSelectCourse }) => {
    const { img, course_name, credit_hour, cr_des, price } = course;

    return (
        <div className="flex flex-col h-full bg-slate-50 border border-gray-200 rounded-lg shadow-2xl overflow-hidden">
            <div className="">
                <img className="p-2 rounded-xl" src={img} alt={course_name} />
            </div>
            <div className="flex flex-col flex-grow p-4">
                <h1 className="text-xl font-bold mb-2">{course_name}</h1>
                <p className="text-sm flex-1 mb-4">{cr_des}</p>
                <div className="flex gap-4 mb-4">
                    <p className="flex gap-2 items-center text-md">
                        <FaDollarSign /> Price: {price}
                    </p>
                    <p className="flex gap-2 items-center text-md">
                        <LuBookOpen />Credit: {credit_hour} hr
                    </p>
                </div>
                <button onClick={() =>handleSelectCourse(course)} className="bg-sky-400 px-6 py-2 rounded-xl text-white transition-transform transform hover:scale-105 hover:bg-sky-600">
                    Select
                </button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        course_name: PropTypes.string.isRequired,
        credit_hour: PropTypes.number.isRequired,
        cr_des: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        handleSelectCourse: PropTypes.func
    })
};
export default Course;