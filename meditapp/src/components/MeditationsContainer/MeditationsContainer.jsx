import React, { useEffect, useState } from 'react'
import './MeditationsContainer.css'
import { dataBase } from '../../services/firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'
import MeditationsList from '../MeditationsList/MeditationsList'

export const MeditationsContainer = () => {
    const [meditations, setMeditations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const meditationsRef = collection(dataBase, 'meditaciones')
        getDocs(meditationsRef).then(snapshot => {
            const dataMeditations = snapshot.docs.map(doc => {
                const dataDoc = doc.data()
                console.log(doc.data())
                return {id: doc.id, ...dataDoc}
            })
            setMeditations(dataMeditations)
        }).finally(() => setLoading(false))
    }, [])

    if(loading) {
        <h2>Cargando...</h2>
    }

    return (
        <div>
            <h2>Comienza la meditación del día de hoy 🙌🏼</h2>
            <h3>Elige el tipo de meditación que quieres realizar:</h3>
            {meditations && 
                <MeditationsList meditations={meditations}/>
            }            
        </div>
    )
}
