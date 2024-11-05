import { ITableRow } from "../App";

export default function setToLocalStorage(data: ITableRow[]) {
  localStorage.setItem('tableData', JSON.stringify(data));
}
