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
                            <h2 class="title">Student Full Stack Developer</h2>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col">
                            <ul id="nav" class="list-inline menucontainer">
                                <li class="col-6 col-sm-3 list-inline-item ui-menu-color-home menuitem">
                                    <a href="#" class="hvr-sweep-to-bottom"><i class="fa fa-home" aria-hidden="true"></i><span>Home</span></a>
                                </li>    
                                <li class="col-6 col-sm-3 list-inline-item ui-menu-color-resume menuitem">
                                    <a href="#" class="hvr-sweep-to-bottom"><i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Resume</span></a>
                                </li>
                                <li class="col-6 col-sm-3 list-inline-item ui-menu-color-contact menuitem">    
                                    <a href="#" class="hvr-sweep-to-bottom"><i class="fa fa-comment-o" aria-hidden="true"></i><span>Contact</span></a>
                                </li>
                                <li class="col-6 col-sm-3 list-inline-item ui-menu-color-download menuitem">    
                                    <a href="#" class="hvr-sweep-to-bottom"><i class="fa fa-download" aria-hidden="true"></i><span>Download</span></a>
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