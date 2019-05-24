import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  .iphone {
    box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #999,
      0 0 30px 0px rgba(0, 0, 0, 0.7);
    border: 5px solid #d9dbdc;
    background: #f8f8f8;
    padding: 15px;
    border-radius: 50px;
    height: 877px;
    width: 423px;
    position: relative;
    margin: 0 !important;
  }

  .iphone-top {
    padding: 5px 110px 40px;
    position: relative;
    .speaker {
      display: block;
      width: 70px;
      height: 6px;
      margin: 0 auto;
      border-radius: 6px;
      background: #292728;
    }

    .camera {
      display: block;
      margin: 0 auto;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      margin-bottom: 13px;
      background: #333;
    }

    .sensor {
      display: block;
      width: 15px;
      height: 15px;
      float: left;
      background: #333;
      margin-top: -5px;
      border-radius: 50%;
    }
  }

  .top-bar,
  .bottom-bar {
    display: block;
    width: 423px;
    height: 15px;
    border: {
      left: 5px solid #bbb;
      right: 5px solid #bbb;
    }
    position: absolute;
    left: -5px;
  }
  .top-bar {
    top: 65px;
  }

  .bottom-bar {
    bottom: 65px;
  }

  .iphone-screen {
    background: #eee;
    border: 1px solid #fff;
    height: 677px;
    width: 375px;
    margin: 0 auto;
    border: 2px solid rgba(0, 0, 0, 0.9);
    border-radius: 3px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .buttons {
    .on-off,
    .up,
    .down,
    .sleep {
      display: block;
      background: #ccc;
      position: absolute;
      border-radius: 2px 0px 0px 2px;
    }
    .on-off {
      height: 40px;
      width: 3px;
      top: 100px;
      left: -8px;
    }

    .up,
    .down,
    .sleep {
      height: 60px;
      width: 5px;
      left: -10px;
    }

    .up {
      top: 170px;
    }

    .down {
      top: 250px;
    }

    .sleep {
      left: auto;
      right: -10px;
      top: 170px;
      border-radius: 0px 2px 2px 0px;
    }
  }

  .iphone-bottom {
    padding: 10px 0 0;
    span {
      display: block;
      margin: 0 auto;
      width: 68px;
      height: 68px;
      background: #ccc;
      border-radius: 50%;
      background: linear-gradient(
        135deg,
        #303233 0%,
        #b5b7b9 50%,
        #f0f2f2 69%,
        #303233 100%
      );
      position: relative;
      &:after {
        content: "";
        display: block;
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 4px;
        top: 4px;
      }
    }
  }

  .demo-frame {
    height: 100%;
    width: 105%;
  }
`;

class Iphone extends Component {
  render() {
    return (
      <Wrapper>
        <div className="iphone">
          <div className="iphone-top">
            <span className="camera" />
            <span className="sensor" />
            <span className="speaker" />
          </div>
          <div className="top-bar" />
          <div className="iphone-screen">
            <iframe
              title="demo"
              className="demo-frame"
              src="https://www.localateur.com"
            />
          </div>
          <div className="buttons">
            <span className="on-off" />
            <span className="sleep" />
            <span className="up" />
            <span className="down" />
          </div>
          <div className="bottom-bar" />
          <div className="iphone-bottom">
            <span />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export { Iphone };
