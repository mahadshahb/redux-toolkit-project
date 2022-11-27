import React from 'react';
import { useSelector } from 'react-redux';

const TotalUsers = () => {
    const { users } = useSelector(state => state.users);
    return (
        <h3 className='mb-4'>totalUsers is <span className='text-info'>({users.length})</span></h3>
    );
}

export default TotalUsers;