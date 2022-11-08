import React from "react";
import {Link, useLocation} from "react-router-dom";


const NavigationSidebar = (
    {
    active="explore"
    }
) => {
    const {pathname} = useLocation()
    const pathParts = pathname.split('/')

    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter" className={`list-group-item
                    ${pathParts[pathParts.length - 1] === 'tuiter'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore"className={`list-group-item
                    ${pathParts[pathParts.length - 1] === 'explore'?'active':''}`}>
                Explore
            </Link>
            <a href="notifications.html"className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a href="messages.html"className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a href="bookmarks.html"className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a href="lists.html"className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a href="profile.html"className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a href="fmore.html" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>

        </div>
    )
};

export default NavigationSidebar;