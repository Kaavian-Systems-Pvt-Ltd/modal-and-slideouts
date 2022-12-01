import React from "react";
import './style.css'

/**
 * 
 * @param {object} visibility => ('hidden' || 'visible')
 * @param  size => ('small' || 'medium' || 'large')
 * @param  mode => ('simple' || 'alert')
 * @param  header => text
 * @param  Body => components 
 * @param  positive => Button - {label, action} two props  
 * @param  negative => Button - {label, action} two props  
 * @returns Modal
 */

export const Modal = ({visibility, size, mode, header, Body, positive, negative}) =>{
   return (
        <div className="overlay" style={{visibility}}>
            <div className={`modal--${size}`}>
                <div className="modalHeader">
                    <h2>{header}</h2>
                </div>
                <div className="modalBody">
                    <div className="modalContent">
                      <Body /> 
                    </div>
                    <div className="modalButton">
                        <button className="btn positive" onClick={positive?.action}>{positive?.label}</button>
                        {mode==='alert' ? <button className="btn negative" onClick={negative?.action}>{negative?.label}</button>: null}
                    </div>
                </div>
            </div>
        </div>
    );
}