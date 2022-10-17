const navItems = ["Home","Explore","Notification","Messages","Bookmarks","Lists","Profile","More"]
const navigationSideBar = () => `
      <div class="list-group">
        <a class="list-group-item position-relative fab fa-twitter"></a>
        <a href="home.html" class="list-group-item position-relative fa fa-home" > Home </a>
        <!--span class="position-absolute wd-nudge-up fa fa-home">️Home</span-->
        <a href="explore.html" class="list-group-item active fa fa-hashtag"> Explore</a>
        <a href="notification.html" class="list-group-item fa fa-bell "> Notification</a>
        <a href="messages.html" class="list-group-item fa fa-envelope"> Messages</a>
        <a href="bookmarks.html" class="list-group-item fa fa-bookmark"> Bookmarks</a>
        <a href="lists.html" class="list-group-item fa fa-list"> Lists</a>
        <a href="profile.html" class="list-group-item fa fa-child"> Profile</a>
        <a href="more.html" class="list-group-item fa fa-dot-circle"> More</a>
      </div>
      <!-- add width to the button -->
      <button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
`;

export default navigationSideBar;




