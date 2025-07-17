import React, { useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/loginSlice";
import { getUser } from "@/features/user/useSlice";
import { CancelSquareIcon, Menu11Icon } from "@hugeicons/core-free-icons/index";
import { HugeiconsIcon } from "@hugeicons/react";

const Header = () => {
  const {isAuthenticated , user} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  }

  const handleProfile = () => {
    // dispatch(getUser(localStorage.getItem("user")))
    navigate(`/user-details/${localStorage.getItem("user")}`)
  }

  const [active, setActive] = useState(false);
  const handleToggel = () =>{
    if(active === true){
      setActive(false);
    }else{
      setActive(true)
    }
  }
  return (
    <>
      <div className="header_container px-[4%] relative z-20">
        <div className="container mx-auto">
          <div className="header py-6 relative">
            <div className="top flex items-center justify-between w-full">
              <div className="left">
                <Link to={"/"}>
                  {" "}
                  <img
                    src={logo}
                    alt="logo"
                    loading="lazy"
                    className={`lg:w-40 md:w-34 w-30`}
                  />{" "}
                </Link>
              </div>
              <div className="middle flex-col items-center justify-center lg:flex hidden">
                <p className="text-center font-alumni text-4xl font-light">
                  Play What Moves You <br />{" "}
                  <span className="text-5xl font-semibold">
                    Discover Music That Speaks You.
                  </span>
                </p>
              </div>
              <div className="right flex items-center gap-2 md:gap-5">
                {isAuthenticated && user.token || localStorage.getItem("token") ? (
                  <>
                    <div className="box bg-primary w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-black" onClick={handleProfile}>
                      {
                        user?.data?.name ? (
                          <p className={`text-lg`}>{user?.data?.name?.slice(0, 1)}</p>
                        ) : (
                          <p className={`text-lg`}>{localStorage.getItem("name").slice(0, 1)}</p>
                        )
                      }
                      
                    </div>
                  {/* <p className="cursor-pointer" onClick={handleLogout}>logout</p> */}
                  </>
                ) : (
                  <>
                    <Link to={'/signup'}>
                      <Button
                      className={`rounded-4xl border border-primary bg-transparent lg:px-5 hover:bg-primary hover:text-black`}
                      variant="outline"
                    >
                      Register
                    </Button>
                    </Link>
                    <Link to='/signin'>
                      <Button className={`rounded-4xl text-black lg:px-5`}>
                      Login
                    </Button>
                    </Link>
                  </>
                )}
                <HugeiconsIcon icon={Menu11Icon} className="block lg:hidden" onClick={handleToggel}/>
              </div>
            </div>
            <div className="bottom bg-[#2C2C2C] w-fit py-4 px-7 rounded-4xl mx-auto mt-8 hidden lg:block">
              <ul className="flex items-center gap-16">
                <li>
                  <Link to="/" className="text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Watch Video
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Artists
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Songs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Subscriptions
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`mobile_menu lg:hidden fixed top-0 right-0 bg-[#2C2C2C] w-[70%] md:w-[40%] h-full z-50 duration-300 ease ${active ? "translate-x-0" : "translate-x-[100%]"}`}>
              <HugeiconsIcon icon={CancelSquareIcon} className="absolute top-4 left-4" size={30} onClick={handleToggel}/>
              <ul className="flex items-start gap-6 flex-col px-5 py-18">
                <li>
                  <Link to="/" className="text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Watch Video
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Artists
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Songs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Subscriptions
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
