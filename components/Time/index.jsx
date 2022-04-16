import PropTypes from "prop-types";

import moment from "moment";
import "moment/locale/pt-br";

const Time = ({ date }) => {
  const { time, currentFormat, formatTo } = date;

  moment.locale("pt-br");

  return (
    <time dateTime={time}>{moment(time, currentFormat).format(formatTo)}</time>
  );
};

export default Time;

Time.propTypes = {
  date: PropTypes.exact({
    time: PropTypes.string.isRequired,
    currentFormat: PropTypes.string.isRequired,
    formatTo: PropTypes.string.isRequired,
  }).isRequired,
};
