import React , { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Slideouts } from '../components/slideouts/Slideouts';

const stories = storiesOf ('Slideouts' , Slideouts);

stories.add ('Small width' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };
    return(
        <div className='container'>
            <button onClick ={()=> setStatus ('visible')} >Click to view slideouts</button>
            <Slideouts visibility={status} title='Small width' Body={Content} />
        </div>
    );
});

stories.add ('Medium width' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const Content = ()=> {
        return(
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, possimus sapiente facilis
                adipisicing elit. Nisi, possimus sapiente facilis 
            </p>
        );
    };
    return(
        <div className='container'>
            <button onClick ={()=> setStatus ('visible')} >Click to view slideouts</button>
            <Slideouts visibility={status} title='Medium width' Body={Content} size='medium' />
        </div>
    );
});