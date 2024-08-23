import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../services/firebaseConfig'
import {getDoc, doc} from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Meditation = ({meditation}) => {
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
        <>
        {
            selectedMeditation &&
            <div id={`${meditation.id}`}>
                <h4>{meditation.title}</h4>
                <iframe src={`${meditation.iframeSrc}`} 
                style={`${meditation.iframeStyle}`} 
                width={`${meditation.iframeWidth}`} 
                height={`${meditation.iframeHeight}`}
                allow={`${meditation.iframeAllow}`}
                loading={`${meditation.iframeLoading}`}></iframe>
            </div>
        }
        </>
    )
}

export default Meditation