import Nav from "./../nav"
import NavigationSidebar from "./navigation-sidebar"
import WhoToFollowList from "./who-to-follow-list"
import ExploreComponent from "./explore"

function Tuiter () {
    <Nav/>
    return (
        <div className="row mt-2">
            <div className="col-sm-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-sm-11 col-md-7 col-lg-6 col-xl-6 col-xxl-6" style={{"position":"relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter;
