
import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/ApiService';

const ManageUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    // ComponentDidMount
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();

        // EC is error code, DT is data
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }


    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button class="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus />
                        Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers = {listUsers}/>
                </div>
                <ModalCreateUser 
                show={showModalCreateUser} 
                setShow={setShowModalCreateUser}
                fetchListUsers={fetchListUsers} 
                />
            </div>
        </div>
    )
}

export default ManageUser