import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import Fade from 'react-reveal/Fade';
import './Swipe.css'


export default class Swipe extends Component {
    render() {
        return (
            
            <SwipeableViews enableMouseEvents resistance>
               <div> <h3 className="fade-in">Slide #1</h3></div>
               <div><h3> Slide #2</h3></div>
               <div><h3 className="fade-in">Slide #3 </h3></div>
            </SwipeableViews>
           
        )
    }
}
