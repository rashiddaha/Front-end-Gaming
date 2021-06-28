import React from 'react'
import './StatsCard.css'
function StatsCard({img, number, title}) {
    return (
        <div className='stats-card'>
            <img className='stats-ico' src={img} alt='img'></img>
            <div className='numb'>{number}</div>
            <div className='stat-title'>{title}</div>
        </div>
    )
}

export default StatsCard
