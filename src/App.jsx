import React, {Component} from 'react';

import "./App.scss";
import NavLinks from "./components/NavLinks";
import { languages, roles, writes, projects } from "./service/data.service.js";
import { draw } from "./service/canvas.service.js";

export default class App extends Component {
  state = {
    mode: "dark",
    role: "Computer Engineer"
  };
  currentPage = 0;
  pages;
  languageIndex = 0;
  roleIndex = 1;

  toggleMode = () => {
    const newMode = this.state.mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    this.setState({ mode: newMode });
  };
  submitMail = e => {
    e.preventDefault();
    const name = e.target.querySelector("[name=name]").value;

    const subject = e.target.querySelector("[name=subject]").value;
    const message = e.target.querySelector("[name=message]").value;
    window.location.href = `mailto:se.ayokunle@gmail.com?subject=${subject}&body=${message} from ${name}`;
  };
  componentDidMount() {
    const newMode = localStorage.getItem("mode");
    if (newMode) {
      this.setState({ mode: newMode });
    }

    this.pages = document.querySelectorAll(".page");
    this.isNavActive("/");
    draw();

    document.querySelectorAll(".nav-item").forEach(pageNav => {
      pageNav.addEventListener("click", () => {
        const scrollTo = pageNav.getAttribute("scrollto");

        this.scrollTo(scrollTo);
      });
    });

    window.addEventListener(
        "scroll",
        () => {
          // check for nav
          for (let i = 0; i < this.pages.length; i++) {
            const page = this.pages[i];

            if (this.isElementVisible(page.querySelector(".pageHead"))) {
              const scrollTo = page.getAttribute("page");

              this.isNavActive(scrollTo);
            }
          }

          // load items in view
          this.animateInView();
        },
        { passive: true }
    );

    //
    setInterval(() => {
      let newLanguageIndex = this.languageIndex + 1;

      if (newLanguageIndex > languages.length - 1) {
        newLanguageIndex = 0;
      }
      this.languageIndex = newLanguageIndex;

      // change text too

      this.setState({ role: roles[this.roleIndex] });

      let newRole = this.roleIndex + 1;
      if (newRole > roles.length - 1) {
        newRole = 0;
      }
      this.roleIndex = newRole;
    }, 3000);
  }
  /**check if element is visible in the view */
  isElementVisible = elem => {
    if (!elem) {
      return false;
    }

    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    // top elem edge is visible?
    let topVisible = coords.top > 0 && coords.top < windowHeight;

    // bottom elem edge is visible?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
  };
  animateInView = () => {
    document.querySelectorAll(".animate-in-view").forEach(el => {
      const isVisible = this.isElementVisible(el);

      if (isVisible) {
        const cl = el.getAttribute("animate");

        const newClass = (el.className + ` ${cl}`).replace(
            "animate-in-view",
            ""
        );
        el.className = newClass;
      }
    });
  };
  isNavActive = activeLink => {
    document.querySelectorAll(".nav-item").forEach(pageNav => {
      const scrollTo = pageNav.getAttribute("scrollto");

      const activeclass = pageNav.getAttribute("activeclass");
      if (activeLink === scrollTo) {
        if (!pageNav.className.match(activeclass)) {
          pageNav.className += ` ${activeclass}`;
        }
      } else {
        if (pageNav.className.match(activeclass)) {
          pageNav.className = pageNav.className.replace(activeclass, "");
        }
      }
    });
  };
  scrollTo = newPageId => {
    this.pages.forEach(page => {
      const pageAttr = page.getAttribute("page");

      if (newPageId === pageAttr) {
        page.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  render() {
    return (
        <div className={this.state.mode}>
          <div className="navbar-container ">
            <div className="container">
              <div className="navbar">
                <h3 className="header">
                  <img
                      src="/assets/mypic.jpeg"
                      className="profile-img"
                      alt="Sunmola Ayokunle"
                  />
                  <span className="h4 d-none d-md-inline ml-3">SA</span>
                </h3>
                <ul className="pl-0">
                  <li className="nav-link">
                  <span
                      scrollto="/"
                      className="nav-item mr-2 ml-2 cursor"
                      activeclass="text-primary"
                  >
                    home
                  </span>
                    <span
                        scrollto="/about"
                        className="nav-item mr-2 ml-2 cursor"
                        activeclass="text-primary"
                    >
                    about
                  </span>
                    <span
                        scrollto="/projects"
                        className="nav-item mr-2 ml-2 cursor"
                        activeclass="text-primary"
                    >
                    projects
                  </span>

                    <span className="cursor  pl-2  ml-2 d-md-none showmorenav">
                    <i
                        onClick={this.toggleOptions}
                        className="fa fa-angle-down"
                    ></i>
                    <span className="nav-showover border rounded">
                      <NavLinks
                          mode={this.state.mode}
                          toggleMode={this.toggleMode}
                      />
                    </span>
                  </span>
                    <span className="d-none d-md-inline">
                    <NavLinks
                        mode={this.state.mode}
                        toggleMode={this.toggleMode}
                    />
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <header className="page home font-weight-bold" page="/">
            <span className="pageHead"></span>
            <h1>
              Hello, I'm{" "}
              <span className="text-primary font-weight-bold">
              Sunmola Ayokunle.
            </span>
              <br />
              I'm a <b className="text-danger  pr-2 pl-2">{this.state.role}</b>
            </h1>

            <canvas></canvas>
          </header>
          <div className="page" page="/about">
            <div className="container">
            <span className="pageHead mt-2">
              <span className="pb-1  border-bottom text-secondary border-secondary h2 d-block">
                About
              </span>
              <br></br>

              <div className="row">
                <div className="col-md-6 col-lg-7 mt-4 ">
                  <div
                      className="animate-in-view h4"
                      animate="v-visible animated bounceInUp"
                  >
                    <span className="text-primary">Ayokunle</span> is a
                    computer Engineer and
                    professional Programmer who uses modern technologies to
                    build truly scalable applications that provide excellent
                    results. I'm also an Innovator of next-generation solutions,
                    systems and applications giving companies a competitive edge
                    and producing outstanding results for customers.
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 mt-4">
                  <div
                      className="animate-in-view"
                      animate="v-visible animated bounceInUp"
                  >
                    <img
                        src="/assets/mypic.jpeg"
                        className="profile-img profile-img-big rounded"
                        alt="Sunmola Ayokunle"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 text-center">
                  <br></br>
                  <br></br>
                  <span
                      className="border-bottom pb-1 text-secondary animate-in-view"
                      animate="v-visible animated zoomInRight"
                  >
                    I write :
                  </span>
                  <br></br>
                  <br></br>
                  <div
                      className="h5 animate-in-view"
                      animate="v-visible animated zoomInUp"
                  >
                    {writes.map((write, index) => {
                      return (
                          <span key={index} className="nowrap">
                          <span className="mr-2 ml-2 p-2">{write}</span>
                            {index !== writes.length - 1 ? (
                                <span className="text-muted">|</span>
                            ) : (
                                ""
                            )}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="col-12 col-md-6 text-center">
                  <br></br>
                  <br></br>
                  <span
                      className="border-bottom pb-1 text-secondary animate-in-view"
                      animate="v-visible animated zoomInRight"
                  >
                    Some of the technologies i use are:
                  </span>
                  <br></br>
                  <br></br>
                  <div
                      className="h5 animate-in-view"
                      animate="v-visible animated zoomInUp"
                  >
                    {languages.map((language, index) => {
                      return (
                          <span
                              key={index}
                              className={
                                  "mr-2 ml-2 " + language.title + "Class nowrap p-2"
                              }
                          >
                          <span
                              dangerouslySetInnerHTML={{ __html: language.icon }}
                          ></span>
                            {language.title}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </span>
            </div>
          </div>
          <div className="page" page="/projects">
            <div className="container">
            <span className="pageHead mt-2">
              <span className="pb-1  border-bottom text-secondary border-secondary h2 d-block">
                Projects
              </span>
              <br></br>
              <br></br>
              <div className="row">
                {projects.map((project, index) => {
                  return (
                      <div
                          key={index}
                          className="col-md-6 mt-2 animate-in-view"
                          animate="v-visible animated p-4 zoomInUp"
                      >
                        <div className="  pb-2 border-bottom">
                          Title: {project.title}
                          <br></br>
                          {project.company
                              ? "Company: " + project.company
                              : "Open Source"}
                          <br></br>
                          <br></br>
                          <span>
                          {project.tech.map((language, index) => {
                            return (
                                <span
                                    key={index}
                                    className={
                                        "mr-2 ml-2 " + language.title + "Class nowrap"
                                    }
                                >
                                <span
                                    dangerouslySetInnerHTML={{
                                      __html: language.icon
                                    }}
                                ></span>
                                  {language.title}
                              </span>
                            );
                          })}
                        </span>
                          <br></br>
                          <br></br>
                          <img
                              src={project.src}
                              alt={project.title}
                              className="project-img rounded"
                          />
                          <br></br>
                          <br></br>
                          <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-primary"
                          >
                            <i className="fa fa-link mr-1"></i>
                            Visit
                          </a>
                        </div>
                      </div>
                  );
                })}
              </div>
            </span>
            </div>
          </div>
          <div className="page" page="/contact">
            <div className="container">
            <span className="pageHead mt-2">
              <div className="text-center">
                <span className="pb-1  border-bottom text-secondary border-secondary h2">
                  {" "}
                  Have a question or want to work together?
                </span>
                <br></br>
                <br></br>
                <br></br>
                <div className="row">
                  <div className="col-md-2 col-lg-3"></div>
                  <div className="col-md-8 col-lg-6">
                    <form onSubmit={this.submitMail}>
                      <input
                          className="form-control"
                          required
                          name="name"
                          placeholder="Name"
                      />

                      <input
                          className="form-control mt-1"
                          required
                          name="subject"
                          placeholder="Enter Subject"
                      />
                      <textarea
                          className="form-control mt-1"
                          required
                          name="message"
                          placeholder="Enter Message"
                      ></textarea>
                      <br></br>

                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-envelope mr-2"></i>
                        Submit
                      </button>
                    </form>

                    <br></br>
                    <span className="pb-1 border-bottom">Contact</span>
                    <br></br>
                    <br></br>

                    <a href="tel:08130521289" className="nowrap mr-2 ml-2">
                      <i className="fa fa-phone mr-1"></i>
                      08130521289
                    </a>
                    <a
                        href="mailto:se.ayokunle@gmail.com"
                        className="nowrap mr-2 ml-2"
                    >
                      <i className="far fa-envelope mr-1"></i>
                      se.ayokunle@gmail.com
                    </a>
                    <a
                        href="https://twitter.com/ayotycoon"
                        className="nowrap mr-2 ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter mr-1"></i>
                      ayotycoon
                    </a>
                    <a
                        href="https://github.com/ayotycoon"
                        className="nowrap mr-2 ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <i className="fab fa-github mr-1"></i>
                      ayotycoon
                    </a>
                  </div>

                  <div className="col-md-2 col-lg-3"></div>
                </div>
              </div>
            </span>
            </div>
          </div>
        </div>
    );
  }
}
