import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './SidebarComponent.css';
import { NavLink } from 'react-router-dom';
import { links } from '../data/dummy';

import React from 'react';

const SidebarComp = () => {

    const currentColor = 'black';

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


    let sidebarObj;
    let type = "Push";
    function onCreate() {
        sidebarObj.element.style.visibility = '';
    }
    // Toggle(Open/Close) the Sidebar
    function toggleClick() {
        sidebarObj.toggle();
    }
    // Close the Sidebar
    function closeClick() {
        sidebarObj.hide();
    }

    return (
        <div className="control-section border-blue-900 mt-20 border-solid-black">
            <div id="wrapper" className='mt-10 border-solid'>
                {/* Initializing the Sidebar component */}
                <SidebarComponent id="default-sidebar" enableGestures={false} type={type} ref={Sidebar => sidebarObj = Sidebar} created={onCreate} style={{ visibility: "hidden" }} >
                    <div className="title"> Sidebar content</div>
                    <div className="sub-title">
                        Click the button to close the Sidebar.
                    </div>
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        // onClick={handleCloseSideBar}
                                        onClick={() => { }}

                                        style={({ isActive }) => ({
                                            backgroundColor: isActive ? currentColor : '',
                                        })}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="center-align">
                        <ButtonComponent onClick={closeClick} id="close" className="e-btn close-btn">Close Sidebar</ButtonComponent>
                    </div>
                </SidebarComponent>
                <div>
                    <div className="title">Main content</div>
                    <div className="sub-title"> Click the button to open/close the Sidebar.</div>
                    <div className="center-align">
                        <ButtonComponent onClick={toggleClick} id="toggle" className="e-btn e-info">Toggle Sidebar</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarComp;
