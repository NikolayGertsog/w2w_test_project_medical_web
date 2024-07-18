import React, { useEffect, useState } from 'react';
import doctorsData from '../data/doctors.json';

interface Doctor {
  id: number;
  name: string;
  department: string;
  head: boolean;
}

const DoctorsTable: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Отделение</th>
          <th>Заведующий</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map(doctor => (
          <tr key={doctor.id}>
            <td>{doctor.name}</td>
            <td>{doctor.department}</td>
            <td>{doctor.head ? 'Да' : 'Нет'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorsTable;
