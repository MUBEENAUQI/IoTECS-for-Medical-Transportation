
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [];

for (let num = 100; num >= 0; num--) {
    data.push({
        y: Math.floor(Math.random() * (400 - 180 + 1)) + 180
       
    });
   
}
                        

export default function ECG() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={80} data={data}>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={3} />
                    <CartesianGrid opacity={1} vertical={false} />
                   
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>
        );
    
}