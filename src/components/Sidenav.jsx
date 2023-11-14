import { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProfile } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import './Sidenav.css'; // Import a separate CSS file for styling

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleNav = () => {
        setNav(!nav);
        setHoveredItem(null); // Reset hoveredItem when toggling the navigation
    };

    const handleHover = (label) => {
        setHoveredItem(label);
    };

    const navItems = [
        { id: "main", icon: <AiOutlineHome size={20} />, label: "Home" },
        { id: "work", icon: <GrProjects size={20} />, label: "Work" },
        { id: "projects", icon: <AiOutlineProfile size={20} />, label: "Projects" },
        { id: "resume", icon: <BsPerson size={20} />, label: "Resume" },
        { id: "contact", icon: <AiOutlineMail size={20} />, label: "Contact" },
    ];

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
            {nav && (
                <div className="nav-container">
                    {navItems.map(({ id, icon, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={handleNav}
                            onMouseEnter={() => handleHover(label)}
                            onMouseLeave={() => handleHover(null)}
                            className="nav-item"
                        >
                            {icon}
                            {hoveredItem === label && <span className="label">{label}</span>}
                        </a>
                    ))}
                </div>
            )}

            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    {navItems.map(({ id, icon, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onMouseEnter={() => handleHover(label)}
                            onMouseLeave={() => handleHover(null)}
                            className="nav-item"
                        >
                            {icon}
                            {hoveredItem === label && <span className="label">{label}</span>}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
