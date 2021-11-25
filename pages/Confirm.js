import React from 'react';

import tw from "tailwind-styled-components";
import Map from './components/Map';
import {useEffect} from 'react';

const Confirm = () => {
    const getCoordinates=()=>{
        const location="Santa Monica";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+new URLSearchParams({
      access_token:"pk.eyJ1IjoiaGFyc2hhbHlhZGF2IiwiYSI6ImNrNno4bms0ZTEzeWQzbHFhZDFpMGNidzAifQ.e6Wd3PU77fRNmK9fiEL6Vw",
      limit:1
    })
    ).then(response => response.json()).then(data=>{
        console.log(data);
    })
    }
    useEffect(()=>{
        getCoordinates();
        },[])
    return (
        <Wrapper>
            <Map/>

            
        <RightContainer>
           
         </RightContainer>
        </Wrapper>
    )
}

export default Confirm;

const Wrapper=tw.div`
 flex h-screen flex-col
`
const RightContainer=tw.div`
 flex-1 
`