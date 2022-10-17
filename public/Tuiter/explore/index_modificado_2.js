import navigationSideBar from "./NavigationSidebar.js";
$("#explore-screen").append(`
    <h1 id="title">Explore Screen</h1>
    <ul id="some-list">
        <li>Some Cont</li>
    </ul>
    <!-- add margin to the top (dimension 2) -->
    <div className="row mt-2">
        <!-- Column 1 -->
        <!-- VER ESTO-->
        <!-- A5 HE AÑADIDO EL ID -->
        <div className="col-sm-2 col-md-2 col-xl-2 col-xxl-2" id="nav-side-bar">
            ${navigationSideBar()}
        </div>
        <!-- Column 2 -->
        <div className="col-sm-10 col-md-7 col-xl-7 col-xxl-6">
            <div className="row">
                <!-- we may need to change the sizes -->
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <span className="position-absolute wd-nudge-up "> 🔍️</span>
                </div>
                <div className="col-2">
                    <!-- poner emoji en el end-->
                    <span className="float-end fa fa-cog" style="color: dodgerblue"></span>
                </div>
            </div>
    
            <!-- should this be links -->
            <!--a href="explore.html" class="list-group-item active fa fa-hashtag"> Explore</a-->
            <ul className="nav nav-tabs mt-2">
                <li className="nav-item">
                    <a href="for-you.html" className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href="trending.html" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="news.html" className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a href="sports.html" className="nav-link">Sports</a>
                </li>
                <li className="nav-item">
                    <a href="entertainment.html" className="nav-link">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative">
                <img src="starship.webp" className="w-100"/>
                <!-- intentar mover a la izq el texto -->
                <h1 className="position-absolute wd-nudge-up text-white wd- ">SpaceX's Starship</h1>
            </div>
            <!--Añadir las cajas como las de la derecha -->
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col text-secondary mt-1">Web Development</div>
                        <div className="col text-secondary mt-1">-2h</div>
                        <p></p>
                        <div className="col mt-1 font-weight-bold">ReactJS</div>
                        <p></p>
                        <div className="col font-weight-bold mt-1">React.js is a component based front end library that
                            makes it very easy to build Single Page Applications or SPAs
                        </div>
                        <div
                            className="col"><!--img src="../../images/react.svg" class="rounded-3 float-end" width="50px"--></div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col text-secondary mt-1 font-weight-bold">JavaScript</div>
                        <div className="col text-secondary mt-1">-2h</div>
                        <p></p>
                        <div className="col font-weight-bold mt-1 font-weight-bold">JavaScript is programming lenguage that
                            can on browsers as well as all desktop
                        </div>
                        <p></p>
                        <div className="col text-secondary mt-1">123k Tweets</div>
                        <!--div class="col"><img src="../../images/js.png" class="rounded-3 float-end" width="50px"></div-->
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col text-secondary mt-1">Web Development</div>
                        <p></p>
                        <div className="col mt-1 font-weight-bold">jQuery</div>
                        <p></p>
                        <div className="col text-secondary mt-1">123K Tweets</div>
                        <!--div class="col font-weight-bold"><img src="../../images/jquery.png" class="rounded-3 float-end" width="50px"></div-->
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col text-secondary mt-1">Web Development</div>
                        <div className="col text-secondary mt-1">-2h</div>
                        <p></p>
                        <div className="col mt-1 font-weight-bold">NodeJS</div>
                        <p></p>
                        <div className="col text-secondary mt-1">123K Tweets</div>
                        <!--div class="col"><img src="../../images/nodejs.png" class="rounded-3 float-end" width="50px"></div-->
                    </div>
                </li>
                <h1>Main content</h1>
            </ul>
        </div>
        <!-- Column 3 -->
        <div className="col-md-3 col-xl-3 col-xxl-4">
            <ul className="list-group">
    
                <li className="list-group-item">
                    <div className="row">
                        <!--añadir algo en clase si necesario -->
                        <div>Who to follow</div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div
                            className="col"><!--img src="../../images/java.png" class="rounded-circle float-start" width="50px"--></div>
                        <div className="col">Java</div>
                        <div className="col fs-6 ">@Java</div>
                        <div className="col">
                            <button className="btn btn-primary rounded-pill float-end">Follow</button>
                        </div>
                    </div>
                </li>
    
                <li className="list-group-item">
                    <div className="row">
                        <div
                            className="col"><!--img src="../../images/relatively.png" class="rounded-circle float-start " width="50px"--></div>
                        <div className="col">Relatively Space</div>
                        <div className="col fs-6">@relatively Space</div>
                        <div className="col">
                            <button className="btn btn-primary rounded-pill float-end">Follow</button>
                        </div>
                    </div>
                </li>
    
    
                <li className="list-group-item">
                    <div className="row">
                        <div
                            className="col"><!--img src="../../images/virgin.svg" class="rounded-circle float-start" width="50px"--></div>
                        <div className="col">Virgin Galactic</div>
                        <div className="col fs-6">@virgingalactic</div>
                        <div className="col">
                            <button className="btn btn-primary rounded-pill float-end">Follow</button>
                        </div>
                    </div>
                </li>
    
                <li className="list-group-item">
                    <div className="row">
                        <div
                            className="col"><!--img src="../../images/nasa.png" class="rounded-circle float-start" width="80px"--></div>
                        <div className="col fs-6">NASA</div>
                        <div className="col fs-6">@NASA</div>
                        <div className="col">
                            <button className="btn btn-primary rounded-pill float-end">Follow</button>
                        </div>
                    </div>
                </li>
    
                <li className="list-group-item">
                    <div className="row">
                        <!-- make images same width -->
                        <div
                            className="col"><!--img src="../../images/tesla.jpeg" class="rounded-circle float-start" width="70px"--></div>
                        <div className="col fs-6">Tesla</div>
                        <div className="col fs-6">@Tesla</div>
                        <div className="col">
                            <button className="btn btn-primary rounded-pill float-end">Follow</button>
                        </div>
                    </div>
                </li>
            </ul>
    
            <
            !----- UTILIZAR CARDS ------->
            <!---- CAMBIAR IMAGENES A IMAGES Y CAMBIAR LINKS ------>
            <!----- CAMBIAR ICONOS ------>
    
        </div>
    
    </div>
`)