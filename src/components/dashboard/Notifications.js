import React from 'react'
import BookingList from '../booking/BookingList'

const Notifications = ({carBooked}) => {
    console.log(carBooked);
    return (
        <div className="project-list section card_content notification">
            <h5>Notifications</h5>
            {
                carBooked && carBooked.map(booking => {
                    return (
                        <BookingList booking={booking} key={booking.id}/>
                    )
                })
            }
        </div>
    )
}

export default Notifications