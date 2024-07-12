import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import StudentDetails from './StudentDetails';

const StudentContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StudentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const StudentName = styled.span`
  font-weight: bold;
`;

const Student = ({ student, onFeedbackChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StudentContainer>
      <StudentHeader onClick={toggleDetails}>
        <StudentName>{student.name}</StudentName>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </StudentHeader>
      {isOpen && (
        <StudentDetails student={student} onFeedbackChange={onFeedbackChange} />
      )}
    </StudentContainer>
  );
};

export default Student;
