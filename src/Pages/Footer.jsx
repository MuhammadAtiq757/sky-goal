const Footer = () => {
    return (
      <footer className=" footer footer-center  mt-8 text-base-content container px-4">
      <nav className="grid md:grid-cols-2 gap-4">
       <div>
       <a className="link link-hover p-2">Privacy Policy</a>
        <a className="link link-hover p-2">Terms of Use</a>
        <a className="link link-hover p-2">Sales and Refunds</a>
        <a className="link link-hover p-2">Legal</a>
       </div>
       <div className="font-bold ">
       <a className="link link-hover p-2">About</a>
        <a className="link link-hover p-2">Schedules</a>
        <a className="link link-hover p-2">Pricing</a>
        <a className="link link-hover p-2">Membership</a>
        {/* <a className="link link-hover p-2">Joins</a> */}
       </div>
      </nav> 

    
      
    </footer>
    );
};

export default Footer;