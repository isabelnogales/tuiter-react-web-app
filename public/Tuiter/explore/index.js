import NavigationSidebar from "./NavigationSidebar.js";
import WhoToFollowList from "./WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";


function exploreComponent() {
    $('#wd-explore').append(`
        <!--h2>Explore</h2-->
    <div class="row mt-2">
    <!-- Column 1 -->
      <div class="col-2 col-md-2 col-lg-1 col-xl-2" id="nav-side-bar">    
        <!--h3>NavigationSidebar</h3-->
             ${NavigationSidebar()}
      </div>

    <!-- Column 2 -->
     <div class="col-10 col-lg-7 col-xl-6 "-->
        <!--h3>ExploreComponent</h3-->
            ${ExploreComponent()}
      </div>
    <!-- Column 3 -->
      <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
        <!--h3>WhoToFollowList </h3-->
            ${WhoToFollowList()}
      </div>
    </div>
    `);
}
$(exploreComponent);

