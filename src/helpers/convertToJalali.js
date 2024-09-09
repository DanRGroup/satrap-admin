import jMoment from 'moment-jalaali';

export default function convertToJalali(orginalData) {
  const jalaliDate = jMoment(orginalData).format('jYYYY-jMM-jDD');
  return jalaliDate;
}
