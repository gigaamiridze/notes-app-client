import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FloatingButton } from '../components';

function AddButton() {
  return (
    <Link to='#' id='add-btn'>
      <FloatingButton> 
        <IoIosAdd />
      </FloatingButton>
    </Link>
  )
}

export default AddButton;
