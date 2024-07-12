import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DetailsContainer = styled.div`
  margin-top: 20px;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DataContainer = styled.div`
  margin-left: 40px;
`;

const TeacherDetails = ({ teacher }) => {
  const { studentsPassed, studentsFailed } = teacher;
  const totalStudents = studentsPassed + studentsFailed;
  const data = [
    {
      name: 'Resultados',
      Aprobados: (studentsPassed / totalStudents) * 100,
      Reprobados: (studentsFailed / totalStudents) * 100,
    },
  ];

  return (
    <DetailsContainer>
      <ChartContainer>
        <BarChart
          width={400}
          height={100}
          data={data}
          layout="vertical"
          margin={{
            top: 5, right: 30, left: 30, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Aprobados" fill="#00C49F" />
          <Bar dataKey="Reprobados" fill="#FF8042" />
        </BarChart>
        <DataContainer>
          <div>Total de alumnos: {totalStudents}</div>
        </DataContainer>
      </ChartContainer>
    </DetailsContainer>
  );
};

export default TeacherDetails;
