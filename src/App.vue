<template>
  <div id="app">
    <header class="container">
      <nav class="navbar navbar-expand-md navbar-light">
        <h1 class="mb-0">
          <router-link
            class="logo d-block"
            to="/"
          >
            PETPET
          </router-link>
        </h1>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/service"
              >
                預約服務
              </router-link>
              <!-- <a
                class="nav-link"
                href="#"
              >Home <span class="sr-only">(current)</span></a> -->
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
              >成為寵物保姆</a>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="login"
              >
                登入
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all";
.logo {
  background: url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/petpet-week8/logo.svg")
    no-repeat center;
  width: 121px;
  height: auto;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
.navbar-light {
  .navbar-nav {
    .nav-link {
      color: $primary;
      &.router-link-exact-active {
        color: $info;
      }
    }

  }
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
