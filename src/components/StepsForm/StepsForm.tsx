import {useState} from 'react';

import {IStepsTableRowProps} from '../StepsTable/views/StepsTableRow/StepsTableRow';
import StepsTable from '../StepsTable';

import './StepsForm.css';

export interface ITableRow {
  date: string,
  distance: string,
}

export default function StepsForm() {
  const data = getFromLocalStorage();
  
  const [tableData, setTableData] = useState<ITableRow[]>(data || []);

  const [formData, setFormData] = useState({
    date: '',
    distance: '',
  });

  const setToLocalStorage = (data: ITableRow[]) => {
    localStorage.setItem('tableData', JSON.stringify(data));
  };

  function getFromLocalStorage(): IStepsTableRowProps[] | null {
    const result = localStorage.getItem('tableData');
    return result ? JSON.parse(result) : null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.date.length > 0 && formData.distance. length > 0) {
      const newRow: ITableRow = {
        date: formData.date,
        distance: formData.distance,
      };
  
      setTableData(prevData => {
        const updatedData = [...prevData, newRow];
        setToLocalStorage(updatedData);
        return updatedData;
      });
    }

    setFormData({date: '', distance: ''});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentRow = e.currentTarget.closest('.StepsTableRow');
    const currentDate = currentRow?.childNodes[0].textContent;

    const filteredRow = data?.filter(row => row.date !== currentDate);
    setTableData(filteredRow || []);
    setToLocalStorage(filteredRow || []);
  };

  return (
    <div className="StepsForm">
      <form onSubmit={handleSubmit} >
        <label>
          <span>Дата (ДД.ММ.ГГ)</span>
          <input
            name='date' 
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Пройдено км</span>
          <input
            name='distance'
            value={formData.distance}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>OK</button>
      </form>
      {tableData && (
        <StepsTable
          tableData={tableData} 
          onDeleteClick={handleDelete}
        />
      )}
    </div>
  );
}
