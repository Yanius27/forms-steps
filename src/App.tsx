import {useState} from 'react';

import StepsForm from './components/StepsForm';
import getFromLocalStorage from './utils/getFromLocalStorage';
import StepsTable from './components/StepsTable';
import setToLocalStorage from './utils/setToLocalStorage';
import formateDate from './utils/formateDate';

import './App.css';

export interface ITableRow {
  date: string,
  distance: string,
}

function App() {
  const data = getFromLocalStorage();
  
  const [tableData, setTableData] = useState<ITableRow[]>(data || []);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentRow = e.currentTarget.closest('.StepsTableRow');
    const currentDate = currentRow?.childNodes[0].textContent;
  
    const filteredRow = data?.filter(row => formateDate(row.date) !== currentDate);
    setTableData(filteredRow || []);
    setToLocalStorage(filteredRow || []);
  };

  return (
    <>
    <StepsForm setValue={setTableData} />
    {tableData && (
        <StepsTable
          tableData={tableData} 
          onDeleteClick={handleDelete}
        />
      )}
    </>
  )
}

export default App
