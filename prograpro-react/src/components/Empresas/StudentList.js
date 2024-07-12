import React, { useState } from 'react';
import styled from 'styled-components';
import Student from './Student';
import { SideNavDashboard } from './SideNavDashboard';
import { useNavigate } from 'react-router-dom';


const studentsData = [
  { id: 1, name: 'Alumno 1', grades: [6.0, 5.8, 6.6], status: 'Aprobado', feedback: '' },
  { id: 2, name: 'Alumno 4', grades: [4.6, 7, null], status: 'En trámite', feedback: '' },
  { id: 3, name: 'Alumno 9', grades: [3.6, 2.8, 5], status: 'Reprobado', feedback: '' },
];

const ListContainer = styled.div`
  margin: 20px;
`;

const StudentList = () => {
  const [students, setStudents] = useState(studentsData);

  const handleFeedbackChange = (id, newFeedback) => {
    const updatedStudents = students.map(student => 
      student.id === id ? { ...student, feedback: newFeedback } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <ListContainer>
      {students.map(student => (
        <Student 
          key={student.id} 
          student={student} 
          onFeedbackChange={handleFeedbackChange} 
        />
      ))}
    </ListContainer>
  );
};

export default StudentList;
