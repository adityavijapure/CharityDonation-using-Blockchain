import React, { useState } from 'react';
import NavButton from './NavButton';

const ProjectList = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Water sahti', status: 'Active', goal: 'ETH 10,000', MinAmount: 'ETH 8,000' },
    { id: 2, name: 'School sahti', status: 'Completed', goal: 'ETH 5,000', MinAmount: 'ETH 5,500' },
  ]);

  const [newProject, setNewProject] = useState({ name: '', status: 'Active', goal: '', MinAmount: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newProject.name && newProject.goal && newProject.MinAmount) {
      setProjects([
        ...projects,
        { id: projects.length + 1, ...newProject },
      ]);
      setNewProject({ name: '', status: 'Active', goal: '', MinAmount: '' });
    }
  };

  return (
    <div className='flex w-screen h-screen'>
      <NavButton/>
    <div className="bg-white w-screen h-screen p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
      
      <form className="mb-6" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-bold">Project Name</label>
            <input
              type="text"
              name="name"
              value={newProject.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter project name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Address</label>
            <input
              type="text"
              name="goal"
              value={newProject.goal}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Add Ether Address"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Goal</label>
            <input
              type="text"
              name="goal"
              value={newProject.goal}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter goal amount"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">MinAmount</label>
            <input
              type="text"
              name="MinAmount"
              value={newProject.MinAmount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter MinAmount amount"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">MinAmount</label>
            <textarea
              type="text"
              name="MinAmount"
              value={newProject.MinAmount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter MinAmount amount"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        > 
          Add Project
        </button>
      </form>

      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Project Name</th>
            <th className="px-4 py-2">status</th>
            <th className="px-4 py-2">Goal</th>
            <th className="px-4 py-2">MinAmount</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="border px-4 py-2">{project.name}</td>
              <td className="border px-4 py-2">{project.status}</td>
              <td className="border px-4 py-2">{project.goal}</td>
              <td className="border px-4 py-2">{project.MinAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ProjectList;
