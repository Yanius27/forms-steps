import './StepsTableRow.css';

export interface IStepsTableRowProps {
  date: string,
  distance: string,
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export default function StepsTableRow(props: IStepsTableRowProps) {
  const {date, distance, onDeleteClick} = props;

  return (
    <div className="StepsTableRow">
      <span className='StepsTableRow__date'>{date}</span>
      <span className='StepsTableRow__distance'>{distance}</span>
      <div className="StepsTableRow__btns">
        <button className='StepsTableRow__btns-edit' />
        <button
          className='StepsTableRow__btns-delete'
          onClick={(e) => onDeleteClick(e)}
        />
      </div>
    </div>
  );
}
