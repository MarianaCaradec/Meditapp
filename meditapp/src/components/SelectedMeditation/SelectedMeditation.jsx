import React from 'react'

import './SelectedMeditation.css'

const SelectedMeditation = ({medit}) => {
    return (
        <div>
            <h4>{medit.title}</h4>
            <iframe src={medit.iframeSrc}
            style={{borderRadius: medit.iframeStyle}} 
            width={medit.iframeWidth}
            height={medit.iframeHeight}
            allow={medit.iframeAllow}
            oading={medit.iframeLoading}></iframe>
        </div>
    )
}

export default SelectedMeditation