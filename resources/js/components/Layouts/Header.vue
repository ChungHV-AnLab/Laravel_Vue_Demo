<template>
    <div id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

            <h1 class="logo mr-auto">Laravel Vue</h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                <li><router-link class="home" to="home">Home</router-link></li>
                <li class="active"><a href="about.html">About</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="trainers.html">Trainers</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li class="drop-down"><a href="">Drop Down</a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li class="drop-down"><a href="#">Deep Drop Down</a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>

                </ul>
            </nav><!-- .nav-menu -->

            <a href="https://id.twitch.tv/oauth2/authorize?client_id=2n9u9j32o07bqgpgkyakmgy7hjdbsw&redirect_uri=http://localhost/profile&response_type=token&scope=viewing_activity_read&state=c3ab8aa609ea11e793ae92361f002671&force_verify=true" class="get-started-btn">Login</a>

        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
    import Home from '../Home.vue'
    import Login from '../Login.vue'
    export default{
        components: {
            Home, Login
        }
}
</script>
<style>
#header {
  background: #fff;
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
  box-shadow: 0px 0 18px rgba(55, 66, 59, 0.08);
}

#header .logo {
  font-size: 32px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
}

.mr-auto {
  color: #5fcf80;
}
@media (max-width: 992px) {
  #header .logo {
    font-size: 28px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu > ul {
  display: flex;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  padding: 10px 0 10px 24px;
}

.nav-menu a {
  display: block;
  position: relative;
  color: #37423b;
  transition: 0.3s;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
  color: #5fcf80;
}

.nav-menu .drop-down ul {
  display: block;
  position: absolute;
  left: 24px;
  top: calc(100% + 30px);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}

.nav-menu .drop-down:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.nav-menu .drop-down li {
  min-width: 180px;
  position: relative;
}

.nav-menu .drop-down ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  color: #37423b;
}

.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
  color: #5fcf80;
}

.nav-menu .drop-down > a:after {
  content: "\ea99";
  font-family: IcoFont;
  padding-left: 5px;
}

.nav-menu .drop-down .drop-down ul {
  top: 0;
  left: calc(100% - 30px);
}

.nav-menu .drop-down .drop-down:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
}

.nav-menu .drop-down .drop-down > a {
  padding-right: 35px;
}

.nav-menu .drop-down .drop-down > a:after {
  content: "\eaa0";
  font-family: IcoFont;
  position: absolute;
  right: 15px;
}

@media (max-width: 1366px) {
  .nav-menu .drop-down .drop-down ul {
    left: -90%;
  }
  .nav-menu .drop-down .drop-down:hover > ul {
    left: -100%;
  }
  .nav-menu .drop-down .drop-down > a:after {
    content: "\ea9d";
  }
}
.get-started-btn {
  margin-left: 22px;
  background: #5fcf80;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
}

.get-started-btn:hover {
  background: #3ac162;
  color: #fff;
}
@media (max-width: 768px) {
  .get-started-btn {
    margin: 0 48px 0 0;
    padding: 6px 18px;
  }
}
.home {
    text-decoration: none;
}
</style>
