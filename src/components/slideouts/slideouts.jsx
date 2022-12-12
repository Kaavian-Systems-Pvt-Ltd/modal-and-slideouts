import React , { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import { CloseRounded } from '@mui/icons-material';

import './style.css';

/**
 * Slideouts component
 * @param {object} props
 * @param {string} props.visibility => ('hidden' || 'visible') - defines Slideouts visibility
 * @param {Function} props.closeSlideOut => method - makes action to close Slideouts
 * @param {string} props.title => text - Slideouts's Title
 * @param {Function} props.Body => JSX component - Slideouts's Body Content
 * @param {string} props.size => ( small || medium || large ) - Slideouts's width size
 * @returns slideout 
 */
export const Slideouts = (props)=> {
    const [ show , setShow ] = useState (false);

    const slideOutMethod = ()=> {
        setShow (true);
        if(show){
            let slideOut = document.getElementById ('slideout');
            let slideShow = document.getElementById ('slideout-root');
            let outerClick = document.getElementById ('outer-click');
            
            if(slideOut.classList.contains (`slide-in-${props.size}`) 
                && slideShow.classList.contains ('slide-hide') ){

                slideOut.classList.remove (`slide-in-${props.size}`);
                slideShow.classList.remove ('slide-hide');
                // outerClick.classList.remove ('outer-click-close');
            }

            if(slideOut.classList.contains (`slide-out-${props.size}`)){
                slideOut.classList.remove (`slide-out-${props.size}`);
            }

            slideOut.classList.add (`slide-out-${props.size}`);
            outerClick.classList.add ('outer-click');
        }
         
    };
    const slideInMethod = ()=> {
        let slideIn = document.getElementById ('slideout');
        let slideHide = document.getElementById ('slideout-root');

        if(show){

            if(slideIn.classList.contains (`slide-out-${props.size}`)){
                slideIn.classList.remove (`slide-out-${props.size}`);
            }
    
            if(slideIn.classList.contains (`slide-in-${props.size}`) 
                && slideHide.classList.contains ('slide-hide') ){
    
                slideIn.classList.remove (`slide-in-${props.size}`);
                slideHide.classList.remove ('slide-hide');
    
            }
            
            slideIn.classList.add (`slide-in-${props.size}`);
            slideHide.classList.add ('slide-hide');
            setTimeout (()=> {
                setShow (false);
            } , 2000);
        }    
     
    };

    useEffect (()=> {
        if(props.visibility === 'visible'){
            slideOutMethod ();
        } else{
           slideInMethod ();
        }
    } , [ [ props.visibility ] ]);

    // style={{ 'visibility' : show }}

    return(
       <div>{props.visibility}
            {show 
            ? <div className='overlay' id='slideout-root' >
                
                <div id='outer-click' onClick={props.closeSlideOut}></div>
                <div id='slideout' className={[ 'slideouts' , `slideouts--${props.size}` ].join (' ')}>
                    <button className='slideouts-exit' onClick ={props.closeSlideOut} ><CloseRounded /></button>
                    <div className='slideouts-header'>
                        <h2>{props.title}</h2>
                    </div>
                    <div className='slideouts-body'>
                        <props.Body />
                    </div>
                </div>

            </div> : null}
        </div>
    );
};

Slideouts.propTypes = {
    'visibility' : PropTypes.string.isRequired ,
    'closeSlideOut' : PropTypes.func.isRequired ,
    'title' : PropTypes.string.isRequired ,
    'Body' : PropTypes.func.isRequired ,
    'size' : PropTypes.string.isRequired
};

Slideouts.defaultProps = {
    'visiblity' : 'hidden' ,
    'closeSlideOut' : undefined ,
    'title' : 'Slideouts' ,
    'body' : ()=> {
        return(<p>Nothing here</p>);
    } ,
    'size' : 'small'
};