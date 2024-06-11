import connectToDatabase from '../../../lib/mongodb';
import PassengerCount from '../../../models/PassengerCount';

export default async function handler ( req, res )
{
        try
        {
                await connectToDatabase();

                const passengerCount=await PassengerCount.findOne().sort( { createdAt: -1 } );

                res.status( 200 ).json( { count: passengerCount? passengerCount.count:0 } );
        } catch ( error )
        {
                console.error( 'Error fetching passenger count:', error );
                res.status( 500 ).json( { message: 'Internal Server Error' } );
        }
}
