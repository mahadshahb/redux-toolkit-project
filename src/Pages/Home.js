import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addUser } from '../store/reducers/usersReducer';
import { getUsers } from '../store/actions/usersAction';
import { Link } from "react-router-dom";
import TableData from './tableData';
import Loader from './loader';
import Filter from './filter';
import TotalUsers from './totalUsers';

const Home = () => {
    const { users, loader } = useSelector((state) => state.users);
    // console.log(state.users);


    const dispatch = useDispatch();


    // const inputRef = useRef('');

    // const StoreData = (e) => {
    //     e.preventDefault();
    //     dispatch(addUser(inputRef.current.value));
    //     inputRef.current.value = "";
    // }
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        // <h1>List of Api Data</h1>
        !loader ?
            (
                <>
                    <h2 className='text-center text-info mb-4'>Redux Project</h2>
                    <TotalUsers />
                    <Filter />
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th className='fw-bold'>Serial No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr>
                                        <TableData key={index} user={user} index={index} />
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            )
            :

            <Loader />
        // <form onSubmit={StoreData}>
        //     <input type="text" name='' placeholder='Add User...' ref={inputRef} />
        //     <br />
        //     <br />
        //     <input type="submit" value="Add User" />
        // </form>
    )
}

export default Home;