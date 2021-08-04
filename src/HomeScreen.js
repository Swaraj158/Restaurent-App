import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import  { useHistory } from 'react-router-dom'
import './HomeScreen.css'

export default function HomeScreen(){

    const history = useHistory()

    function seafood(){
        return(
            history.push("/seafood")
        )
    }

    return(
        <div className="container" >
            <div className="cont">
                <div className="row colss">
                    <div className="col-8">
                        <img className="picture" src="https://quotefancy.com/media/wallpaper/3840x2160/1667686-Kevin-Steele-Quote-Seafood-makes-you-live-10-years-more.jpg"/>
                    </div>
                    <div className="col">
                        <div className="row justify-content-center content">
                            <h2>Explore our Seafood Menu!</h2>
                            <button className="btn btn-outline-warning btn-lg" onClick={seafood}>Seafood Menu</button>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        )
}