import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/actions/usersAction';
import Loader from './loader';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loader, user } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUser(id));
    }, []);
    return (
        !loader ? (
            <>
                <Link to="/" className='btn btn-primary mb-3'>Go Back</Link>
                <div className='card'>
                    <div className='card-header'>
                        <h3><span className='text-info'>{user.name}</span> (Details-ID = {user.id})</h3>
                    </div>
                    <div className='card-body'>
                        <div className='row mb-2'>
                            <div className='col-3'>Name</div>
                            <div className='col-9 text-end'>{user.name}</div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-3'>Email</div>
                            <div className='col-9 text-end'>{user.email}</div>
                        </div>
                        <div className='row mb-2'>
                            <div className='col-3'>UserName</div>
                            <div className='col-9 text-end'>{user.username}</div>
                        </div>
                    </div>
                </div>
            </>
        )
            : <Loader />
    );
}

export default DetailsPage;