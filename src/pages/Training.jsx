import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header/Header'
import TrainingMenu from '../components/TrainingMenu/TrainingMenu'
import { getDueWords, processCorrectAnswer } from '../services/training/training'
import { useAuth } from '../context/auth/useAuth'


const Training = () => {

  
  return (
    <div className=' container mx-auto px-4 bg-gray-50 '>

    <Header/>
<TrainingMenu />

    
    </div>
  )
}

export default Training