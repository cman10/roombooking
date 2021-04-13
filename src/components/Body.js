import React from 'react';
import classes from './Body.css'
// import adultIcon from '../src/assets/images/groupIcon.png'
import bedIcon from '../../src/assets/images/bedIcon.png'
import childIcon from '../../src/assets/images/childIcon.png'
import plusIcon from '../../src/assets/images/plusIcon.png'
import minusIcon from '../../src/assets/images/minusIcon.png'
import adultIcon from '../../src/assets/images/adultIcon.png'

class Body extends React.Component{

    state={
        rooms:1,
        adults:1,
        childern:0
    }

    increaseAdult(){
        let{rooms,adults,children}=this.state;
        adults=adults+1;

        this.setState({
            rooms,
            adults,
            children
          });


    }

    increaseRooms=()=>{
        let{rooms,adults,children}=this.state;
        rooms=rooms+1;
        if(rooms>5){
            return;
        }

        this.setState({
            rooms,
            adults,
            children
          });
    }
    decreaseRooms=()=>{
        let{rooms,adults,children}=this.state;
        rooms=rooms-1;
        if(rooms<1){
            return;
        }

        this.setState({
            rooms,
            adults,
            children
          });
        
    }
    increaseAdults=()=>{
        let{rooms,adults,children}=this.state;
        adults=adults+1;
        if(adults>5){
            return;
        }

        this.setState({
            rooms,
            adults,
            children
          });
    }
    decreaseAdults=()=>{
        let{rooms,adults,children}=this.state;
        adults=adults-1;
        if(children<0){
            return;
        }

        this.setState({
            rooms,
            adults,
            children
          });
    }
    increaseChildren=()=>{
        let{rooms,adults,children}=this.state;
        children=children+1;
        if(children>5){
            return;
        }

        this.setState({
            rooms,
            adults,
            children
          });
    }
    decreaseChildren=()=>{
        let{rooms,adults,children}=this.state;
        children=children-1;
        if(children<0){
            return;
        }

        this.setState({
            rooms,
            adults,
            children
          });
    }

    render(){
    let {
        state: { rooms, adults, children },
        increaseRooms,
        decreaseRooms,
        increaseAdults,
        decreaseAdults,
        increaseChildren,
        decreaseChildren
    }=this;
    return(<div className="bordertab">

        <div className="outer">
            <img src={bedIcon} alt="ss"></img>
            <span className="right">ROOMS</span>
            <img src={minusIcon} alt="minus" onClick={decreaseRooms}></img>
            <span className="number">{rooms}</span>
            <img src={plusIcon} alt="plus" onClick={increaseRooms}></img>
           
        </div>

        <div className="outer">
            <img src={adultIcon} alt="ss"></img>
            <span className="right" >ADULTS</span>
            <img src={minusIcon} alt="minus" onClick={decreaseAdults}></img>
            <span className="number"> {adults}</span>
            <img src={plusIcon} alt="plus" onClick={increaseAdults}></img>
            
        </div>
        <div className="outer">
            <img src={childIcon} alt="ss"></img>
            <span className="right">CHILDREN</span>
            <img src={minusIcon} alt="minus" onClick={decreaseChildren}></img>
            <span  className="number"> {children}</span>
            <img src={plusIcon} alt="plus" onClick={increaseChildren}></img>
           
        </div>
      
    </div>);
}
}

export default Body;
