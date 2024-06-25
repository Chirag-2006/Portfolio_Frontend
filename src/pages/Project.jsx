import React from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

const Project = () => {

    const { project } = useAuth();
    if (!project) {
        return <h1>Loading...</h1>
    }
    console.log("project in jsx", project)
    return (
        <>
            <div className="container mx-auto">

                <h2 className="text-3xl font-bold mb-9 mt-3 text-center text-underline ">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.map((project, index) => (
                        <div key={index} className="bg-gray-900 text-white shadow-md rounded-lg p-6 mb-4 w-fit">
                            <div className="flex flex-col items-center">
                                <img src="/images/design.png" alt="image" width="300" className="mb-4 rounded-lg max-w-md" />
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4 text-center text-sm overflow-hidden overscroll-x-auto">{project.description}</p>
                                <div className="flex space-x-4 mb-4">
                                    <Link
                                        to={project.link}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Link
                                    </Link>
                                    <Link
                                        to={project.githublink}
                                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </Link>
                                </div>
                                <p className="text-gray-500 text-sm">Created: {project.projectCreate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
