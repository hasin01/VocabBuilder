
import { Logo } from '../Logo/Logo'
import { FaUser } from 'react-icons/fa';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useAuth } from '../../context/useAuth';

export const Header = () => {
  const user = useAuth();



  return (
    <div className=" container mb-8 mx-auto px-4 py-4 flex items-center justify-between ">
      <Logo />
    { user? 
    <div className='flex items-center 
     '>{user.fullName} <div className="ml-3 bg-emerald-200 w-8 h-8 flex items-center justify-center rounded-full"  ><FaUser  color="#FCFCFCB3" /></div></div>
     :  <div></div>}

    <BurgerMenu />

    </div>
  )
}
