import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div>
            <h3 className="text-xl font-semibold">Online Shopping Mart</h3>
            <p className="text-sm mt-2">Your trusted online shopping mart</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li><Link to="#"  className="text-sm hover:underline">About Us</Link></li>
              <li><Link to="#"   className="text-sm hover:underline">Contact</Link></li>
              <li><Link to="#"  className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link to="#"  className="text-sm hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm">Follow Us:</p>
            <div className="space-x-4">
              <Link to="#" className="text-white hover:text-blue-400">Facebook</Link>
              <Link to="#"  className="text-white hover:text-blue-400">Instagram</Link>
              <Link to="#" className="text-white hover:text-blue-400">Twitter</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  