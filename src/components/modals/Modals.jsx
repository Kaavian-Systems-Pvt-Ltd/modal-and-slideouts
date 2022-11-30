import React from "react";
import './style.css'

export const Modal = ({visibility,size,mode,Content, positive,negative}) =>{
    return (
        <div className="overlay" style={{visibility}}>
            <div className={`modal--${size}`}>
                <div className="modalHeader">
                    <h2>Modal header</h2>
                </div>
                <div className="modalBody">
                    <div className="modalContent">
                      <Content /> 
                    </div>
                    <div className="modalButton">
                        <button className="btn positive" onClick={positive}>Ok</button>
                        {mode==='alert' ? <button className="btn negative" onClick={negative}>Cancle</button>: null}
                    </div>
                </div>
            </div>
        </div>
    );
}