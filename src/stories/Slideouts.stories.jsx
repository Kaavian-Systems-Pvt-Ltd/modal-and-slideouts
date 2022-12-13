import React , { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Slideouts } from '../../dist/index';

const stories = storiesOf ('Slideouts' , Slideouts);

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
            <Slideouts show={status} close={exitModal}/>
        </div>
    );
}); 

stories.add ('Small width' , ()=> {
    const [ status , setStatus ] = useState ('hidden');

    const exitSlideOut  = ()=> {
        setStatus ('hidden');
    };
    const Content = ()=> {
        return(
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt nunc. Consectetur 
                adipiscing elit duis tristique sollicitudin nibh sit. Gravida in fermentum et sollicitudin ac 
                orci phasellus. Fermentum dui faucibus in ornare quam. Duis tristique sollicitudin nibh sit 
                amet commodo nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis. Magnis dis 
                parturient montes nascetur ridiculus mus mauris. Lobortis elementum nibh tellus molestie nunc 
                non blandit. Viverra accumsan in nisl nisi scelerisque eu ultrices. Eu turpis egestas pretium 
                aenean pharetra magna ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. 
                Urna molestie at elementum eu facilisis sed. Pretium vulputate sapien nec sagittis aliquam 
                malesuada bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Quis hendrerit 
                dolor magna eget est. Turpis egestas sed tempus urna et. Id cursus metus aliquam eleifend mi 
                in nulla posuere.Massa sed elementum tempus egestas sed. Tincidunt praesent semper feugiat nibh sed. 
                Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Bibendum ut tristique et 
                egestas quis ipsum suspendisse. Adipiscing bibendum est ultricies integer quis auctor elit. 
                Elit pellentesque habitant morbi tristique senectus et netus. 
            </p>
        );
    };
    return(
        <div className='container'>
            <button onClick ={()=> setStatus ('visible')} style={{ 'cursor' : 'pointer' }} >Click to view slideouts</button>
            <Slideouts show={status} close={exitSlideOut} title='Small width' Body={Content} />
        </div>
    );
});

stories.add ('Medium width' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const exitSlideOut  = ()=> {
        setStatus ('hidden');
    };
    const Content = ()=> {
        return(
            <p>    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at ultrices mi tempus imperdiet nulla. Elit pellentesque habitant morbi tristique. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Elementum tempus egestas sed sed. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Turpis nunc eget lorem dolor. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. At erat pellentesque adipiscing commodo elit. Odio eu feugiat pretium nibh ipsum. Diam vulputate ut pharetra sit amet aliquam. Aliquet lectus proin nibh nisl condimentum id venenatis a. Arcu cursus vitae congue mauris rhoncus aenean vel. Nisi scelerisque eu ultrices vitae auctor. Sed sed risus pretium quam vulputate dignissim. Dui sapien eget mi proin sed. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Enim tortor at auctor urna nunc id cursus.
                Eros in cursus turpis massa. Pharetra vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Sit amet mauris commodo quis imperdiet. Nisi vitae suscipit tellus mauris a. Viverra ipsum nunc aliquet bibendum. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Aliquam ut porttitor leo a diam sollicitudin. Vitae ultricies leo integer malesuada nunc vel. Viverra nibh cras pulvinar mattis. Magna sit amet purus gravida quis blandit. Faucibus ornare suspendisse sed nisi.
                In arcu cursus euismod quis viverra nibh. In eu mi bibendum neque. Pulvinar mattis nunc sed blandit libero. Nunc sed blandit libero volutpat sed. Adipiscing elit ut aliquam purus. Sit amet purus gravida quis blandit turpis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Integer enim neque volutpat ac tincidunt vitae semper quis. Sagittis eu volutpat odio facilisis mauris sit amet massa. Integer eget aliquet nibh praesent tristique magna. Nisi vitae suscipit tellus mauris a diam maecenas sed. Tortor at auctor urna nunc. Risus nec feugiat in fermentum posuere. At volutpat diam ut venenatis tellus in. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Id leo in vitae turpis massa.
            </p>
        );
    };
    return(
        <div className='container'>
            <button onClick ={()=> setStatus ('visible')} >Click to view slideouts</button>
            <Slideouts show={status} title='Medium width' Body={Content} size='medium' close={exitSlideOut} />
        </div>
    );
});

stories.add ('Large width' , ()=> {
    const [ status , setStatus ] = useState ('hidden');
    const exitSlideOut  = ()=> {
        setStatus ('hidden');
    };
    const Content = ()=> {
        return(
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at ultrices mi tempus imperdiet nulla. Elit pellentesque habitant morbi tristique. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Elementum tempus egestas sed sed. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Turpis nunc eget lorem dolor. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. At erat pellentesque adipiscing commodo elit. Odio eu feugiat pretium nibh ipsum. Diam vulputate ut pharetra sit amet aliquam. Aliquet lectus proin nibh nisl condimentum id venenatis a. Arcu cursus vitae congue mauris rhoncus aenean vel. Nisi scelerisque eu ultrices vitae auctor. Sed sed risus pretium quam vulputate dignissim. Dui sapien eget mi proin sed. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Enim tortor at auctor urna nunc id cursus.
                Eros in cursus turpis massa. Pharetra vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Sit amet mauris commodo quis imperdiet. Nisi vitae suscipit tellus mauris a. Viverra ipsum nunc aliquet bibendum. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Aliquam ut porttitor leo a diam sollicitudin. Vitae ultricies leo integer malesuada nunc vel. Viverra nibh cras pulvinar mattis. Magna sit amet purus gravida quis blandit. Faucibus ornare suspendisse sed nisi.
                In arcu cursus euismod quis viverra nibh. In eu mi bibendum neque. Pulvinar mattis nunc sed blandit libero. Nunc sed blandit libero volutpat sed. Adipiscing elit ut aliquam purus. Sit amet purus gravida quis blandit turpis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Integer enim neque volutpat ac tincidunt vitae semper quis. Sagittis eu volutpat odio facilisis mauris sit amet massa. Integer eget aliquet nibh praesent tristique magna. Nisi vitae suscipit tellus mauris a diam maecenas sed. Tortor at auctor urna nunc. Risus nec feugiat in fermentum posuere. At volutpat diam ut venenatis tellus in. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Id leo in vitae turpis massa.
                Ut tellus elementum sagittis vitae et leo duis. Rutrum quisque non tellus orci ac auctor augue. Et netus et malesuada fames ac turpis egestas maecenas. Tellus at urna condimentum mattis. Volutpat sed cras ornare arcu dui vivamus arcu. Velit euismod in pellentesque massa placerat duis ultricies. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Eu consequat ac felis donec et odio pellentesque diam. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Nisl rhoncus mattis rhoncus urna neque viverra justo. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sed egestas egestas fringilla phasellus faucibus scelerisque. Et odio pellentesque diam volutpat commodo sed. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Lacus vel facilisis volutpat est velit egestas.
            </p>
        );
    };
    return(
        <div className='container'>
            <button onClick ={()=> setStatus ('visible')} >Click to view slideouts</button>
            <Slideouts show={status} close={exitSlideOut} title='Large width' Body={Content} size='large' />
        </div>
    );
});