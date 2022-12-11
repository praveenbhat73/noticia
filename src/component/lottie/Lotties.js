import React from 'react';
import Lottie from 'react-lottie';
import animationData from './news.json';
import useStyles from "./styles"
const Lotties=()=>{
  const classes = useStyles();

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
        
        return (
          <div className={classes.lottie}> 
            <Lottie 
              options={defaultOptions}
              height={350}
              width={350}
            />
          </div>
        );
      
      
}
export default Lotties;