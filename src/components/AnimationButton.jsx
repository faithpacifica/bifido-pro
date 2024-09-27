import React from 'react'

const AnimationButton = ({ customClass, children, customLink }) => {
    return (
        <a className={`${customClass}`} href={customLink ? customLink : '/'}>
            {children}
        </a>
    )
}

export default AnimationButton