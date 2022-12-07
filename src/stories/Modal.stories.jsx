import React , { useState } from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import { Modal } from '../../dist/index';

const stories = storiesOf ('Modal' , module);

const ModalSkeleton = ({ modalProbs , clickHandler , msg })=> {
    
    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    return(
            <div className='container'>
                    <button onClick={clickHandler}> clik to view modal {modalProbs.visibility}</button>
                    <h2>{msg}</h2>
                    <Modal Body={Content} {...modalProbs}/>
            </div>
    );
};

ModalSkeleton.propTypes = {
    'modalProbs' : PropTypes.object.isRequired , 
    'clickHandler' : PropTypes.func.isRequired , 
    'msg' : PropTypes.string.isRequired
};

// Use Cases

stories.add ('default' , ()=> {
    const [ status , setStatus ] = useState ('hidden');

    const clickHandler = ()=> {
        setStatus ('visible'); 
    };
    return (
        <div className='container'>
            <button onClick={clickHandler}> clik to view modal</button>
            <Modal visibility={status}/>
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
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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

    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert--success' ,
        'Body' : Content , 
        'onPositive' : {
            'label' : 'OK' ,
            'onClick' : onPositive
        } 
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert--error' ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert--warn' ,
        'onPositive' : {
            'label' : 'Okay' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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

    const modalProbs = {
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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

    const modalProbs = {
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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

    const modalProbs = {
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
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
        'visibility' : status ,
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
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
});