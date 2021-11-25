import React from 'react';

import tw from "tailwind-styled-components";

import mapboxgl from '!mapbox-gl';
import {useEffect} from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hhbHlhZGF2IiwiYSI6ImNrNno4bms0ZTEzeWQzbHFhZDFpMGNidzAifQ.e6Wd3PU77fRNmK9fiEL6Vw';

const Map = () => {

    useEffect(() => {
    
        const map = new mapboxgl.Map({
        container: "map",
        style:  'mapbox://styles/mapbox/streets-v11',
        center: [-99.29011,39.39172],
        zoom: 3,
        });
         addToMap(map);
         
        });

        const addToMap=(map)=>{
            const marker1 =new mapboxgl.Marker().setLngLat([12.554729,55.70651]).addTo(map);
        }
        
    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )
}

export default Map;

const Wrapper =tw.div`
flex-1
`