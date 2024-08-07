class MyHeader extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <header>
            <div class="row no-gutters">
                <a href="index.html" class="col-md-4 logo">

                </a>
                <div class="col-md-8">
                    <div class="row no-gutters bg-color-name-title">
                        <div class="col heading">
                            <h1 class="name">Gaurav Jagpal</h1>
                            <h2 class="title">Full Stack Developer</h2>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col">
                            <ul id="nav" class="list-inline menucontainer">
                                <li class="col-6 col-sm-2 list-inline-item ui-menu-color-home menuitem">
                                    <a href="index.html" class="hvr-sweep-to-bottom"><i class="fa fa-home" aria-hidden="true"></i><span>Home</span></a>
                                </li>    
                                <li class="col-6 col-sm-2 list-inline-item ui-menu-color-resume menuitem">
                                    <a href="resume.html" class="hvr-sweep-to-bottom"><i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Resume</span></a>
                                </li>
                                <li class="col-6 col-sm-2 list-inline-item ui-menu-color-contact menuitem">    
                                    <a href="contact.html" class="hvr-sweep-to-bottom"><i class="fa fa-comment-o" aria-hidden="true"></i><span>Contact</span></a>
                                </li>
                                <li class="col-6 col-sm-2 list-inline-item ui-menu-color-interests menuitem">
                                    <a href="interests.html" class="hvr-sweep-to-bottom"><i class="fa fa-users" aria-hidden="true"></i><span>Interests</span></a>
                                </li>
                                <li class="col-6 col-sm-2 list-inline-item ui-menu-color-github menuitem">
                                    <a href="github.html" class="hvr-sweep-to-bottom"><i class="fa fa-github" aria-hidden="true"></i><span>GitHub</span></a>
                                </li>
                                <li class="col-6 col-sm-2 list-inline-item ui-menu-color-download menuitem">    
                                    <a href="assets/cv/gaurav-jagpal-cv.pdf" class="hvr-sweep-to-bottom" target="_blank"><i class="fa fa-download" aria-hidden="true"></i><span>Download CV</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `
    }
    }
    
    customElements.define('my-header', MyHeader)