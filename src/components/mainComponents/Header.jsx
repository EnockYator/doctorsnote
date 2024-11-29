import React, { useCallback, useEffect, useState, lazy, Suspense } from 'react';
const Navigation = lazy(() => import('./Navigation.jsx'));
import style from './../../assets/css-modules/Header.module.css'

function Header({activeSection, setActiveSection}) {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = useCallback(() => {
        setShowMenu(prevShowMenu => !prevShowMenu);
      }, []);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 480);
    const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 480);
    };

    // Event listener for resizing
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
    }, []);

    return (
        <>
        <div className={style.header}>
            <div className={style.logo}><span>Digi</span>Note</div>
            <div className={style.navbar}>
                <button><i className='ri-moon-line'></i></button>
                { isLargeScreen && 
                    <Suspense fallback={<div>Loading Menu...</div>}>
                        <Navigation activeSection={activeSection} setActiveSection={setActiveSection}/>
                    </Suspense>
                }
                {!showMenu && !isLargeScreen && <button onClick={toggleMenu}><i className='ri-menu-line'></i></button>}
                {showMenu && !isLargeScreen && <button onClick={toggleMenu}><i className='ri-close-line'></i></button>}
                <button><i className='ri-user-line'></i></button>
            </div>
        </div>
        {
            showMenu && !isLargeScreen && 
                <Suspense fallback={<div>Loading Menu...</div>}>
                    <Navigation activeSection={activeSection} setActiveSection={setActiveSection}/>
                </Suspense>
        }
        
        
        </>
    )
}

export default Header;