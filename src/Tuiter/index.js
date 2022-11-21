import Nav from "./../nav"
import NavigationSidebar from "./navigation-sidebar"
import WhoToFollowList from "./who-to-follow-list"
import ExploreComponent from "./explore"
import HomeComponent from "./home"

import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {Route, Routes} from "react-router";

//configure the store
const store = configureStore(
    {reducer: {who: whoReducer,tuitsData:tuitsReducer}});

function Tuiter () {
    <Nav/>
    return (
        // provide the state to the rest of the application so it can pull from the global state
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-sm-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-sm-11 col-md-7 col-lg-6 col-xl-6 col-xxl-6" style={{"position":"relative"}}>
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="/explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    )
}
export default Tuiter;
