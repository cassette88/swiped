import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views';
import './Swipe.css'
import A from './A';
import B from './B';
import C from './C';


export default class Swipe extends Component {
    render() {
        return (
            
            <SwipeableViews enableMouseEvents resistance>
               <div> <h3 className="fade-in">Slide #1</h3></div>
               <div><h3> Slide #2</h3></div>
               <div><h3 className="fade-in">Slide #3 </h3></div>
               <A></A>
               <div><B/></div>
               <div><C/></div>
            </SwipeableViews>
           
        )
    }
}
