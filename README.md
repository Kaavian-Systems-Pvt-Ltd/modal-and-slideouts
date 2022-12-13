# modal-and-slideouts

## Note
    You have to install python in your local to use this package.
    Or Please note that the official [Node.js for Windows installer](https://nodejs.org/en/download) can now automatically install the required tools. 
##  Installation
>#### To install
    > npm i --save-dev https://github.com/Kaavian-Systems-Pvt-Ltd/modal-and-slideouts.git
>#### If have peerDependencies problem install this
    > npm i --save-dev @emotion/react @emotion/styled @iconify/react @mui/icons-material @mui/material
## Documentation
    This module has two Components
        - Modal
        - Slideouts
> ### Modal
>> #### Overview
        Modal has 3 variants are info, normal, alert
        - info
            -- Simple modal used for just showing information.
        - normal 
            -- Used for showing information with user action.
            -- Normally, have two button. onPositiveis required.
            -- has three different size small, medium, large.
        - alert 
            -- Used to alert users
            -- It have one button (onPositive), default size.
            -- Has four different submode like success, error, warn, security 
>> #### This Component have 8 props
        - show => String ('hidden' || 'visible') - defines modal visibility
        - close => method - makes action to close modal
        - size => String ('small' || 'medium' || 'large') - defines Modal size
        - mode => String ('info' || 'normal' ||'alert--${subMode}' [submode => success,error,warn,security]) - defines modal mode
        - title => String - modal heading
        - Body => Component  - modal body content
        - onPositive => Object { label, onClick } two props - modal sucessfull action
        - onNegative => Object { label, onClick } two props  - modal revert action 
        - label => button's label   
        - onClick => button's method
>> #### Examples
    import React , { useState } from 'react';
    import { Modal } from '@kaavian-sys/modal-and-slideouts';

    const App = ()=> {
        const [ status , setStatus ] = useState ('hidden');

        const clickHandler = ()=> {
            setStatus ('visible'); 
        };

        const exitModal = ()=> {
            setStatus ('hidden');
        };
        return (
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal</button>
                <Modal show={status} close={exitModal}/>
            </div>
        );
    }
> ### Slideouts
>> #### Overview
        Slideouts has three different size small, medium, large.
>> #### This Component have 5 props
        - show => String ('hidden' || 'visible') - defines Slideouts visibility
        - close => method - makes action to close modal
        - size => String ('small' || 'medium' || 'large') - defines Slideouts size
        - title => String - Slideouts heading
        - Body => Component  - Slideouts body content
>> #### Examples
    import React , { useState } from 'react';
    import { Slideouts } from '@kaavian-sys/modal-and-slideouts';

    const App = ()=> {
        const [ status , setStatus ] = useState ('hidden');

        const clickHandler = ()=> {
            setStatus ('visible'); 
        };

        const exitModal = ()=> {
            setStatus ('hidden');
        };
        return (
            <div className='container'>
                <button onClick={clickHandler}> clik to view Slideouts</button>
                <Slideouts show={status} close={exitModal}/>
            </div>
        );
    }

## Demo 
    Click here : https://www.chromatic.com/build?appId=638f63c9f57e8fc27f60d14e&number=9