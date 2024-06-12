import connectToDatabase from '../../../lib/mongodb';
import PassengerCount from '../../../models/PassengerCount';

export default async function storeCount ( req, res )
{
        console.log( req ); // Debugging line

        const { count }=req.searchParams;

        await connectToDatabase();

        const passengerCount=new PassengerCount( { count: Number( count ) } ); // Ensure count is a number
        await passengerCount.save();

        return (
                <div>
                        Stored In connectToDatabase
                </div>
        )
}
