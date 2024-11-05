import {useState} from 'react';

import setToLocalStorage from '../../utils/setToLocalStorage';

import './StepsForm.css';

export interface ITableRow {
  date: string,
  distance: string,
}

interface IStepsFormProps {
  setValue: React.Dispatch<React.SetStateAction<ITableRow[]>>
}

export default function StepsForm(props: IStepsFormProps) {
  const {setValue} = props;

  const [formData, setFormData] = useState({
    date: '',
    distance: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.date.length > 0 && formData.distance. length > 0) {
      const newRow: ITableRow = {
        date: formData.date,
        distance: formData.distance,
      };
  
      setValue(prevData => {
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

  return (
    <div className="StepsForm">
      <form onSubmit={handleSubmit} >
        <label>
          <span>Дата (ДД.ММ.ГГ)</span>
          <input
            name='date' 
            type='date'
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
    </div>
  );
}
