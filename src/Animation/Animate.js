// eslint-disable-next-line no-unused-vars
import { animate } from "framer-motion"

export const SlideUp = (delay)=>{
    return{
        initial:{
            y:50,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay,
            }
        }
    }
}


export const SlideLeft = (delay)=>{
    return{
        initial:{
            x:50,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay,
            }
        }
    }
}