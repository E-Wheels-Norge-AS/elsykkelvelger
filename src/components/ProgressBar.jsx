import React, { useState } from 'react'

const ProgressBar = () => {
    const [progressWidth, setProgressWidth] = useState(10) 

    return (
        <div className='progressBar'>
            <div className='progress' style={{width: progressWidth + "%"}}></div>
        </div>
    )
}

export default ProgressBar