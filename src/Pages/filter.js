import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filteredUser } from '../store/reducers/usersReducer';

const Filter = () => {
    const inputField = useRef('');
    const dispatch = useDispatch();
    const filterUsers = () => {
        dispatch(filteredUser(inputField.current.value));
    }
    return (
        <>
            <input type="text" name='' onChange={filterUsers} ref={inputField} className='form-control mb-3' placeholder='Search user by name' />
        </>
    )
}

export default Filter;