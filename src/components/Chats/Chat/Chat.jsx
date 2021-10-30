import { Avatar } from '@material-ui/core'
import { StopRounded } from '@material-ui/icons'
import ReactTimeago from 'react-timeago'
import './Chat.css'
function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
    
    const open = () => {
        
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
