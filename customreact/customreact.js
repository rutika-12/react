const { Children } = require("react");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click",
};

const mainContainer = document.querySelector("root");
