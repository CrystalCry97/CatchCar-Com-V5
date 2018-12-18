import React from 'react'
import { Modal} from 'react-materialize'

const BookingList = ({booking}) =>{
    return(
        <div className=" bookingList">
            
            <Modal
                header='Booking Information'
                trigger={<p><span>{booking.customerName}</span> make a booking for <span>{booking.bookingCarName}</span></p>}>
                <p>Customer Name: {booking.customerName}</p>
                <p>Car requested: {booking.bookingCarName}</p>
                <p>Pickup Date: {booking.customerPickupDate}</p>
                <p>Pickup Time: {booking.customerPickupTime}</p>
                <p>Return Date: {booking.customerReturnDate}</p>
                <p>Return Time: {booking.customerReturnTime}</p>
                <p>Customer Contact No: {booking.customerContact}</p>
                <p>Customer Email: {booking.customerEmail}</p>
            </Modal>
        </div>
    )
}

export default BookingList