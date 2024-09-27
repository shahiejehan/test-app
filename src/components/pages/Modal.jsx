import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

const Modal = ({ student, onClose, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!student) return null;

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://freetestapi.com/api/v1/students/${id}`);
      alert("Record deleted successfully.");
      onClose();
    } catch (error) {
      console.error("Error deleting the student:", error);
      alert("Failed to delete the record. Api provider restricts.");
      onClose();
    }
  };

  const openUpdateModal = () => {
    onUpdate(student);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-3">
          <h2>{student.name}</h2>
          <img
            src={student.image}
            alt="student"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </div>
        <div className="mb-2">
          <span>
            <strong>Roll number:</strong> {student.id}
          </span>
          <br />
          <span>
            <strong>Course:</strong> {student.courses[0]}
          </span>
        </div>
        <button
          className="btn btn-outline-primary mb-3"
          onClick={handleToggleExpand}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
        {isExpanded && (
          <div className="expanded-details text-start mb-3">
            <div className="text-justify">
              <span>
                <strong>Email:</strong> {student.email || "N/A"}
              </span>
              <br />
              <span>
                <strong>Phone:</strong> {student.phone || "N/A"}
              </span>
              <br />
              <span>
                <strong>Age:</strong> {student.age || "N/A"}
              </span>
              <br />
              <span>
                <strong>Gender:</strong> {student.gender || "N/A"}
              </span>
              <br />
              <span>
                <strong>GPA:</strong> {student.gpa || "N/A"}
              </span>
            </div>
            <h5 className="text-center">Address</h5>
            <div className="text-justify">
              <strong>City:</strong> {student.address?.city || "N/A"}
              <br />
              <strong>Country:</strong> {student.address?.country || "N/A"}
              <br />
              <strong>Street:</strong> {student.address?.street || "N/A"}
              <br />
              <strong>Zip:</strong> {student.address?.zip || "N/A"}
            </div>
          </div>
        )}
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary" onClick={onClose}>
            Close
          </button>
          <button
            className="btn btn-outline-success mx-2"
            onClick={openUpdateModal}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleDelete(student.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
