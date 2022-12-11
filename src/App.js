import React,{useEffect,useState}  from "react";
// import useAlan from "./Alan";
import NewsCards from "./component/NewsCards/NewsCards";
// import { useParams } from "react-router-dom";
import useStyles from "./styles"
import alanBtn from "@alan-ai/alan-sdk-web";
import Lotties from "./component/lottie/Lotties";

// By using useEffect Hook, you tell React that your component needs to do something after render. 
// React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. 
// In this effect, we set the document title, but we could also perform data fetching or call some other imperative API, directly updating DOM and timers
//by default it renders every time its updated
// useEffect(<function>, <dependency>)

const ALAN_API="7b4b95516f1619dfe2b8054f8a687d072e956eca572e1d8b807a3e2338fdd0dc/stage"
const App =()=>{

  //the alanbtn can be rendered like using useRef();-> alanbtnContainer=useRef(); and wrapping it at the end with div=ref{alanbtnConatiner}
  //for this alan.jsx file has to be created separately
const[newsArticles,setNewsArticles] = useState([])
const classes=useStyles();
    useEffect(()=>{
        // this is call back function
        alanBtn({
          key:ALAN_API,
          // Responsible for handling commands sent from the Alan voice script.
          // To accompany user’s utterances with activities in the app UI, you can send commands from the voice scripts to the client app.
          // this command is passsed as destructive paramter and used in if else condition
          // if that command is mapped then that function is executed 
          // destructuring is unpacking the values that is sent in array into distinct variables -> int r= a[1]; eg
 
          onCommand:({ command,articles })=>{
            if(command ==='newHeadlines'){
              // console.log(articles)
             setNewsArticles(articles)
            }
            
          }
        })
        
          },[])
           //this is dependecy array at what time it has to be updated
  //          const{newsArticles}=useParams();
  // const alanbtnConatiner=useRef();
  // useAlan();



  return (
    <>
      <div>
      <div style={{height:"68px",position:"fixed",width:"100%",zIndex:"1",background:"#0b011f",borderBottom:"1px solid black"}}>
          <h1 style={{color:"gray",textAlign:"center",fontFamily:"Roboto",fontWeight:"bold",textShadow:"1px 1px 1px white"}}>
          📰NOTICIA📰
          </h1>
      </div>
        <div className={classes.logoContainer}>
            {/* <img src="https://miro.medium.com/max/600/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" className={classes.alanLogo} alt="news" /> */}
            <Lotties className={classes.alanLogo}/>

        </div>
            <NewsCards articles={newsArticles}/>
      </div>
   
      {/* <div ref={alanbtnConatiner}/> */}
    </>
  )
}


export default App;