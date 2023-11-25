import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-none'>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Schedules</a></li>
      <li><a>Membership</a></li>
      <li><a>Pricing</a></li>
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex mr-[350px]">
    <ul className="menu menu-horizontal px-1 gap-[20px] font-medium text-[16px]">
    <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Schedules</a></li>
      <li><a>Membership</a></li>
      <li><a>Pricing</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-[40px] text-[16px]">
    <h1 className='text-[#7D7D7D]'>Offers</h1>
    <h1 className='bg-[#F27A44] rounded-full px-[32px] py-[16px] btn text-white'>Courses</h1>
  </div>
</div>
        </div>
    );
};

export default Navbar;