import React from 'react';
import {BsLockFill} from 'react-icons/bs'

const ClosedProfile = () => {
    const user = useSelector(state => state.imgReducer.user)
    return (
        <div>
            <p>
            <BsLockFill /> Этот аккаунт закрыт
                </p>
        </div>
    );
};

export default ClosedProfile;