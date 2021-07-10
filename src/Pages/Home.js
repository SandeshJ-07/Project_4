import React, { useState } from "react";
import Header from "../Components/Header";
import "../Assets/css/style.css";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Tabs from "../Components/tabs";
import { makeStyles } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import contact from "../Assets/img/contact.json";
import p1 from "../Assets/img/P1.jpg";
import p2 from "../Assets/img/P2.jpg";
import t1 from "../Assets/img/t1.jpg";
import t2 from "../Assets/img/t2.jpg";
import t3 from "../Assets/img/t3.jpg";
import t4 from "../Assets/img/t4.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Home = () => {
  const contactLottie = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const classes = useStyles();
  AOS.init();
  return (
    <>
      <Header />
      <div className="landing">
        <div className="overlay">
          <Container data-aos="zoom-out" data-aos-duration="1000">
            <p className="font-1" style={{ color: "yellow" }}>
              &#6673;
            </p>
            <p className="font-1" style={{ marginTop: "-8vh" }}>
              {" "}
              Accelero
            </p>
            <p className="font-2">Accelerate Your Start-Up With Us</p>
            <p style={{ width: "50%" }}>
              We are a group of people that use their Designing, Development and
              Marekting Skills to boost the start-ups and make them grow in the
              potential market.
            </p>
            <p>
              <Button
                className="btn"
                style={{
                  background: "yellow",
                  color: "black",
                  border: "none",
                  padding: "15px",
                  marginTop: "15px",
                }}
              >
                Register Now
              </Button>
            </p>
            <Row className="my-5">
              <Col
                lg="3"
                md="6"
                sm="6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Card className="skills justify-content-center">
                  <lord-icon
                    src="https://cdn.lordicon.com//nobciafz.json"
                    trigger="hover"
                    colors="primary:#dbdb00,secondary:#dbdb00"
                    style={{
                      width: "75px",
                      height: "75px",
                      alignSelf: "center",
                    }}
                  ></lord-icon>
                  <span>Experienced Members</span>
                </Card>
              </Col>
              <Col
                lg="3"
                md="6"
                sm="6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card className="skills justify-content-center">
                  <lord-icon
                    src="https://cdn.lordicon.com//fhtaantg.json"
                    trigger="hover"
                    colors="primary:#dbdb00,secondary:#dbdb00"
                    style={{
                      width: "75px",
                      height: "75px",
                      alignSelf: "center",
                    }}
                  ></lord-icon>
                  <span>Professional Environment</span>
                </Card>
              </Col>
              <Col
                lg="3"
                md="6"
                sm="6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Card className="skills justify-content-center">
                  <lord-icon
                    src="https://cdn.lordicon.com//rgyftmhc.json"
                    trigger="hover"
                    colors="primary:#dbdb00,secondary:#dbdb00"
                    style={{
                      width: "75px",
                      height: "75px",
                      alignSelf: "center",
                    }}
                  ></lord-icon>
                  <span>
                    Finest
                    <br /> Services
                  </span>
                </Card>
              </Col>
              <Col
                lg="3"
                md="6"
                sm="6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card className="skills justify-content-center">
                  <lord-icon
                    src="https://cdn.lordicon.com//iltqorsz.json"
                    trigger="hover"
                    colors="primary:#dbdb00,secondary:#dbdb00"
                    style={{
                      width: "75px",
                      height: "75px",
                      alignSelf: "center",
                    }}
                  ></lord-icon>
                  <span>
                    Best
                    <br /> Consultancy
                  </span>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="justify-content-center py-5" id="knowus">
        <Row>
          <Col md="7" sm="12" className="font-3">
            <h2>Know Us</h2>
            <br />
            <p>
              Accelero is a group of people with the goal of assisting start-ups
              in their growth in the market by providing resources and support
              in areas such as graphic design, web/app development, media and
              content management, and marketing. For a limited time, we offer
              free services in which start-ups have access to all resources that
              will help them establish roots among their possible target
              audience.
            </p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </Col>
          <Col md="5" sm="12" className="text-center" id="illustration">
            <iframe
              src="https://embed.lottiefiles.com/animation/58178"
              height="100%"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container>
        <section className="counts section-bg">
          <Row>
            <Col lg="3" md="6" sm="6" className="text-center">
              <div className="count-box">
                <CountUp end={150} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Happy Clients</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" className="text-center">
              <div className="count-box">
                <CountUp end={140} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Projects</p>
              </div>
            </Col>
            <Col lg="3" md="6"  sm="6" className="text-center" >
              <div className="count-box">
                <CountUp end={200} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Members</p>
              </div>
            </Col>
            <Col lg="3" md="6"  sm="6" className="text-center">
              <div className="count-box">
                <CountUp end={150} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Intership Provided</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <div className="services mb-5">
        <Container className="services-content py-5" id="services">
          <p
            className="font-2 head text-center mb-0"
            style={{ fontSize: "2.5rem" }}
          >
            Services
            <center>
              <hr
                width="10%"
                className=""
                style={{
                  background: "yellow",
                  opacity: "1",
                  marginTop: "0",
                  marginBottom: "2rem",
                }}
              />
            </center>
          </p>
          <p className="text-white text-center fs-5 mb-5" id="service-desc" >
            We provide excellent services with proper management team that
            nurtures your startup and make it grow to develop its roots
          </p>
          <Row className="" id="all_services">
            <Col md="6" sm="12">
              <Card className="service-card" data-aos="fade-up">
                <div className="icon ">
                  <lord-icon
                    src="https://cdn.lordicon.com//wloilxuq.json"
                    trigger="hover"
                    colors="primary:#e8e230,secondary:#ffffff"
                    style={{ width: "75px", height: "75px" }}
                  ></lord-icon>
                </div>
                <div>
                  <h5>Graphic Designing</h5>
                  <p>
                    We create graphics that bring your brand to life. We create
                    logos, letterheads, business cards, unique graphics, and
                    much more that draw people to your company and make a
                    positive impression on them.
                  </p>
                </div>
              </Card>
            </Col>
            <Col md="6" sm="12">
              <Card
                className="service-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon ">
                  <lord-icon
                    src="https://cdn.lordicon.com//qhgmphtg.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#e8e230"
                    style={{ width: "75px", height: "75px" }}
                  ></lord-icon>
                </div>
                <div>
                  <h5>Web/App Development</h5>
                  <p>
                    We design attractive UI and develop websites as per client's
                    requirement. We develop static as well as dynamic websites
                    having professional code and SEO. We also design UI for
                    applications.
                  </p>
                </div>
              </Card>
            </Col>
            <Col md="6" sm="12">
              <Card className="service-card" data-aos="fade-up">
                <div className="icon ">
                  <lord-icon
                    src="https://cdn.lordicon.com//tdxypxgp.json"
                    trigger="hover"
                    colors="primary:#e8e230,secondary:#ffffff"
                    style={{ width: "75px", height: "75px" }}
                  ></lord-icon>
                </div>
                <div>
                  <h5>Media &#38; Content</h5>
                  <p>
                    We manage your social platforms and help you get a larger
                    audience and increase your engagement. This way we build
                    your social presence and help you make an impact in larger
                    target audience.
                  </p>
                </div>
              </Card>
            </Col>
            <Col md="6" sm="12">
              <Card
                className="service-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon ">
                  <lord-icon
                    src="https://cdn.lordicon.com//uqpazftn.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#e8e230"
                    style={{ width: "75px", height: "75px" }}
                  ></lord-icon>
                </div>
                <div>
                  <h5>Marketing &#38; Management</h5>
                  <p>
                    We promote your brand using various techniques and bring
                    more potential clients for you. We believe in work ethics
                    and give you the best consultancy which helps you make a
                    presence.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mb-5" style={{ marginTop: "10rem" }}>
        <Tabs />
      </Container>
      <div className="pricing-section">
        <Container className="pricing-content py-5" od="pricing">
          <p
            className="font-2 head text-center mb-0"
            style={{ fontSize: "2.5rem" }}
          >
            Pricings
            <center>
              <hr
                width="10%"
                className=""
                style={{
                  background: "yellow",
                  opacity: "1",
                  marginTop: "0",
                  marginBottom: "2rem",
                }}
              />
            </center>
          </p>
          <Row className="pb-3"> 
            <Col md="4" sm="12" className="pricing-card">
              <Card className="text-center bg-dark text-light p-3 justify-content-center mb-5">
                <h3>Free Plan</h3>
                <p>
                  <span className="font-2">
                    <sup>$</sup>0
                  </span>
                  /month
                </p>
                <p className="card-list">
                  <li>Basic Website</li>
                  <li>Application UI Designs</li>
                  <li>One Social Media Handling</li>
                  <li>Marketing Consultancy</li>
                  <li>
                    <strike>SEO</strike>
                  </li>
                  <li>
                    <strike>E-mail Marketing</strike>
                  </li>
                </p>
                <Button
                  className="btn btn-warning my-3"
                  style={{ width: "50%", alignSelf: "center" }}
                >
                  Register Now
                </Button>
              </Card>
            </Col>
            <Col md="4" sm="12"  className="pricing-card">
              <Card className="text-center bg-warning text-dark p-3 justofy-content-center mb-5">
                <h3>Client Plan</h3>
                <p>
                  <span className="font-2">
                    <sup>$</sup>30
                  </span>
                  /month
                </p>
                <p className="card-list">
                  <li>Dynamic Website</li>
                  <li>Application Layout</li>
                  <li>Two Social Media Handling</li>
                  <li> Promotions</li>
                  <li>SEO Based Website</li>
                  <li>E-mail Marketing</li>
                </p>
                <Button
                  className="btn btn-dark my-3"
                  style={{ width: "50%", alignSelf: "center" }}
                >
                  Register Now
                </Button>
              </Card>
            </Col>
            <Col md="4" sm="12"  className="pricing-card">
              <Card className="text-center bg-dark text-light p-3 justify-content-center">
                <h3>Free Plan</h3>
                <p>
                  <span className="font-2">
                    <sup>$</sup>0
                  </span>
                  /month
                </p>
                <p className="card-list">
                  <li>Basic Website</li>
                  <li>Application UI Designs</li>
                  <li>One Social Media Handling</li>
                  <li>Marketing Consultancy</li>
                  <li>
                    <strike>SEO</strike>
                  </li>
                  <li>
                    <strike>E-mail Marketing</strike>
                  </li>
                </p>
                <Button
                  className="btn btn-warning my-3"
                  style={{ width: "50%", alignSelf: "center" }}
                >
                  Register Now
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5" id="projects">
        <p
          className="font-2 head text-center mb-0"
          style={{ fontSize: "2.5rem" }}
        >
          Our Projects
          <center>
            <hr
              width="10%"
              className=""
              style={{
                background: "yellow",
                opacity: "1",
                marginTop: "0",
                marginBottom: "2rem",
              }}
            />
          </center>
        </p>
        <p className="text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </p>
        <div className="projects mb-5 mt-4">
          <Row>
            <Col xl="4" md="6" sm="6" className="cards">
              <Card className="project-card">
                <img src={p1} alt="..." width="100%" />
                <div className="desc">
                  <p>Rectify</p>
                </div>
              </Card>
            </Col>
            <Col xl="4" md="6"  sm="6" className="cards">
              <Card className="project-card">
                <img src={p1} alt="..." width="100%" />
                <div className="desc">
                  <p>Rectify</p>
                </div>
              </Card>
            </Col>
            <Col xl="4" md="6" sm="6" className="cards">
              <Card className="project-card">
                <img src={p1} alt="..." width="100%" />
                <div className="desc">
                  <p>Rectify</p>
                </div>
              </Card>
            </Col>
            <Col xl="4" md="6" sm="6" className="cards">
              <Card className="project-card">
                <img src={p1} alt="..." width="100%" />
                <div className="desc">
                  <p>Rectify</p>
                </div>
              </Card>
            </Col>
            <Col xl="4" md="6" sm="6" className="cards">
              <Card className="project-card">
                <img src={p1} alt="..." width="100%" />
                <div className="desc">
                  <p>Rectify</p>
                </div>
              </Card>
            </Col>
            <Col xl="4" md="6" sm="6"  className="cards">
              <Card className="project-card">
                <img src={p1} alt="..." width="100%" />
                <div className="desc">
                  <p>Rectify</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="pricing-section py-5">
        <Container className="pricing-content" id="team">
          <p
            className="font-2 head text-center mb-0"
            style={{ fontSize: "2.5rem" }}
          >
            Our Team
            <center>
              <hr
                width="10%"
                className=""
                style={{
                  background: "yellow",
                  opacity: "1",
                  marginTop: "0",
                  marginBottom: "2rem",
                }}
              />
            </center>
          </p>
          <Row>
            <Col md="3" sm="6" className="mb-4"  className="teamCard">
              <Card>
                <img width="100%" src={t1} alt="Card image cap" />
                <CardBody>
                  <CardText>
                    <h4>P.V. Sharma</h4>
                    <p>CEO</p>
                  </CardText>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-instagram ig-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-facebook fb-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-linkedin ln-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <img
                      width="25"
                      alt="Gmail Icon (2013-2020)"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/512px-Gmail_Icon_%282013-2020%29.svg.png"
                    />
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col md="3" sm="6" className="teamCard">
              <Card>
                <img width="100%" src={t2} alt="Card" />
                <CardBody>
                  <CardText>
                    <h4>Ayu Shakya</h4>
                    <p>COO</p>
                  </CardText>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-instagram ig-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-facebook fb-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-linkedin ln-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <img
                      width="25"
                      alt="Gmail Icon (2013-2020)"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/512px-Gmail_Icon_%282013-2020%29.svg.png"
                    />
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col md="3" sm="6"  className="teamCard">
              <Card>
                <img width="100%" src={t3} alt="Card image cap" />
                <CardBody>
                  <CardText>
                    <h4>SR Jain</h4>
                    <p>CTO</p>
                  </CardText>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-instagram ig-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-facebook fb-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-linkedin ln-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <img
                      width="25"
                      alt="Gmail Icon (2013-2020)"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/512px-Gmail_Icon_%282013-2020%29.svg.png"
                    />
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col md="3" sm="6" className="teamCard">
              <Card>
                <img width="100%" src={t4} alt="Card image cap" />
                <CardBody>
                  <CardText>
                    <h4>Mohd. UK</h4>
                    <p>CMO</p>
                  </CardText>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-instagram ig-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-facebook fb-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-linkedin ln-bg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </CardLink>
                  <CardLink href="#">
                    <img
                      width="25"
                      alt="Gmail Icon (2013-2020)"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/512px-Gmail_Icon_%282013-2020%29.svg.png"
                    />
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5" id="contact">
        <p
          className="font-2 head text-center mb-0"
          style={{ fontSize: "2.5rem" }}
        >
          Contact Us
          <center>
            <hr
              width="10%"
              className=""
              style={{
                background: "yellow",
                opacity: "1",
                marginTop: "0",
                marginBottom: "2rem",
              }}
            />
          </center>
        </p>
        <Row className="align-items-center" style={{ marginTop: "-5%" }}>
          <Col xl="6" sm="12">
            <Lottie options={contactLottie} />
          </Col>
          <Col xl="6" sm="12">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="form-row">
                <div className="col form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  cols="10"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div className="validate"></div>
              </div>

              <div style={{ marginLeft: "auto" }}>
                <button type="submit" className="btn btn-warning ms-auto mb-4">
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <Container>
          <Row>
            <Col md="5" sm="12" className="py-4">
              <h3 className="">Accelero</h3>
              <hr width="20%" style={{ background: "yellow", opacity: "1" }} />
              <p>Accelerate Your Start-Up With Us</p>
              <p>
                We are a group of people that use their Designing, Development
                and Marekting Skills to boost the start-ups and make them grow
                in the potential market.
              </p>
              <br />
              <h5>Follow Us</h5>
              <CardLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-instagram ig-bg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </CardLink>
              <CardLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-facebook fb-bg"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </CardLink>
              <CardLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-linkedin ln-bg"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </CardLink>
              <CardLink href="#">
                <img
                  width="25"
                  alt="Gmail Icon (2013-2020)"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/512px-Gmail_Icon_%282013-2020%29.svg.png"
                />
              </CardLink>
            </Col>
            <Col md="3" sm="12" className="py-4">
              <h4>Quick Links</h4>
              <hr width="20%" style={{ background: "yellow", opacity: "1" }} />
              <ul className="footer-links">
                <li><a href="#knowus">Know Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#team">Our Team</a></li>
              </ul>
            </Col>
            <Col md="4" sm="12" className="py-4">
              <h4>Subscribe</h4>
              <hr width="20%" style={{ background: "yellow", opacity: "1" }} />
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
              <div class="subscribe-form">
                <form method="post" id="news">
                  <input type="hidden" name="csrfmiddlewaretoken" />
                  <input
                    type="email"
                    id="nemail"
                    name="nemail"
                    placeholder="Email Address"
                    style={{ height: "40px" }}
                  />
                  <br />
                  <button
                    type="submit"
                    className="btn-warning my-3"
                    style={{ height: "40px", borderRadius: "5%" }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
