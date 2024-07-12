import React, { useState } from 'react';
import styled from 'styled-components';
import Teacher from './Teacher';
import { SideNavDashboard } from './SideNavDashboard';
import { useNavigate } from 'react-router-dom';


const teachersData = [
  { id: 1, name: 'Profesor 1', studentsPassed: 15, studentsFailed: 5 },
  { id: 2, name: 'Profesor 2', studentsPassed: 20, studentsFailed: 10 },
  { id: 3, name: 'Profesor 3', studentsPassed: 25, studentsFailed: 5 },
];

const ListContainer = styled.div`
  margin: 30px;
`;

export const TeacherList = () => {
  const [teachers] = useState(teachersData);

  return (
    <ListContainer>
      {teachers.map(teacher => (
        <Teacher key={teacher.id} teacher={teacher} />
      ))}
    </ListContainer>
  );
};

export default TeacherList;
