import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { auth, provider } from '../../firebase'
import './Login.css'
import login from '../../features/appSlice'

function Login() {

    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result)
                dispatch(login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid
                })
                )
            })
            .catch(error=> alert(error))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="snapchat_img"/>
                <Button onClick={signIn} variant="outlined">Sign in</Button>
            </div>
        </div>
    )
}

export default Login
