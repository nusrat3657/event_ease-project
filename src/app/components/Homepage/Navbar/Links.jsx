import React from 'react';
import NavLink from './NavLink';

const content = {
    home: 'Home',
    contact: 'Contact',
    about: 'About Us'
}

const Links = () => {
    const links = [
        {
            path: '/',
            element: content.home,
        },
        {
            path: '/contact',
            element: content.contact,
        },
        {
            path: '/about',
            element: content.about,
        },
    ]
    return (
        <div className='flex lg:flex-row flex-col items-start gap-5'>
            {links.map(link => (
                <NavLink key={link.element} className='' link={link}></NavLink>
            ))}
        </div>
    );
};

export default Links;