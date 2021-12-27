import { format } from 'date-fns';

const formatDate = (datestr) => {
  const date = new Date(datestr);
  return format(date, 'MMMM d');
};

export default formatDate;

