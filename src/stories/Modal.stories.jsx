import React,{useState} from "react";
import { storiesOf } from '@storybook/react';

import { Modal } from '../components/modals';

const stories = storiesOf('Modal', module);

const ModalSkeleton = ({modalProbs,clickHandler,msg}) =>{
    const Content = () =>{
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis 
                illum temporibus laudantium. Quaerat recusandae delectus suscipit, 
                asperiores molestias voluptatum corrupti modi velit. Maxime, assumenda! Nisi, officia dolore! 
            </p>
        );
    }

    return(
            <div className="container">
                    <button onClick={clickHandler}> clik to view modal</button>
                    <h2>{msg}</h2>
                    <Modal Body={Content}{...modalProbs}/>
            </div>
    );
}

// Use Cases

stories.add('Simple Msg', () =>{
    const [status, setStatus] = useState('hidden');
    const [msg, setMsg] = useState('');

    const clickHandler = () =>{
        setMsg('')
        setStatus('visible') 
    }

    const positive = () =>{
        setMsg('Operation Success');
        setStatus('hidden');
    }

    const modalProbs = {
        visibility:status,
        mode:'simple',
        size:'small',
        header:'Simple Msg',
        positive:{
            label    : 'Okey',
            action : positive
        }
    }
    return(
            <div className="container">
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
})

stories.add('Alert Msg', () =>{
    const [status, setStatus] = useState('hidden');
    const [msg, setMsg] = useState('');

    const clickHandler = () =>{
        setMsg('')
        setStatus('visible') 
    }

    const positive = () =>{
        setMsg('Operation Success');
        setStatus('hidden');
    }

    const modalProbs = {
        visibility:status,
        mode:'alert',
        size:'medium',
        header:'Alert Msg',
        positive:{
            label    : 'Okey',
            action : positive
        },
        negative :{
            label    : 'Cancle',
            action : () => setStatus('hidden')
        } 
    }
    return(
            <div className="container">
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
})

stories.add('small', () =>{
    const [status, setStatus] = useState('hidden');
    const [msg, setMsg] = useState('');

    const clickHandler = () =>{
        setMsg('')
        setStatus('visible') 
    }

    const positive = () =>{
        setMsg('Operation Success');
        setStatus('hidden');
    }

    const modalProbs = {
        visibility:status,
        mode:'alert',
        size:'small',
        header:'Small',
        positive:{
            label    : 'Okey',
            action : positive
        },
        negative :{
            label    : 'Cancle',
            action : () => setStatus('hidden')
        } 
    }
    return(
            <div className="container">
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
})

stories.add('medium', () =>{
    const [status, setStatus] = useState('hidden');
    const [msg, setMsg] = useState('');

    const clickHandler = () =>{
        setMsg('')
        setStatus('visible') 
    }

    const positive = () =>{
        setMsg('Operation Success');
        setStatus('hidden');
    }

    const modalProbs = {
        visibility:status,
        mode:'simple',
        size:'medium',
        header:'Medium',
        positive:{
            label    : 'Okey',
            action : positive
        }
    }
    return(
            <div className="container">
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
})

stories.add('Large', () =>{
    const [status, setStatus] = useState('hidden');
    const [msg, setMsg] = useState('');

    const clickHandler = () =>{
        setMsg('')
        setStatus('visible') 
    }

    const positive = () =>{
        setMsg('Operation Success');
        setStatus('hidden');
    }

    const modalProbs = {
        visibility:status,
        mode:'alert',
        size:'large',
        header:'Large',
        positive:{
            label    : 'Okey',
            action : positive
        },
        negative :{
            label    : 'Cancel',
            action : () => setStatus('hidden')
        } 
    }
    return(
            <div className="container">
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
})