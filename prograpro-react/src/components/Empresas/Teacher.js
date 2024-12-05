import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import TeacherDetails from './TeacherDetails';

const TeacherContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TeacherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const TeacherName = styled.span`
  font-weight: bold;
`;

const Teacher = ({ teacher }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TeacherContainer>
      <TeacherHeader onClick={toggleDetails}>
        <TeacherName>{teacher.name}</TeacherName>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </TeacherHeader>
      {isOpen && <TeacherDetails teacher={teacher} />}
    </TeacherContainer>
  );
};

export default Teacher;
