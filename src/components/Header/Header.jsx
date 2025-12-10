import React from 'react'
import { Logo } from '../Logo/Logo'
import { CgMenuRightAlt } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa';

export const Header = () => {
  let name = "Iruna";
  return (
    <div className=" container mx-auto px-4 py-4 flex items-center justify-between ">
      <Logo />
      <div>{name}</div>
<div className="bg-emerald-200 w-8 h-8 flex items-center justify-center rounded-full"  ><FaUser color="#FCFCFCB3" /></div>
<CgMenuRightAlt size={32}/>
    </div>
  )
}
