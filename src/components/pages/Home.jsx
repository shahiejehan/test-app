import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";

const Home = () => {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  async function getStudents() {
    try {
      const res = await axios.get("https://freetestapi.com/api/v1/students");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStudents();
  }, []);
  //   console.log(data);
  const handleUpdate = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };
  const openUpdateModal = (student) => {
    setSelectedStudent(student);
    setIsUpdateModalOpen(true);
  };
  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedStudent(null);
  };

  const handleCardClick = (student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedStudent(null);
  };

  return (
    <Layout>
      <h1 className="text-white mt-3">Students</h1>
      <div className="container-fluid mt-5 ms-0">
        <div className="row">
          {data?.map((item, i) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
              <div
                className="card my-2 text-white border-white"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#141e30",
                }}
                onClick={() => handleCardClick(item)}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="student img"
                />
                <div className="card-body">
                  <h4 className="card-text">Name: {item.name}</h4>
                  <h6 className="card-text">Roll Number: {item.id}</h6>
                  <h6 className="card-text">Course: {item.courses[0]}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalVisible && (
        <Modal student={selectedStudent} onClose={closeModal} />
      )}
      <Modal
        student={selectedStudent}
        onClose={closeModal}
        onUpdate={openUpdateModal}
      />

      {isUpdateModalOpen && (
        <UpdateModal
          student={selectedStudent}
          onClose={closeUpdateModal}
          onUpdate={handleUpdate}
        />
      )}
    </Layout>
  );
};

export default Home;
