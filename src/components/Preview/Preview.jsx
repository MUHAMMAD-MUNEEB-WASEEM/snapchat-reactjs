import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { resetCameraImage } from '../../features/cameraSlice'
import './Preview.css'
import { v4 as uuid } from 'uuid'
import { db, storage } from '../../firebase'
import firebase from 'firebase'

function Preview() {

    const cameraImage = useSelector(state=>state.camera.cameraImage)
    const dispatch = useDispatch()

    const history = useHistory()
    

    useEffect(()=>{
        if (!cameraImage) {
            history.replace('/')
        }

    },[cameraImage, history])
    
    const closePreview = () => {
        dispatch(resetCameraImage())
    }

    const sendPost = () => {
        const id = uuid();

        const uploadTask = storage
            .ref(`posts/${id}`)
            .putString(cameraImage, "data_url");

        uploadTask.on(
            "state_changed", 
            null, 
            (error)=>{
            //ERror function
            console.log(error)
        },
        ()=>{
            //complete function
            storage
            .ref(`posts`)
            .child(id)
            .getDownloadURL()
            .then((url)=>{
                db.collection('posts').add({
                    imageUrl:url,
                    username:'Muneeb',
                    read: false,
                    //profilePic,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
                history.replace('/chats');
            })
        }
    )
}

    return (
        <div className="preview">
            <Close onClick={closePreview} className="preview__close"/>
            <div className="preview__toolbarRight">
                <TextFields/>
                <Create/>
                <Note/>
                <MusicNote/>
                <AttachFile/>
                <Crop/>
                <Timer/>
            </div>
            <img src={cameraImage} alt="preview img"/>
            <div onClick={sendPost} className="preview__footer">
                <h2>Send Now</h2>
                <Send className="preview__sendIcon"/>
            </div>
        </div>
    )
}

export default Preview
