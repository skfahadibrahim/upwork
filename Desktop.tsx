import { FunctionComponent } from "react";
import "./Desktop.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop">
      <header className="content">
        <img className="union-1-icon" alt="" src="/union-1@2x.png" />
        <img
          className="nav-bar-1"
          loading="lazy"
          alt=""
          src="/nav-bar-1@2x.png"
        />
      </header>
      <section className="body">
        <img
          className="frame-1249187406-1"
          loading="lazy"
          alt=""
          src="/frame-1249187406-1@2x.png"
        />
      </section>
      <section className="footer">
        <img
          className="frame-1249187451-1"
          loading="lazy"
          alt=""
          src="/frame-1249187451-1@2x.png"
        />
      </section>
    </div>
  );
};

export default Desktop;
