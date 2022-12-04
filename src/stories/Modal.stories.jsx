import React , { useState } from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import { Modal } from '../components/modals';

const stories = storiesOf ('Modal' , module);

const ModalSkeleton = ({ modalProbs , clickHandler , msg })=> 
{
    const Content = ()=> 
    {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis 
                illum temporibus laudantium. Quaerat recusandae delectus suscipit, 
                asperiores molestias voluptatum corrupti modi velit. Maxime, assumenda! Nisi, officia dolore! 
            </p>
        );
    };

    return(
            <div className='container'>
                    <button onClick={clickHandler}> clik to view modal</button>
                    <h2>{msg}</h2>
                    <Modal Body={Content}{...modalProbs}/>
            </div>
    );
};

ModalSkeleton.propTypes = {
    'modalProbs' : PropTypes.object.isRequired , 
    'clickHandler' : PropTypes.func.isRequired , 
    'msg' : PropTypes.string.isRequired
};

// Use Cases

stories.add ('Info Modal' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
    {
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
    {
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'info' ,
        'size' : 'small' ,
        'title' : 'Simple Msg' ,
        'onPositive' : {
            'label' : 'Okey' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
});

stories.add ('Alert Success' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
{
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
{
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert--success' ,
        'onPositive' : {
            'label' : 'Okey' ,
            'onClick' : onPositive
        } 
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
});

stories.add ('Alert Error' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
{
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
{
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert--error' ,
        'onPositive' : {
            'label' : 'Okey' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
});
stories.add ('Alert Warning' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
{
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
{
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert--warn' ,
        'onPositive' : {
            'label' : 'Okey' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
});
stories.add ('Alert Security' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
{
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
{
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert--security' ,
        'title' : 'Alert Security' ,
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

stories.add ('Normal small' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
{
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
{
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

stories.add ('medium' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
{
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
{
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'simple' ,
        'size' : 'medium' ,
        'title' : 'Medium' ,
        'onPositive' : {
            'label' : 'Okey' ,
            'onClick' : onPositive
        }
    };
    return(
            <div className='container'>
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
});

stories.add ('Large' , ()=> 
{
    const [ status , setStatus ] = useState ('hidden');
    const [ msg , setMsg ] = useState ('');

    const clickHandler = ()=> 
{
        setMsg ('');
        setStatus ('visible'); 
    };

    const onPositive = ()=> 
{
        setMsg ('Operation Success');
        setStatus ('hidden');
    };

    const modalProbs = {
        'visibility' : status ,
        'mode' : 'alert' ,
        'size' : 'large' ,
        'title' : 'Large' ,
        'onPositive' : {
            'label' : 'Okey' ,
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