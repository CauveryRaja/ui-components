import React, { createRef } from "react";
import "./styles.css";

const withReveal = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.intersectionHandler = this.intersectionHandler.bind(this);

      this.state = {
        isIntersecting: false,
        observer: new IntersectionObserver(this.intersectionHandler, {
          // rootMargin: "50px",
        }),
        ref: createRef(null),
      };
    }

    // static getDerivedStateFromProps(props, state) {
    //   return {};
    // }

    componentDidMount() {
      console.log("mounting", this.state);
      this.state.observer.observe(this.state.ref.current);
    }

    componentDidUpdate() {
      console.log("updating", this.state);
    }

    componentWillUnmount() {
      console.log("unmounting", this.state);
      this.state.observer.disconnect();
    }

    intersectionHandler([entry]) {
      console.log(
        "tracking intersection",
        entry,
        entry.isIntersecting,
        this.state.ref.current
      );
      this.setState({
        isIntersecting: entry.isIntersecting,
      });
    }

    render() {
      return (
        <section
          ref={this.state.ref}
          className={`wrapper ${
            this.state.isIntersecting ? "intersecting" : ""
          }`}
        >
          <Component />
        </section>
      );
    }
  };
};

export default withReveal;
