import canUseDOM from "./canUseDOM";

function prepareClientPortals() {
  if (canUseDOM()) {
    Array.prototype.slice
      .call(document.querySelectorAll("[data-react-universal-portal]"))
      .forEach(
        /**
         *
         * @param {Element} node
         */
        function (node) {
          node.remove();
        },
      );
  }
}

export default prepareClientPortals;
