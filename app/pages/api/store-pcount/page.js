import connectToDatabase from '../../../lib/mongodb';
import PassengerCount from '../../../models/PassengerCount';

export default async function storeCount ( req, res )
{
        console.log( req ); // Debugging line

        const { count }=req.searchParams;

        // if ( req.method!=='GET' )
        // {
        //         res.setHeader( 'Allow', [ 'GET' ] );
        //         return res.status( 405 ).end( `Method ${ req.method } Not Allowed` );
        // }

        // if ( !count )
        // {
        //         return res.status( 400 ).json( { message: 'Count is required' } );
        // }

        await connectToDatabase();

        const passengerCount=new PassengerCount( { count: Number( count ) } ); // Ensure count is a number
        await passengerCount.save();

        return (
                <div>
                        Stored In connectToDatabase
                </div>
        )
}
