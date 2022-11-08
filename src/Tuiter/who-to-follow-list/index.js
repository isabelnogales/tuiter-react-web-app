import React from "react";
//import whoArray from './who.json';
// we have moved tha data into the reducer instead import hook to retrieve from reducer
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        //who porque name of the reducer
        (state) => state.who)

    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <h3> Who to follow </h3>
                </li>
                {
                    whoArray.map(who => {
                        return (<WhoToFollowListItem key={who._id} who={who}/>);
                    })
                }
            </ul>
        </div>
    );
}
export default WhoToFollowList;

