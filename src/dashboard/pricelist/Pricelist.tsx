// import React from 'react'

import Menu from "./Menu";
import "./menu.scss";
import "./pricelist.scss";
import Table from "./Table"
const Nameblock = () =>(
  <div className="nameblock">
          <div className="profileimg">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div>.</div>
          </div>
          <div className="profilename">
            <span>John Doe</span>
            <span>Staefiord AS</span>
          </div>
        </div>
)
const Pricelist = () => {
  
  return (
    <div className="pricelist">
      <div className="navbar">
        <Nameblock/>
        <div className="lang">
          <span>English</span>
          <img
            src="https://storage.123fakturere.no/public/flags/GB.png"
            alt=""
          />
        </div>
      </div>

      <div className="content">
        <Menu />
        <div className="main">
          <div className="top">
            <div className="left">
              <div className="inputs">
                <input type="text" placeholder="Search Article No" />
                <img src="/assets/magnifying-glass.png" alt="" />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Search Product" />
                <img src="/assets/magnifying-glass.png" alt="" />
              </div>
            </div>
            <div className="right">
              <div className="options">
                <p>New Product</p>
                <img src="/assets/plus.png" alt="" />
              </div>
              <div className="options">
                <p>Print List</p>
                <img src="/assets/printer.png" alt="" />
              </div>
              <div className="options">
                <p>Advanced Mode</p>
                <img src="/assets/toggle-button.png" alt="" />
              </div>
            </div>
          </div>
          <div className="body">
          <Table/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
