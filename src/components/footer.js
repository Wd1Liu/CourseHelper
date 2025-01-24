import React from 'react';
import Link from 'next/link';

import {
    Image
} from '@chakra-ui/react'


const Footer = () => {
    return (
        <div className='grid justify-center py-5 relative'>
            <h1 className='mx-2 text-tertiary text-sm text-center break-words'>
                <span className='flex items-center justify-center'>
                    <a href='https://github.com/Wd1Liu/CourseHelper' target="_black" rel="noopener noreferrer" className='text-tertiary flex items-center gap-1 underline decoration-dashed decoration-1 underline-offset-2'>
                        CourseHelper
                    </a>
                </span>
            </h1>
        </div>
    );
};

export default Footer;
