import React, { useState } from "react";
import axios from "axios";
import "./Modal.css";

const UpdateModal = ({ student, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(student || {});

  if (!student) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://freetestapi.com/api/v1/students/${student.id}`,
        formData
      );

      onUpdate(formData);
      onClose();
    } catch (error) {
      alert("Api provider doesnot allow to update api data!");
      console.log(error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-center">Update Student</h2>

        <form onSubmit={handleUpdate} className="mt-3">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">GPA</label>
            <input
              type="number"
              name="gpa"
              value={formData.gpa || ""}
              onChange={handleInputChange}
              className="form-control"
              step="0.01"
            />
          </div>
          {/* Add more fields as necessary */}

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-success">
              Update
            </button>
            <button className="btn btn-outline-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
