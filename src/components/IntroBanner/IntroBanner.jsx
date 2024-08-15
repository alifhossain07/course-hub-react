const IntroBanner = () => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-20">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
                Welcome to Our Course Management System
            </h1>
            
            <p className="text-lg text-gray-700 mb-6">
                Our platform helps you efficiently manage and track your courses. With a user-friendly interface, you can easily select and monitor your course credits and progress.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-red-500 p-4 mt-10">
                <h2 className="text-2xl font-semibold text-red-600 mb-2">
                    Key Features:
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>View and select courses from a comprehensive list</li>
                    <li>Track total credit hours and manage course limits</li>
                    <li>Monitor and manage your course selections</li>
                    <li>Ensure you do not exceed the maximum credit hours</li>
                    <li>Easy-to-use interface for an enhanced user experience</li>
                </ul>
            </div>
        </div>
    );
};

export default IntroBanner;
