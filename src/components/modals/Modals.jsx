import React , { useState , useEffect  } from 'react';
import PropTypes from 'prop-types';
import { HighlightOff  } from '@mui/icons-material';

import './style.css';
import { ModalButton , ModalHeader } from './ModalUtils';

/**
 * Modal Component
 * @param  {Object} props
 * @param {string} props.show => ('hidden' || 'visible') - defines modal visibility
 * @param {Function} props.close => method - makes action to close modal
 * @param {string} props.size => ('small' || 'medium' || 'large') - defines Modal size
 * @param {string} props.mode => ('info' || 'normal' ||'alert--${subMode}' [submode => success,error,warn,security]) - defines modal mode
 * @param {string} props.title => text - modal heading
 * @param {Function} props.Body => components  - modal body content
 * @param {object} props.onPositive => Button - { label, onClick } two props - modal sucessfull action 
 * @param {string} props.onPositive.label => positive button's label 
 * @param {function} props.onPositive.onClick => positive button's method  
 * @param {object}  props.onNegative => Button - { label, onClick } two props  - modal revert action   
 * @param {string} props.onNegative.label => Negative button's label 
 * @param {function} props.onNegative.onClick => Negative button's method 
 * @returns Modal
 */

export const Modal = (props)=> {
  const [ show , setShow ] = useState (false);

  useEffect (()=> {
    if(props.show === 'visible') setShow (true);
    else setShow (false);
  } , [ props.show ]);

  const validateMode = props.mode === 'alert' ? 'alert--success' : props.mode;
  // validate onNegative object and give class by that
  const isNegativeHasProps = Object.keys (props.onNegative).length !== 2 && props.mode === 'normal' ? 'modal--single-btn' : null; 
  // split prefix string of mode
  const style = props.mode.split ('-'); 
  // gives class name by mode
  const variant = style[0] === 'normal' ? `modal--${style[0]}--${props.size}` : `modal--${style[0]}`;

  return (
   <div>
      {show 
        ? <div id={`modal-${show}`} className={[ 'overlay' , isNegativeHasProps ].join (' ')} >
            <div className={[ variant , 'modal' , `modal--${validateMode}` ].join (' ')}>
              <button  className='exit' onClick={props.close}><HighlightOff /></button> 
              <ModalHeader title ={props.title} mode={validateMode} />
              <div className='modalBody'>
                  <div className='modalContent'>
                    <props.Body /> 
                  </div>
                  <ModalButton mode={validateMode} onPositive={props.onPositive} onNegative={props.onNegative} />
              </div>
            </div>
          </div> 
      : null}
   </div>
  );
};

Modal.propTypes = {
    'show' : PropTypes.string.isRequired ,
    'close' : PropTypes.func.isRequired ,
    'size' : PropTypes.string.isRequired ,
    'mode' : PropTypes.string.isRequired ,
    'title' : PropTypes.func.isRequired ,
    'Body' : PropTypes.func.isRequired ,
    'onPositive' : PropTypes.object.isRequired ,
    'onNegative' : PropTypes.object
};

Modal.defaultProps = {
  'show' : 'hidden' ,
  'close' : undefined ,
  'size' : 'medium' ,
  'mode' : 'normal' ,
  'title' : 'No Title' ,
  'Body' : ()=> {
      return(<p>Nothing here</p>);
  } ,
  'onPositive' : {
     'label' : 'OK' ,
     'onclick' : undefined
  } ,
  'onNegative' : {}
};