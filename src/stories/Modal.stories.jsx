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
                <Modal Content={Content}{...modalProbs}/>
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
        positive
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
        positive,
        negative : () => setStatus('hidden')
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
        positive,
        negative : () => setStatus('hidden')
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
        positive
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
        positive,
        negative : () => setStatus('hidden')
    }
    return(
            <div className="container">
                <ModalSkeleton modalProbs ={modalProbs} status={status} clickHandler={clickHandler} msg={msg} />
            </div>
    );
})