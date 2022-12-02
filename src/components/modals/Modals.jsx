import React from "react";
import './style.css'

/**
 * @typedef {object} onPositive
 * @property {string} label => button Label
 * @property {function} onClick => button action
 */
/**
 * @typedef {object} onNegative
 * @property {string} label => button Label
 * @property {function} onClick => button action
 */

/**
 * @typedef {object} modalProps
 * @property {string} visibility => ('hidden' || 'visible') - defines modal visibility
 * @property {string} size => ('small' || 'medium' || 'large') - defines Modal size
 * @property {string} mode => ('simple' || 'alert') - defines modal mode
 * @property {string} header => text - modal heading
 * @property {Component}  Body => components  - modal body content
 * @property {onPositive} onPositive => Button - { label, onClick } two props - modal sucessfull action  
 * @property {onNegative}  onNegative => Button - { label, onClick } two props  - modal revert action 
 */

/**
 * 
 * @param {modalProps} object
 * @returns Modal
 */

export const Modal = ({visibility, size, mode, header, Body, onPositive, onNegative}) =>{
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
                        <button className="btn positive" onClick={onPositive?.onClick}>{onPositive?.label}</button>
                        {mode==='alert' ? <button className="btn negative" onClick={onNegative?.onClick}>{onNegative?.label}</button>: null}
                    </div>
                </div>
            </div>
        </div>
    );
}
