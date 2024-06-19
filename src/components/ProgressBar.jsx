const ProgressBar = ({ progress }) => {
    
    return (
        <div className='progressbar'>
            <div className='progressbar_progress' style={{width: `${progress}%`}}></div>
        </div>
    )
}

export default ProgressBar