import React, { useState } from 'react';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = ['Home', 'Company', 'Services', 'Products', 'Portfolio', 'Careers', 'Contact us'];

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="https://s3-alpha-sig.figma.com/img/6afd/6969/7f4008740e9cb8e93ea7c495aeef6cdc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1Q37h-RnsB0cNvstrzDggGXoCrOmMyFhQ2squMJ8YUNzRdZuH7AeutSjIQvtiTbOZy6~6TZc87nnIpC8cECwp0U40pZYQbk79aUcSuY1Q8oab5FUXn0ncY~HrSPjjgFlpGzWIFKzYvg74F4dHICjt3S277LXGiEKLeLAaRXh~-S~9v~qpcX1PMRjC60AKcFqWHxXXYTHsS4rYWqdILdlB5r--uB8M~ieSDQqNhIzkVSnmZFBO3d~bw5ZQjlWOYv3ZLq9cZAeR45IzbecCKlIUkuGgARCXkYUGXUfgDZG3aA37Bw7mj4ZssqXRN1hPGVXuyI-MGyuOAHou~6hy5QeA__"
          alt="SpY D Technology" 
          className="h-10 mr-2" 
        />
       
      </div>

      {/* Menu Items */}
      <ul className="flex space-x-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${
              activeIndex === index ? 'bg-blue-600 text-white' : 'text-blue-600'
            } font-semibold px-3 py-1 rounded cursor-pointer transition-all hover:bg-blue-600 hover:text-white`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Try a Demo Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        TRY A DEMO
      </button>
    </nav>
  );
}

export default Navbar;
