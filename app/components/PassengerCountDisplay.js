"use client";
import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const PassengerCountDisplay=() =>
{
        const [ count, setCount ]=useState( 0 );

        useEffect( () =>
        {
                const fetchCount=async () =>
                {
                        try
                        {
                                const response=await fetch( '/api/get-pcount' );
                                const data=await response.json();
                                setCount( data.count );
                        } catch ( error )
                        {
                                console.error( 'Error fetching passenger count:', error );
                        }
                };

                fetchCount();
        }, [] );

        return (
                <Box sx={ { textAlign: 'center', mt: 4 } }>
                        <Typography variant="h4">Current Passenger Count</Typography>
                        <Typography variant="h2" color="primary">
                                { count }
                        </Typography>
                </Box>
        );
};

export default PassengerCountDisplay;
