import { Avatar } from '@material-ui/core'
import { StopRounded } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import ReactTimeago from 'react-timeago'
import { selectImage } from '../../../features/appSlice'
import './Chat.css'
import db from '../../../firebase'
import { useHistory } from 'react-router'


function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
    
    const dispatch = useDispatch();
    const history = useHistory()

    const open = () => {
        if (!read){
            dispatch(selectImage(imageUrl))
            db.collection('posts').doc(id).set({
                read: true,
            }, { merge: true });

            history.push('/chats/view');
        }
    }

    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic}/>
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
            </div>
            {!read && <StopRounded className="chat__readIcon"/>}
        </div>
    )
}

export default Chat
