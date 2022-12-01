import React from "react";
import './style.css'

/**
 * @typedef {object} positive
 * @property {string} label => button Label
 * @property {function} action => button action
 */
/**
 * @typedef {object} negative
 * @property {string} label => button Label
 * @property {function} action => button action
 */

/**
 * @typedef {object} modalProps
 * @property {string} visibility => ('hidden' || 'visible') - defines modal visibility
 * @property {string} size => ('small' || 'medium' || 'large') - defines Modal size
 * @property {string} mode => ('simple' || 'alert') - defines modal mode
 * @property {string} header => text - modal heading
 * @property {Component}  Body => components  - modal body content
 * @property {positive} positive => Button - { label, action } two props - modal sucessfull action  
 * @property {negative}  negative => Button - { label, action } two props  - modal revert action 
 */

/**
 * 
 * @param {modalProps} object
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

// @param  visibility => ('hidden' || 'visible')
//  * @param  {string} size => ('small' || 'medium' || 'large') - defines Modal size
//  * @param  mode => ('simple' || 'alert')
//  * @param  header => text
//  * @param  Body => components 
//  * @param  positive => Button - {label, action} two props  
//  * @param  negative => Button - {label, action} two props  