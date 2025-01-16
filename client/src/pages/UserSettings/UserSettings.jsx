import { userGetAction } from '../../Redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function UserSettings() {  
  
  const dispatch = useDispatch();

  const { userData, loadingUser, message } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(userGetAction());
  },[dispatch]);

  return (
    <>
    {loadingUser?<h1>Loading</h1>: 
    <div>
    <p>{userData.email}</p>
    <p>Ele é admin? {userData.isAdmin.toString()}</p>
    <p>Produtos comprados: {userData.productBuyed.toString()}</p>
    <p>wishlist: {userData.wishlist.toString()}</p>
  </div>
    }
    </>
  )
}