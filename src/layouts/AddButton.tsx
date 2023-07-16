import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { FloatingButton } from '../components';

function AddButton() {
  return (
    <Link to={PageRoutes.NEW_NOTE} id='add-btn'>
      <FloatingButton> 
        <IoIosAdd />
      </FloatingButton>
    </Link>
  )
}

export default AddButton;
