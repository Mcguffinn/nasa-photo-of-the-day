import React from "react";

const AppContent = props =>{

    const style = {
        'position': 'fixed',
        'top': 0, 
        'left': 0,
        'minWidth': '100%',
        'minHeight': '100%',
        'zIndex': '-1',
    }

    console.log(props)
    // const isVideo = props.image.includes('video')
    
    return (
        <div className="nasa-constainer" key={props.id}>

            
            <div className="hero" style={style}>
                if (props.image.includes('img'))
                    {
                        <img src = {props.image} style= {style} alt={props.title}/>          
                    }
                else (){
                    <video src = {props.image} style= {style} alt={props.title}/>
                }
                
            </div>

            <div className='top-content'>
                <h1>Random Space!</h1>
                <p>Explore space and time!</p>
            </div>

            <div className="middle-content">
                <h1>{props.title}</h1>
                    <h2>{props.date}</h2>   
            </div>

            <div className="lower-content">
                <p>{props.explanation}</p>
            </div>
                        
        </div>
    );
    
}

export default AppContent;