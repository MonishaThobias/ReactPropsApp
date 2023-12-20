import React from 'react';
//import CardChild1 from './CardChild1';
import './card.css'
import CardChild2 from './CardChild2';

function AppProps(){
    return(
<React.Fragment>
<div className='App'>
{/* <CardChild1 title="React Js" description="User Interface"/>
<CardChild1 title="Redux" description="Container for Js"> Flex design pattern</CardChild1>
<CardChild1 title="GraphQL" description="jquery Language"/> */}

<CardChild2 title="React Js" description="User Interface"/>
<CardChild2 title="Redux" description="Container for Js"> Flex design pattern
</CardChild2>
<CardChild2 title="GraphQL" description="jquery Language"/>


</div>
</React.Fragment>
    );
}

export default AppProps;