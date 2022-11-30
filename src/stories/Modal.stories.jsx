import React from "react";
import { storiesOf } from '@storybook/react';

import { Modal } from '../components/modals';

const stories = storiesOf('Modal', module);

stories.add('Simple Msg', () =>{
    return(<Modal visibility='visible' />);
})