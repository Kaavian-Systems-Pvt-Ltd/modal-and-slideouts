import React , { useState } from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import { Modal } from '../../dist/index';

const stories = storiesOf ('Modal' , module);
// Use Cases

stories.add ('default' , ()=> {
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
            <Modal show={status} mode='alert' close={exitModal}/>
        </div>
    );
});

stories.add ('Info Modal' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };
    const exitModal = ()=> {
        setStatus ('hidden');
    };
    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };
    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };
    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'info' ,
        'size' : 'small' ,
        'title' : 'Information' ,
        'Body' : Content ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal {...modalProbs}/>
            </div>
    );
});

stories.add ('Alert Success' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible');
        return; 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'alert--success' ,
        'onPositive' : {
            'label' : 'OK' ,
            'onClick' : onPositive
        } 
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal Body={Content} {...modalProbs}/>
            </div>
    );
});

stories.add ('Alert Error' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'mode' : 'alert--error' ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal Body={Content} {...modalProbs}/>
            </div>
    );
});
stories.add ('Alert Warning' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'alert--warn' ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal Body={Content} {...modalProbs}/>
            </div>
    );
});
stories.add ('Alert Security' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'alert--security' ,
        'title' : 'Alert Security' ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        } ,
        'onNegative' : {
            'label' : 'Cancle' ,
            'onClick' : ()=> setStatus ('hidden')
        } 
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal Body={Content} {...modalProbs}/>
            </div>
    );
});

stories.add ('Normal small' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'normal' ,
        'size' : 'small' ,
        'title' : 'Normal Small' ,
        'onPositive' : {
            'label' : 'Okey' ,
            'onClick' : onPositive
        } ,
        'onNegative' : {
            'label' : 'Cancle' ,
            'onClick' : ()=> setStatus ('hidden')
        } 
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal Body={Content} {...modalProbs}/>
            </div>
    );
});

stories.add ('Normal medium' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'normal' ,
        'size' : 'medium' ,
        'title' : 'Noraml Medium' ,
        'Body' : Content ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        } ,
        'onNegative' : {
            'label' : 'Cancle' ,
            'onClick' : ()=> setStatus ('hidden')
        } 
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal {...modalProbs}/>
            </div>
    );
});

stories.add ('Normal Large' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'normal' ,
        'size' : 'large' ,
        'title' : 'Normal Large' ,
        'Body' : Content ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        } ,
        'onNegative' : {
            'label' : 'Cancel' ,
            'onClick' : ()=> setStatus ('hidden')
        } 
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal {...modalProbs}/>
            </div>
    );
});

stories.add ('Normal small single Button' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'normal' ,
        'size' : 'small' ,
        'title' : 'Normal Small' ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        } 
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal Body={Content} {...modalProbs}/>
            </div>
    );
});

stories.add ('Normal medium single Button' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'normal' ,
        'size' : 'medium' ,
        'title' : 'Noraml Medium' ,
        'Body' : Content ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        } 
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal {...modalProbs}/>
            </div>
    );
});

stories.add ('Normal Large Single button ' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const exitModal = ()=> {
        setStatus ('hidden');
    };

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. 
            </p>
        );
    };

    const modalProbs = {
        'show' : status ,
        'close' : exitModal ,
        'mode' : 'normal' ,
        'size' : 'large' ,
        'title' : 'Normal Large' ,
        'Body' : Content ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <button onClick={clickHandler}> clik to view modal {modalProbs.show}</button>
                <h2>{msg}</h2>
                <Modal {...modalProbs}/>
            </div>
    );
});