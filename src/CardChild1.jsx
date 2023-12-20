import React,{Component} from 'react';

class CardChild1 extends Component{
    render(){
        return(
            <>
            <div className='app-container'>
                <div className='app-head'>
                    <h1> <span className='initials'>JS</span> React Props Card</h1>
                </div>
                <div className='app-body'>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description} <span>{this.props.children}</span></p>

                </div>
            </div>
            </>
        );
    }
}

export default CardChild1;