'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({link}) => {
    const path = usePathname();

    return (
        <div>
            <Link className={`${link.path===path?' text-white' : ''}`} href={link.path}>{link.element}</Link>
        </div>
    );
};

export default NavLink;