import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import App from "next/app";
import MainLayout from "../components/layouts/main";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  faUser,
  faSearch,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
library.add(faUser, faFacebookF, faInstagram, faSearch, faShoppingBag);

class Index extends App {
  render() {
    const { Component, pageProps } = this.props;
    // const Layout = Component.Layout || null;
    return (
      <div>
        <Head>
          <title>TheDragonFly</title>
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    );
  }
}
export default Index;
