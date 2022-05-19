import React, { useEffect } from 'react';
import {BsLockFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getImage } from '../../../redux/reducers/image';

const ClosedProfile = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    const user = useSelector(state => state.imgReducer.users)
    const loader = useSelector(state => state.imgReducer.loader)
    useEffect(() => {
        dispatch(getImage());
      }, [dispatch]);

    if(!user){
        return '...loading'
    }
    return (
        <div>
          
                <p>{user.map((item)=> {
                    if(item._id === id){

                        return  <> {item.img ? <img className="img"   src={`http://localhost:8000/${item.img}`} /> :  <img className="img"   src={`https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Aang.png/280px-Aang.png`} />} </>
                }
                })}</p>
  <p>

<BsLockFill /> Этот аккаунт закрыт
    </p>
        </div>
    );
};

export default ClosedProfile;