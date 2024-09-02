import React from 'react'

import './SelectedMeditation.css'

import Timer from '../Timer/Timer'

const SelectedMeditation = ({medit}) => {
    return (
        <div className='selectedMeditation'>
            <h4>{medit.title}</h4>
            <iframe src={medit.iframeSrc}
            style={{borderRadius: medit.iframeStyle}} 
            width={medit.iframeWidth}
            height={medit.iframeHeight}
            allow={medit.iframeAllow}
            loading={medit.iframeLoading}></iframe>
            <Timer/>
        </div>
    )
}

export default SelectedMeditation