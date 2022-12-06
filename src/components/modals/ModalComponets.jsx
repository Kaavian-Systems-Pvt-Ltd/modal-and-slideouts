import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircleOutline , ErrorOutline , WarningAmberRounded } from '@mui/icons-material'; 
import { Icon } from '@iconify/react';

import './style.css';

export const ModalHeader = ({ title , mode })=> {     
    const SecurityAlertModeHeader = ()=> {
        return (
            <div className='alert--security'>
                <Icon icon='ri:shield-keyhole-line' className='security-icon' />
                <h2>{title}</h2>
            </div>
        );
    };
    return (
        <div className='modalHeader'>
            {mode === 'alert--success' ? <CheckCircleOutline  className='alert--success' sx={{ 'fontSize' : 50 }}/> : null }
            {mode === 'alert--error' ? <ErrorOutline  className='alert--error' sx={{ 'fontSize' : 50 }}/> : null }
            {mode === 'alert--warn' ? <WarningAmberRounded  className='alert--warn' sx={{ 'fontSize' : 50 }} /> : null }
            {mode === 'alert--security' ? <SecurityAlertModeHeader /> : null }
            {mode === 'info' || mode === 'normal' ? <h2>{title}</h2> : null }
            
        </div>
    );
};

ModalHeader.propTypes = {
    'title' : PropTypes.string.isRequired ,
    'mode' : PropTypes.string.isRequired
};

export const ModalButton =  ({ mode , onPositive , onNegative })=> {  
    // validate mode and give class by that
    const validateMode = [ 'normal' , 'alert--security' ].includes (mode , 0);
    const switchNegative = validateMode ? true : false; 
    return(
        <div className={[ 'modalButton' , `${mode}--btn` , `modal--${mode.split ('-')[0]}--btn`  ].join (' ')}>
            { mode === 'info' ? null : <><button className='btn positive' onClick={onPositive?.onClick}>{onPositive?.label}</button>
                { switchNegative ? <button className='btn negative' onClick={onNegative?.onClick}>{onNegative?.label}</button> : null}
                </>
            }
        </div>
    );
};

ModalButton.propTypes = {
    'mode' : PropTypes.string.isRequired ,
    'onPositive' : PropTypes.shape ({ 
        'label' : PropTypes.string.isRequired , 
        'onClick' : PropTypes.func.isRequired 
    }).isRequired ,
    'onNegative' : PropTypes.shape ({ 
        'label' : PropTypes.string.isRequired , 
        'onClick' : PropTypes.func.isRequired 
    })
};