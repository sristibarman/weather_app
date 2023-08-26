import React from 'react'
import './descriptions.css'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md"

const Descriptions = ({ weather, units }) => {
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === "metric" ? 'm/s' : 'm/h'


  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      units: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.feels_like.toFixed(),
      units: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.temp_min.toFixed(),
      units: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      units: "hPa",
    },

    {

      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      units: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      units: windUnit,

    },


  ];


  return (
    <div className='section section__descriptions'>
      {cards.map(({ id, icon, title, data, units }) => (
        <div key={id} className='card'>
          <div className='description__card-icon'>
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${units}`}</h2>
        </div>

      ))}


    </div>
  )
}

export default Descriptions;