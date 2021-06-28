import React from 'react'
import './NewsCard.css'

function NewsCard() {
    return (
        <div className='news-card'>
            <div className='bg-img'>
                <div className='half-overlay'>
                    <div className='headline'>FIFA Friday Events</div>
                    <div className='date'> 24 May </div>
                    <div className='detail'> Guaranteed Prizes for Kill Race Tournaments! ScheduleFriday, May. 28th </div>
                    <button className='read-btn'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
