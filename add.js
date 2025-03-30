// Booking system check

// Declare variables 

const totalseats =10;
let bookedseats = 7;
const newBooking =3;

//Check Availability 

if (bookedseats + newBooking > totalseats){
    console.log ("Not enough seat available");

}else if (bookedseats + newBooking  === totalseats) {
    console.log ("All seats booked");

}else{console.log ("Booking successfully, seats available ")};