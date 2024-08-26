import React from 'react'

const SelectedMeditation = ({medit}) => {
    return (
        <div>
            <h4>{medit.title}</h4>
            <iframe src={`${medit.iframeSrc}`} 
            style={`${medit.iframeStyle}`} 
            width={`${medit.iframeWidth}`} 
            height={`${medit.iframeHeight}`}
            allow={`${medit.iframeAllow}`}
            oading={`${medit.iframeLoading}`}></iframe>
        </div>
    )
}

export default SelectedMeditation