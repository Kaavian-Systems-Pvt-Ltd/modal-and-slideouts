import React , { useState , useEffect } from 'react';
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
    const [ show , setShow ] = useState ('hidden');

    useEffect (()=> {
        setShow (props.visibility);
    } , [ props.visibility ]);

    const exitModal = ()=> {
       setShow ('hidden');
       window.location.reload ();
        return;
    };

    return(
        <div className='overlay' style={{ 'visibility' : show }}>
            <div className={[ 'slideouts' , `slideouts--${props.size}` ].join (' ')}>
                <button className='slideouts-exit' onClick ={exitModal} ><CloseRounded /></button>
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