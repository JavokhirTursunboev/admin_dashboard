import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Memebers</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="widgetSmImg"
            alt="img"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jack Smth</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="widgetSmImg"
            alt="img"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jack Smth</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="widgetSmImg"
            alt="img"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jack Smth</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="widgetSmImg"
            alt="img"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jack Smth</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="widgetSmImg"
            alt="img"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jack Smth</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
