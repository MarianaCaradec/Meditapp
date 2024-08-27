import React, { useEffect, useState } from 'react'

import './MeditationsContainer.css'

import { dataBase } from '../../services/firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'

import Meditation from '../Meditation/Meditation'


export const MeditationsContainer = () => {
    const [meditations, setMeditations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const meditationsRef = collection(dataBase, 'meditaciones')
        getDocs(meditationsRef).then(snapshot => {
            const dataMeditations = snapshot.docs.map(doc => {
                const dataDoc = doc.data()
                return {id: doc.id, ...dataDoc}
            })
            setMeditations(dataMeditations)
        }).finally(() => setLoading(false))
    }, [])

    if(loading) {
        <h2>Cargando...</h2>
    }

    return (
      <>
        <div className='titles'>
        <h2>Comienza la meditación del día de hoy 🙌🏼</h2>
        <h3>Elige el tipo de meditación que quieres realizar:</h3>
        </div>
        <div className='meditations'>
          {meditations.length > 0 &&
            meditations.map(meditation => {
              return (
                <Meditation key={meditation.id} meditation={meditation}/>
              )
            })
        }
      </div>
      </>

    )
}
