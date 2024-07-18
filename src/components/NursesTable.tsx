import React, { useEffect, useState } from 'react';
import nursesData from '../data/nurses.json';

interface Nurse {
  id: number;
  name: string;
  department: string;
}

const NursesTable: React.FC = () => {
  const [nurses, setNurses] = useState<Nurse[]>([]);

  useEffect(() => {
    setNurses(nursesData);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Отделение</th>
        </tr>
      </thead>
      <tbody>
        {nurses.map(nurse => (
          <tr key={nurse.id}>
            <td>{nurse.name}</td>
            <td>{nurse.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NursesTable;
