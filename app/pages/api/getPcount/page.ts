import connectToDatabase from '../../../lib/mongodb';
import PassengerCount from '../../../models/PassengerCount'; import { NextResponse } from 'next/server';

const Page=async (req:Request,res:Response) =>
{
        return res.json({message:'hello'});
}
export default Page;