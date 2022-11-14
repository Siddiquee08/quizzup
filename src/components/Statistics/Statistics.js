import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Graph from '../Graph/Graph';

const Statistics = () => {
    const stat = useLoaderData().data
    return (
        <div className='container'>
            <h2 className='text-success text-center my-4'>Statistics</h2>
            <Graph key={stat.id} stat = {stat}></Graph>
        </div>
    );
};

export default Statistics;