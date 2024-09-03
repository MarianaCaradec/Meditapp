import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { dataBase } from '../../services/firebaseConfig'
import {getDoc, doc} from 'firebase/firestore'

import SelectedMeditation from '../SelectedMeditation/SelectedMeditation'

const SelectedMeditationContainer = () => {
    const [selectedMeditation, setSelectedMeditation] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const meditationRef = doc(dataBase, 'meditaciones', id)
        getDoc(meditationRef).then(snapshot => {
            const dataMeditation = snapshot.data()
            console.log('info:',dataMeditation)
            const meditationDetailed = {...dataMeditation, id: snapshot.id}
            setSelectedMeditation(meditationDetailed)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {selectedMeditation &&
                <SelectedMeditation medit={selectedMeditation}/>
            }

        </div>
    )
}

export default SelectedMeditationContainer