import React  from 'react';
import PropTypes from 'prop-types';
import { CloseRounded } from '@mui/icons-material';

import './style.css';

/**
 * Slideouts component
 * @param {object} props
 * @param {string} props.visibility => ('hidden' || 'visible') - defines Slideouts visibility
 * @param {string} props.title => text - Slideouts's Title
 * @param {Function} props.Body => JSX component - Slideouts's Body Content
 * @param {string} props.size => ( small || medium || large ) - Slideouts's width size
 * @returns slideout 
 */
export const Slideouts = (props)=> {
    // const [ show , setShow ] = useState ('hidden');


    const slideInMethod = ()=> {
        let slideIn = document.getElementById ('slideout');
        let slideHide = document.getElementById ('slideout-root');
        let outerClick = document.getElementById ('outer-click');

        if(slideIn.classList.contains (`slide-in-${props.size}`) 
            && slideHide.classList.contains ('slide-hide')  ){

            slideIn.classList.remove (`slide-in-${props.size}`);
            slideHide.classList.remove ('slide-hide');
            // outerClick.classList.remove ('outer-click-close');
            return;

        }
        
        slideIn.classList.add (`slide-in-${props.size}`);
        slideHide.classList.add ('slide-hide');
        outerClick.style.height = '0vh';
        return;
    };

    return(
        <div className='overlay' id='slideout-root'  style={{ 'visibility' : props.visibility }}>
            <div id='outer-click' onClick={slideInMethod}></div>
            <div id='slideout' className={[ 'slideouts' , `slideouts--${props.size}` ].join (' ')}>
                <button className='slideouts-exit' onClick ={slideInMethod} ><CloseRounded /></button>
                <div className='slideouts-header'>
                    <h2>{props.title}</h2>
                </div>
                <div className='slideouts-body'>
                    <props.Body />
                </div>
            </div>

        </div>
    );
};

Slideouts.propTypes = {
    'visibility' : PropTypes.string.isRequired ,
    'title' : PropTypes.string.isRequired ,
    'Body' : PropTypes.func.isRequired ,
    'size' : PropTypes.string.isRequired
};

Slideouts.defaultProps = {
    'visiblity' : 'hidden' ,
    'title' : 'Slideouts' ,
    'body' : ()=> {
        return(<p>Nothing here</p>);
    } ,
    'size' : 'small'
};