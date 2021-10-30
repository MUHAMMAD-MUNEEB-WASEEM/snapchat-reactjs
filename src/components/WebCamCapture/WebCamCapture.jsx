import './WebCamCapture.css'
import Webcam from 'react-webcam'
import { useCallback, useRef, useState } from 'react'
import {RadioButtonUnchecked} from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { setCameraImage } from '../../features/cameraSlice'
import { useHistory } from 'react-router'

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
}

function WebCamCapture() {
    const webcamRef = useRef()
    
    const dispatch = useDispatch()
    const history = useHistory()

    const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot()
        dispatch(setCameraImage(imageSrc));
        history.push('/preview')
    }, [webcamRef])


    return (
        <div className="webcamCapture">
            
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <RadioButtonUnchecked 
                className="webcamcapture__button"
                onClick={capture}
                fontSize="large"
            />
        </div>
    )
}

export default WebCamCapture
