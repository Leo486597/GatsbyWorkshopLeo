import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.userName}`} />
          <About />
        </div>
        <h1 Hello world />
      </Layout>
    );
  }
}

export default AboutPage;
