import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { ModalButton , ModalHeader } from './ModalComponets';

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
 * @property {string} mode => ('info' || 'normal' ||'alert--${subMode}' [submode => success,error,warn,security]) - defines modal mode
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

export const Modal = ({ visibility , size , mode , title , Body , onPositive , onNegative })=> 
{
  // split prefix string of mode
  const style = mode.split ('-'); 
  // gives class name by mode
  const variant = style[0] === 'normal' ? `modal--${style[0]}--${size}` : `modal--${style[0]}`;
  return (
      <div className='overlay' style={{ visibility }}>
          <div className={[ variant , `modal--${mode}` , 'modal' ].join (' ')}>
              <ModalHeader title ={title} mode={mode} />
              <div className='modalBody'>
                  <div className='modalContent'>
                    <Body /> 
                  </div>
                  <ModalButton mode={mode} onPositive={onPositive} onNegative={onNegative} />
              </div>
          </div>
      </div>
  );
};

Modal.propTypes = {
    'visibility' : PropTypes.string.isRequired ,
    'size' : PropTypes.string.isRequired ,
    'mode' : PropTypes.string.isRequired ,
    'title' : PropTypes.func.isRequired ,
    'Body' : PropTypes.func.isRequired ,
    'onPositive' : PropTypes.object.isRequired ,
    'onNegative' : PropTypes.object
};