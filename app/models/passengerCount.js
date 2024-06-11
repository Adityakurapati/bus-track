import mongoose from 'mongoose';

const PassengerCountSchema=new mongoose.Schema( {
        count: {
                type: Number,
                required: true,
        },
}, { timestamps: true } );

const PassengerCount=mongoose.models.PassengerCount||mongoose.model( 'PassengerCount', PassengerCountSchema, 'passenger-count' );

export default PassengerCount;
