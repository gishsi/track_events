import React from 'react';
import {
  WiVolcano,
  WiFire,
  WiFlood,
  WiEarthquake,
  WiThermometer,
  WiStormShowers,
  WiDust,
} from 'react-icons/wi';
import { MdLandscape } from 'react-icons/md';
import { IoIosWater, IoMdHammer } from 'react-icons/io';
import { GiIceCube } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';
import { BiCloudSnow } from 'react-icons/bi';

const Marker = ({ lat, lng, icon, des, title, showInfo }) => {
  const font = '1.5rem';
  switch (icon) {
    case 'fire':
      return (
        <>
          <WiFire
            style={{ fontSize: font, color: 'red' }}
            onClick={() => showInfo(lat, lng, des, title)}
          />
        </>
      );
    case 'flood':
      return (
        <WiFlood
          style={{ fontSize: font, color: 'blue' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'volcano':
      return (
        <WiVolcano
          style={{ fontSize: font, color: 'grey' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'earthquake':
      return (
        <WiEarthquake
          style={{ fontSize: font, color: 'green' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'temp':
      return (
        <WiThermometer
          style={{ fontSize: font, color: 'orange' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'storm':
      return (
        <WiStormShowers
          style={{ fontSize: font, color: 'darkblue' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'dust_and_haze':
      return (
        <>
          <WiDust
            style={{ fontSize: font, color: 'lightgray' }}
            onClick={() => showInfo(lat, lng, des, title)}
          />
        </>
      );
    case 'drought':
      return (
        <BsSun
          style={{ fontSize: font, color: 'lightyellow' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'water_color':
      return (
        <IoIosWater
          style={{ fontSize: font, color: 'lightblue' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'landslides':
      return (
        <MdLandscape
          style={{ fontSize: font, color: 'lightgreen' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'sea_and_lake_ice':
      return (
        <GiIceCube
          style={{ fontSize: font, color: 'white' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'snow':
      return (
        <BiCloudSnow
          style={{ fontSize: font, color: 'darkblue' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    case 'manmade':
      return (
        <IoMdHammer
          style={{ fontSize: font, color: 'darkblue' }}
          onClick={() => showInfo(lat, lng, des, title)}
        />
      );
    default:
      return null;
  }
};
export default Marker;
