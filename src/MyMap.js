import { Map, Overlay, ZoomControl, Draggable } from "pigeon-maps";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyMap = ({ userData, location, country, borderCountry }) => {

    console.log(borderCountry)
  return (
    <div>
      <Map height={500} center={new Array(userData.latitude, userData.longitude)} defaultZoom={11}>
                <Overlay anchor={location} offset={[120, 79]}>
                <img src={country.flags.png} width={100} height={100} alt="" />
                <div style={{display: 'flex', justifyContent:'space-around', backgroundColor :'white'}}>
                </div>
              </Overlay>

        {Array(borderCountry) && borderCountry.map(border => {
            return(
                <Overlay anchor={border.data[0].latlng} offset={[120, 79]}>
                <a target='_blank' href={`https://en.wikipedia.org/wiki/${border.data[0].name.common}`}>
                <img src={border.data[0].flags.png} width={100} height={100} alt="" />
                </a>
                <div style={{display: 'flex', justifyContent:'space-around', backgroundColor :'white'}}>
                </div>
              </Overlay>
            )
        })}

      
        {/* <Draggable offset={location} anchor={location} onDragEnd={setAnchor}>
          <img src={country.flags.png} width={100} height={95} alt="Pigeon!" />
        </Draggable> */}
        {/* <Draggable offset={location} anchor={location} onDragEnd={setAnchor}>
          <img src={country.flags.png} width={100} height={95} alt="Pigeon!" />
        </Draggable> */}
        <ZoomControl />
      </Map>
    </div>
  );
};

export default MyMap;
