import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faBuildingColumns, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function LinkButton(props) {
  const {btnLink, btnText} = props;

  return (
    <Link to={btnLink}>
      <button>
        <FontAwesomeIcon icon={faLink} /> {btnText}
      </button>
    </Link>
  );
};

