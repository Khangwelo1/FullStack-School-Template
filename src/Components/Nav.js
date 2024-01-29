import ContactDisplay from "./ContactDisplay";

function Nav() {
    return(
    <div>
    <main>
      <nav class="main-menu">
        <h1>SEBETJA</h1>
        <ul>
          <li class="nav-item active">
            <b></b>
            <b></b>
            <a href="#">
              <i class="fa fa-house nav-icon"></i>
              <span class="nav-text">Dashboard</span>
            </a>
          </li>

          <li class="nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <i class="fa fa-user nav-icon"></i>
              <span class="nav-text">Blog</span>
            </a>
          </li>

          <li class="nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <i class="fa fa-calendar-check nav-icon"></i>
              <span class="nav-text">About</span>
            </a>
          </li>

          <li class="nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <i class="fa fa-person-running nav-icon"></i>
              <span class="nav-text">Contact</span>
            </a>
          </li>

          <li class="nav-item">
            <b></b>
            <b></b>
            <a href="#">
              <i class="fa fa-sliders nav-icon"></i>
              <span class="nav-text">Gallery</span>
            </a>
          </li>
        </ul>
      </nav>

      <section class="content">
        <div class="left-content">

            <ContactDisplay />

        </div>
      </section>
    </main>

  </div>
    );
}
export default Nav;


