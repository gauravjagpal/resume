class MyFooter extends HTMLElement {
	connectedCallback () {
		this.innerHTML = `
        <footer class="container-fluid">
            <div id="footer-details" class ="row">
                <div class="col-sm-4">
                    <h5 class="uppercase general-sub">About</h5>
                    <p class="inline-block">Full Stack Web Developer. Skills include HTML, CSS, JavaScript and Python.
                        Along with using toolkits such as Bootstrap and React.</p>
                </div>
                <div class="col-sm-4">
                    <h5 class="uppercase general-sub">Download</h5>
                    <p class="inline-block">Downlaod a printable version of my CV here.
                        <a href="#" target="_blank" class="cv-pdf">
                            <i class="fa fa-download" aria-hidden="true"></i>
                            <span class="sr-only">Download link.</span>
                        </a>
                    </p>
                </div>
                <div class="col-sm-4">
                    <h5 class="uppercase general-sub">Social</h5>
                    <ul class="list-inline social-links">
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.linkedin.com/in/gaurav-jagpal/">
                                <i class="fa fa-linkedin" aria-hidden="true">
                                    <span class="sr-only">LinkedIn</span>
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    `
	}
	}

	customElements.define('my-footer', MyFooter)