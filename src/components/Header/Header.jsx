
import { Logo } from '../Logo/Logo'
import { CgMenuRightAlt } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa';
import useAuthUser from '../../hooks/Auth';

export const Header = () => {

const nameInfo = useAuthUser();

  return (
    <div className=" container mx-auto px-4 py-4 flex items-center justify-between ">
      <Logo />
    { nameInfo? <div>{nameInfo.fullName}</div> :  <></>}
<div className="bg-emerald-200 w-8 h-8 flex items-center justify-center rounded-full"  ><FaUser color="#FCFCFCB3" /></div>
<CgMenuRightAlt size={32}/>
    </div>
  )
}
