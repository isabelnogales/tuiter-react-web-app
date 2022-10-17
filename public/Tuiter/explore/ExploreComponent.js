const ExploreComponent = () => `
  <div class="row">
    <!-- we may need to change the sizes -->
    <div class="col-11 position-relative">
      <input placeholder="Search Tuiter"
             class="form-control rounded-pill ps-5"/>
      <span class="position-absolute wd-nudge-up "> 🔍️</span>
    </div>
    <div class="col-2">
      <!-- poner emoji en el end-->
      <span class="float-end fa fa-cog" style="color: dodgerblue"></span>
    </div>
  </div>

  <!-- should this be links -->
  <!--a href="explore.html" class="list-group-item active fa fa-hashtag"> Explore</a-->
  <ul class="nav nav-tabs mt-2">
    <li class="nav-item">
      <a href="for-you.html" class="nav-link active">For You</a>
    </li>
    <li class="nav-item">
      <a href="trending.html" class="nav-link">Trending</a>
    </li>
    <li class="nav-item">
      <a href="news.html" class="nav-link">News</a>
    </li>
    <li class="nav-item">
      <a href="sports.html" class="nav-link">Sports</a>
    </li>
    <li class="nav-item">
      <a href="entertainment.html" class="nav-link">Entertainment</a>
    </li>
  </ul>
  <div class="position-relative">
    <img src="starship.webp" class="w-100"/>
    <!-- intentar mover a la izq el texto -->
    <h1 class="position-absolute wd-nudge-up text-white wd- ">SpaceX's Starship</h1>
  </div>
  <!--Añadir las cajas como las de la derecha -->
  <ul class="list-group">
    <li class="list-group-item">
      <div class="row">
        <div class="col text-secondary mt-1">Web Development</div>
        <div class="col text-secondary mt-1">-2h</div>
        <p></p>
        <div class="col mt-1 font-weight-bold">ReactJS</div>
        <p></p>
        <div class="col font-weight-bold mt-1">React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs</div>
        <div class="col"><img src="../../images/react.png" class="rounded-3 float-end" width="50px"></div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col text-secondary mt-1 font-weight-bold">JavaScript</div>
        <div class="col text-secondary mt-1">-2h</div>
        <p></p>
        <div class="col font-weight-bold mt-1 font-weight-bold">JavaScript is programming lenguage that can  on browsers as well as all desktop</div>
        <p></p>
        <div class="col text-secondary mt-1">123k Tweets</div>
        <div class="col"><img src="../../images/js.png" class="rounded-3 float-end" width="50px"></div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col text-secondary mt-1">Web Development</div>
        <p></p>
        <div class="col mt-1 font-weight-bold">jQuery</div>
        <p></p>
        <div class="col text-secondary mt-1">123K Tweets</div>
        <div class="col font-weight-bold"><img src="../../images/jquery.png" class="rounded-3 float-end" width="50px"></div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col text-secondary mt-1">Web Development</div>
        <div class="col text-secondary mt-1">-2h</div>
        <p></p>
        <div class="col mt-1 font-weight-bold">NodeJS</div>
        <p></p>
        <div class="col text-secondary mt-1">123K Tweets</div>
        <div class="col"><img src="../../images/nodejs.png" class="rounded-3 float-end" width="50px"></div>
      </div>
    </li>
</div>

`;

export default ExploreComponent;
