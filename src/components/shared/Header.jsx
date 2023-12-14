import Logo from '../asset/Logo.webp'
const Header = () => {
  return (
    <div>
      <nav className="">
        <div className="flex justify-between px-[5rem] text-white bg-black py-2">
          <div className="w-[10rem] justify-between flex">
            <button>Business</button>
            <button>Personal</button>
          </div>
          <div className="w-[20rem] justify-between flex">
            <button>About</button>
            <button>Career</button>
            <button>Contact Us</button>
            <button>NG</button>
          </div>
        </div>
        <div className="flex justify-between px-[5rem] py-[1rem] items-center border-b">
          <div className="py-3 px-2">
            <img src={Logo} alt="Logo" className='w-[10rem]' />
          </div>
          <div className="py-3 w-[30rem] justify-around flex px-2">
            <button>Banking</button>
            <button>Payments</button>
            <button>Credit</button>
            <button>Business Management</button>
          </div>
          <div className="py-3 px-2">
            <button className="rounded-md border px-4 py-1">Sign In</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
