export default function formateDate(date: string | null | undefined) {
  if(!date) return null;
  return date.split('-').reverse().join('.');
}
