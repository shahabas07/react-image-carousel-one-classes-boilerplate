import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
class Carousel extends Component {
    constructor(){
        super()
        this.state={
            ind:0
        }
        this.next = this.next.bind(this)
    }
    
    next(){
        console.log("here",this)
        this.setState(()=>{
            return{
                ind: (this.state.ind!=images.length-1)?(this.state.ind + 1):(0)
            }
        })
    }
    previous(){
        console.log("here",this)
        this.setState(()=>{
            return{
                ind: (this.state.ind!=images.length-1)?(this.state.ind - 1):(0)
            }
        })
    }
    render(){
        return(
            <>
            <div className="body">
            <div className="container">
            <ArrowBackIosIcon className="leftarr" fontSize='large' onClick={this.previous}/>
            <h1  className="title-overlay ">{images[this.state.ind].title}</h1>
            <h1  className="subtitle-overlay ">{images[this.state.ind].subtitle}</h1>
            <div><img src={images[this.state.ind].img}/></div>
            <ArrowForwardIosIcon className="rightarr" fontSize='large' onClick={this.next}/>
            </div>
            </div>
            </>
        )
    }
    
}
export default Carousel;