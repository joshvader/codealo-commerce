import React from 'react'

const Header = () => {
    return (
        <header className="main-header">
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-cols-4 lg-cols-1 s-cross-center">
                    <a href="/">
                        <img className="main-logo" src="https://media.istockphoto.com/vectors/cupcake-icon-vector-id664864498?b=1&k=20&m=664864498&s=612x612&w=0&h=0d_epUW0U-mwnthY4orp9C_o_LwTgSIL9Qg9hV5eVoY=" alt="Logo EDcupcake" />
                    </a>
                </div>
                <div class="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links white-color">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li ><a href="https://www.starwars.com" target="_blank">Inicio</a></li>
            </ul>
          </nav>
          <div class="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>

            



        </header>
    )
}

export default Header
