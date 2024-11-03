import StepsTableRow from './views/StepsTableRow/StepsTableRow';

import './StepsTable.css';
import { ITableRow } from '../StepsForm/StepsForm';

interface IStepsTableProps {
  tableData: ITableRow[],
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function StepsTable(props: IStepsTableProps) {
  const {tableData, onDeleteClick} = props;

  return (
    <div className='StepsTable'>
      <div className="StepsTable__header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      {tableData.length > 0 && (
        <div className="StepsTable__body">
          {tableData.map((row, index) => (
            <StepsTableRow 
              key={index}
              date={row.date}
              distance={row.distance}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
