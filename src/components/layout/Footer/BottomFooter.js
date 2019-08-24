import React, { Component } from 'react'
import { columns, column } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import logo1 from '../../../img/logo1.svg'
import umaiinsta from '../../../img/insta.svg'
import umailinked from '../../../img/linked.svg'

const BottomFooter = () => {

  return (
      <footer className="section" id="footer-btm">
          <div className="container content has-text-centered">
              <div className="columns">
                <div className="column is-3">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white" id="mainFooter">ZURICH </h1>
                      <div className="content">
                        <div className="subtitle is-5 has-text-white">
                          <div className="has-text-left has-text-weight-light">
                              <p className="has-text-left" id="mainFooter"><strong className="has-text-white">Product</strong></p>
                              <p className="has-text-left" id="mainFooter">Clients</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white" id="mainFooter">SINGAPORE</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-white">
                                    <p className="has-text-left" id="mainFooter"><strong className="has-text-white">additiv Asia Pte. Ltd.</strong></p>
                                    <p className="has-text-left" id="mainFooter">168 Robinson Road,</p>
                                    <p className="has-text-left" id="mainFooter">#12-01, Capital Tower</p>
                                    <p className="has-text-left" id="mainFooter">Singapore 068912</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white" id="mainFooter">FRANKFURT</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-white">
                                    <p className="has-text-left" id="mainFooter"><strong className="has-text-white">additiv GmbH</strong></p>
                                    <p className="has-text-left" id="mainFooter">Kaiserhofstraße 16</p>
                                    <p className="has-text-left" id="mainFooter">60313 Frankfurt</p>
                                    <p className="has-text-left" id="mainFooter">Germany</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                    <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-white" id="mainFooter">BUCURESTI</h1>
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-white">
                                    <p className="has-text-left" id="mainFooter"><strong className="has-text-white">additiv TECH SRL</strong></p>
                                    <p className="has-text-left" id="mainFooter">City Business Center</p>
                                    <p className="has-text-left" id="mainFooter">Bulevardul Nerva Traian nr. 3</p>
                                    <p className="has-text-left" id="mainFooter">Bucuresti</p>
                                    <p className="has-text-left" id="mainFooter">Romania</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <section className="section">
              <div className="container">
                  <div className="content">
                    <hr className="hr-footer" />
                  </div>
              </div>
          </section>
          <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-half">
                    <div className="content">
                        <div className="subtitle is-5 has-text-white">
                            <p className="has-text-left has-text-weight-light has-text-white">
                                <a href="#" className="has-text-right has-text-white" id="mainFooter">Copyright © 2019 additiv AG and/or its affiliates. All rights reserved.</a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
      </footer>
  );
}

export default BottomFooter;
