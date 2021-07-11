import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="justify-content-evenly" style={{border:"none", fontFamily:"font-2"}}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" }),"activeClass"}
            onClick={() => {
              toggle("1");
              document.getElementById("tab2").classList.remove("activeClass")
              document.getElementById("tab3").classList.remove("activeClass")
              if(!(document.getElementById("tab1").classList.contains("activeClass"))) {document.getElementById("tab1").classList.add("activeClass")};
            }}
            id="tab1"
          >
            Vision
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" }),"activeClass"}
            onClick={() => {
              toggle("2");
              document.getElementById("tab1").classList.remove("activeClass")
              document.getElementById("tab3").classList.remove("activeClass")
              if(!(document.getElementById("tab2").classList.contains("activeClass"))) {document.getElementById("tab2").classList.add("activeClass")};
            }}
            id="tab2"
          >
            Mission
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" }),"activeClass"}
            onClick={() => {
              toggle("3");
              document.getElementById("tab2").classList.remove("activeClass")
              document.getElementById("tab1").classList.remove("activeClass")
              if(!(document.getElementById("tab3").classList.contains("activeClass"))) {document.getElementById("tab3").classList.add("activeClass")};              
            }}
            id="tab3"
          >
            Goal
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col md="6" sm="12" className="p-5">
              <h4>VISION</h4>
              <p>
                We supply the required resources to companies that lack monetary
                cash or capital so that they may establish a win-win situation
                in the business.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
             
            </Col>
            <Col md="6" sm="12" className="text-center" id="illustration">
            <iframe src="https://embed.lottiefiles.com/animation/67523" height="100%"></iframe>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col md="6" sm="12" className="text-center" id="illustration">
            <iframe src="https://embed.lottiefiles.com/animation/60482" height="100%"></iframe>
            </Col>
            <Col md="6" sm="12" className="p-5">
              <h4>MISSION</h4>
              <p>
                We supply the required resources to companies that lack monetary
                cash or capital so that they may establish a win-win situation
                in the business.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
             
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col md="6" sm="12" className="p-5">
              <h4>GOAL</h4>
              <p>
                Our goal is maintaining the economy by expanding the number of
                job creators and paving the way for additional innovation
                focused on skills and practical accomplishments.{" "}
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </Col>
            <Col md="6" sm="12" className="text-center" id="illustration">
            <iframe src="https://embed.lottiefiles.com/animation/29693" height="100%"></iframe>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
