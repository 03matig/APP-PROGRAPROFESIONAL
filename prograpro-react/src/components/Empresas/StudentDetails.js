import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  margin-top: 10px;
`;

const Grade = styled.div`
  margin: 5px 0;
`;

const Feedback = styled.textarea`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const calculateAverage = (grades) => {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
};

const StudentDetails = ({ student, onFeedbackChange }) => {
  const { grades, status, feedback } = student;
  const average = calculateAverage(grades);

  const handleFeedbackChange = (e) => {
    onFeedbackChange(student.id, e.target.value);
  };

  return (
    <DetailsContainer>
      <Grade>Nota 1: {grades[0]}</Grade>
      <Grade>Nota 2: {grades[1]}</Grade>
      <Grade>Nota 3: {grades[2]}</Grade>
      <Grade>Promedio: {average.toFixed(2)}</Grade>
      <Grade>Estado: {status}</Grade>
      <Feedback 
        value={feedback} 
        onChange={handleFeedbackChange} 
        placeholder="Deja tu feedback aquí"
      />
    </DetailsContainer>
  );
};

export default StudentDetails;
