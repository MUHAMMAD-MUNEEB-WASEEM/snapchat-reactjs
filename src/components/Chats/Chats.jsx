import { Avatar } from '@material-ui/core'
import { ChatBubble, Search } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { db } from '../../firebase';
import Chat from './Chat/Chat';
import './Chats.css'

function Chats() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot=>setPosts(snapshot.docs.map((doc)=>(
            {
                id: doc.id,
                data: doc.data(),
            }
        ))))
    }, [])

    return (
        <div className="chats">
            <div className="chats__header">
               <Avatar className="chats__avatar"/>
               <div className="chats__search">
                    <Search/>   
                    <input placeholder="Friends" type="text"/>
                </div> 
                <ChatBubble className="chats__chatIcon"/>
            </div>

            <div className="chats__posts">
                 {posts.map((post)=>(
                     <Chat
                        key = {post.id}
                        id = {post.id}
                        username = {post.data.username}
                        timestamp = {post.data.timestamp}
                        imageUrl = {post.data.imageUrl}
                        read = {post.data.read}
                        profilePic = {post.data.profilePic}
                    />
                 ))}
            </div>


        </div>
    )
}

export default Chats
