import { IStepsTableRowProps } from "../components/StepsTable/views/StepsTableRow/StepsTableRow";

export default function getFromLocalStorage(): IStepsTableRowProps[] | null {
  const result = localStorage.getItem('tableData');
  return result ? JSON.parse(result) : null;
}
