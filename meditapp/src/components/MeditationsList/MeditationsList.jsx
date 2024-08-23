import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../services/firebaseConfig'
import {getDoc, doc} from 'firebase/firestore'
import Meditation from '../Meditation/Meditation'

const MeditationsList = ({meditations}) => {

  return (
      <div>
      {
      meditations.map(meditation => {
        <Meditation key={meditation.id} meditation={meditation}/>
        })
      }

      </div>
  )
}

export default MeditationsList