"use strict";
(self.webpackChunkelement_web = self.webpackChunkelement_web || []).push([
  [5607],
  {
    "./src/async-components/structures/ErrorView.tsx": (e, t, a) => {
      a.r(t), a.d(t, { default: () => s });
      var m = a("./node_modules/react/index.js"),
        l = a("./src/languageHandler.tsx");
      const s = ({ title: e, messages: t }) =>
        m.createElement(
          "div",
          { className: "mx_ErrorView" },
          m.createElement(
            "div",
            { className: "mx_ErrorView_container" },
            m.createElement(
              "div",
              { className: "mx_HomePage_header" },
              m.createElement(
                "span",
                { className: "mx_HomePage_logo" },
                m.createElement("img", {
                  height: "42",
                  src: "themes/element/img/logos/element-logo.svg",
                  alt: "Element",
                })
              ),
              m.createElement("h1", null, (0, l._t)("failed_to_start"))
            ),
            m.createElement(
              "div",
              { className: "mx_HomePage_col" },
              m.createElement(
                "div",
                { className: "mx_HomePage_row" },
                m.createElement(
                  "div",
                  null,
                  m.createElement("h2", { id: "step1_heading" }, e),
                  t && t.map((e) => m.createElement("p", { key: e }, e))
                )
              )
            ),
            m.createElement(
              "div",
              { className: "mx_HomePage_row mx_Center mx_Spacer" },
              m.createElement(
                "p",
                { className: "mx_Spacer" },
                m.createElement(
                  "a",
                  {
                    href: "https://element.io",
                    target: "_blank",
                    className: "mx_FooterLink",
                  },
                  (0, l._t)("go_to_element_io")
                )
              )
            )
          )
        );
    },
  },
]);
//# sourceMappingURL=error-view.js.map
