"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _reactBootstrap = require("react-bootstrap");

var ReactBootstrap = _interopRequire(_reactBootstrap);

var Modal = _reactBootstrap.Modal;
var connect = require("react-redux").connect;
var _components = require("../../components");

var Nav = _components.Nav;
var Footer = _components.Footer;
var Header = _components.Header;
var Landing = (function (Component) {
    function Landing(props, context) {
        _classCallCheck(this, Landing);

        _get(Object.getPrototypeOf(Landing.prototype), "constructor", this).call(this, props, context);
        this.state = {};
    }

    _inherits(Landing, Component);

    _prototypeProperties(Landing, null, {
        render: {
            value: function render() {
                var courses = this.props.courses.map(function (course, i) {
                    return React.createElement(
                        "div",
                        { key: course.id, className: "col-md-12 bottommargin" },
                        React.createElement(
                            "div",
                            { className: "team team-list clearfix" },
                            React.createElement(
                                "div",
                                { className: "team-image", style: { width: 150 } },
                                React.createElement("img", { className: "img-circle", src: "https://media-service.appspot.com/site/images/" + course.image + "?crop=260", alt: "Velocity 360" })
                            ),
                            React.createElement(
                                "div",
                                { className: "team-desc" },
                                React.createElement(
                                    "div",
                                    { className: "team-title" },
                                    React.createElement(
                                        "h4",
                                        { style: { fontWeight: 400 } },
                                        React.createElement(
                                            "a",
                                            { href: "/course/" + course.slug },
                                            course.title
                                        )
                                    ),
                                    React.createElement(
                                        "span",
                                        { style: { color: "#444" } },
                                        course.dates
                                    ),
                                    React.createElement(
                                        "span",
                                        { style: { color: "#444" } },
                                        course.schedule
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "team-content" },
                                    course.description
                                )
                            )
                        )
                    );
                });

                return React.createElement(
                    "div",
                    null,
                    React.createElement(Nav, null),
                    React.createElement(Header, null),
                    React.createElement(
                        "section",
                        { id: "section-about", className: "page-section section nobg nomargin" },
                        React.createElement(
                            "div",
                            { className: "container clearfix" },
                            React.createElement(
                                "div",
                                { className: "heading-block bottommargin-lg center" },
                                React.createElement(
                                    "h4",
                                    null,
                                    "The Velocity Advantage"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_third" },
                                React.createElement(
                                    "div",
                                    { className: "heading-block fancy-title nobottomborder title-bottom-border" },
                                    React.createElement(
                                        "h4",
                                        null,
                                        "Why choose ",
                                        React.createElement(
                                            "span",
                                            null,
                                            "Us"
                                        )
                                    )
                                ),
                                React.createElement("img", { style: { maxWidth: 220, marginBottom: 12 }, src: "/images/class-3.jpg" }),
                                React.createElement(
                                    "p",
                                    null,
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis."
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_third" },
                                React.createElement(
                                    "div",
                                    { className: "heading-block fancy-title nobottomborder title-bottom-border" },
                                    React.createElement(
                                        "h4",
                                        null,
                                        "Industry ",
                                        React.createElement(
                                            "span",
                                            null,
                                            "Driven"
                                        )
                                    )
                                ),
                                React.createElement("img", { style: { maxWidth: 220, marginBottom: 12 }, src: "/images/class-2.jpg" }),
                                React.createElement(
                                    "p",
                                    null,
                                    "Technology, more than any other industry, changes rapidly and many fall behind. As a newcomer to tech, it is imperative to understand the trends and develop the skills that will be valued tomorrow over those in demand today. Velocity 360 strongly prepares students under that guiding principle. Our curriculum is highly focused on the bleeding edge of tech evolution: Node JS, React, and React Native."
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_third col_last" },
                                React.createElement(
                                    "div",
                                    { className: "heading-block fancy-title nobottomborder title-bottom-border" },
                                    React.createElement(
                                        "h4",
                                        null,
                                        "Modern ",
                                        React.createElement(
                                            "span",
                                            null,
                                            "Curriculum"
                                        )
                                    )
                                ),
                                React.createElement("img", { style: { maxWidth: 220, marginBottom: 12 }, src: "/images/react-wide.jpg" }),
                                React.createElement(
                                    "p",
                                    null,
                                    "While other bootcamps continue to teach Ruby on Rails (Dev Bootcamp, Flatiron School, General Assembly, NYCDA, App Academy, etc) and have been doing so for several years, Velocity 360 is the only bootcamp in NYC that focuses on the tremendously growing Node/React/React-Native ecosystem. Rather than joining the mass of Ruby on Rails devs that graduate from bootcamps every three months, you will leave Velocity 360 with the skills highly in demand yet hard to find in the tech world."
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { style: { background: "#f9f9f9", paddingTop: 48, borderTop: "1px solid #ddd" } },
                        React.createElement(
                            "div",
                            { className: "content-wrap", style: { paddingTop: 0 } },
                            React.createElement(
                                "h4",
                                { className: "center" },
                                "Our Students Currently Work At"
                            ),
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-3" },
                                        React.createElement("img", { style: { border: "1px solid #ddd", marginTop: 24 }, src: "/images/crains.png", alt: "Velocity 360" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-3" },
                                        React.createElement("img", { style: { border: "1px solid #ddd", marginTop: 24 }, src: "/images/bloomberg.png", alt: "Velocity 360" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-3" },
                                        React.createElement("img", { style: { border: "1px solid #ddd", marginTop: 24 }, src: "/images/nytimes.png", alt: "Velocity 360" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-md-3" },
                                        React.createElement("img", { style: { border: "1px solid #ddd", marginTop: 24 }, src: "/images/codeacademy.png", alt: "Velocity 360" })
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { style: { background: "#f9f9f9", paddingTop: 48, borderTop: "1px solid #ddd" } },
                        React.createElement(
                            "div",
                            { className: "heading-block center" },
                            React.createElement(
                                "h2",
                                { style: { fontWeight: 400 } },
                                "Bootcamps"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "content-wrap", style: { paddingTop: 0 } },
                            React.createElement(
                                "div",
                                { className: "container clearfix" },
                                courses
                            )
                        )
                    ),
                    React.createElement(Footer, null)
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Landing;
})(Component);

var stateToProps = function (state) {
    return {
        currentUser: state.profileReducer.currentUser,
        courses: state.courseReducer.courseArray
    };
};

module.exports = connect(stateToProps)(Landing);