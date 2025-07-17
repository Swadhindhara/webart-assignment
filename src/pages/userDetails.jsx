import { Button } from '@/components/ui/button';
import { logout } from '@/features/auth/loginSlice';
import { getUser, resetUser } from '@/features/user/useSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, userDetails, isSuccess } = useSelector((state) => state.profile);

  useEffect(() => {
    if (id) {
      dispatch(getUser(id));
    }
  }, [id, dispatch]);

  const handleLogout = () => {
    dispatch(resetUser());
    dispatch(logout());
    navigate('/')
  }

  return (
    <div className="register_container px-[4%]">
      <div className="container mx-auto">
        <div className="register py-10 flex items-center justify-center">
          <div className="shadow-xs rounded-2xl px-6 py-8 w-full md:w-2/3 lg:w-1/3 flex flex-col gap-3 bg-black">
            <h2 className="text-primary text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
              User Details
            </h2>

            {isLoading && <p className="text-white text-center">Loading...</p>}

            {isSuccess && userDetails && (
              <div className="text-white">
                <p><strong>Name:</strong> {userDetails?.data?.name}</p>
                <p><strong>Email:</strong> {userDetails?.data?.email}</p>
                <p><strong>User Type:</strong> {userDetails?.data?.user_type}</p>
                <p><strong>Status:</strong> {userDetails?.data?.status}</p>
              </div>
            )}

            <Button className="text-black mt-4" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
