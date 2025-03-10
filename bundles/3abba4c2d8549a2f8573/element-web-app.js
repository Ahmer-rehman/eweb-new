(self.webpackChunkelement_web = self.webpackChunkelement_web || []).push([
  [2702],
  {
    "./node_modules/matrix-react-sdk/src/components/views/auth/AuthHeaderLogo.tsx":
      (e, t, s) => {
        "use strict";
        s.d(t, { A: () => o });
        var r = s("./node_modules/react/index.js"),
          n = s("./node_modules/matrix-react-sdk/src/SdkConfig.ts");
        class o extends r.PureComponent {
          render() {
            var e;
            const t = n.Ay.getObject("branding"),
              s =
                null !==
                  (e = null == t ? void 0 : t.get("auth_header_logo_url")) &&
                void 0 !== e
                  ? e
                  : "themes/element/img/logos/element-logo.svg";
            return r.createElement(
              "aside",
              { className: "mx_AuthHeaderLogo" },
              r.createElement("img", { src: s, alt: "Element" })
            );
          }
        }
      },
    "./node_modules/matrix-react-sdk/src/components/views/auth/AuthPage.tsx": (
      e,
      t,
      s
    ) => {
      "use strict";
      s.d(t, { A: () => d });
      var r = s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
        n = s("./node_modules/react/index.js"),
        o = s("./node_modules/matrix-react-sdk/src/SdkConfig.ts"),
        a = s("./src/languageHandler.tsx");
      const i = () => {
        var e;
        const t = o.Ay.getObject("branding"),
          s =
            null !== (e = null == t ? void 0 : t.get("auth_footer_links")) &&
            void 0 !== e
              ? e
              : [
                  { text: "Blog", url: "https://element.io/blog" },
                  { text: "Twitter", url: "https://twitter.com/element_hq" },
                  {
                    text: "GitHub",
                    url: "https://github.com/element-hq/element-web",
                  },
                ],
          r = [];
        for (const e of s)
          r.push(
            n.createElement(
              "a",
              {
                href: e.url,
                key: e.text,
                target: "_blank",
                rel: "noreferrer noopener",
              },
              e.text
            )
          );
        return n.createElement(
          "footer",
          { className: "mx_AuthFooter" ,role: "contentinfo" },
          r,
          n.createElement(
            "a",
            {
              href: "https://matrix.org",
              target: "_blank",
              rel: "noreferrer noopener",
            },
            (0, a._t)("powered_by_matrix")
          )
        );
      };
      class d extends n.PureComponent {
        static getWelcomeBackgroundUrl() {
          if (d.welcomeBackgroundUrl) return d.welcomeBackgroundUrl;
          const e = o.Ay.getObject("branding");
          d.welcomeBackgroundUrl = "https://firebasestorage.googleapis.com/v0/b/laaleh-2451e.appspot.com/o/bbb_logo.png?alt=media&token=efc3fcc3-6cf8-400c-b2fe-9a7907b58880";
          const t = null == e ? void 0 : e.get("welcome_background_url");
          if (t)
            if (Array.isArray(t)) {
              const e = Math.floor(Math.random() * t.length);
              d.welcomeBackgroundUrl = t[e];
            } else d.welcomeBackgroundUrl = t;
          return d.welcomeBackgroundUrl;
        }
        render() {
          const e = {
              background: `center/cover fixed url(${d.getWelcomeBackgroundUrl()})`,
            }
            // t = {
            //   position: "absolute",
            //   top: 0,
            //   right: 0,
            //   bottom: 0,
            //   left: 0,
            //   filter: "blur(40px)",
            //   background: e.background,
            // };
          return n.createElement(
            "div",
            { className: "mx_AuthPage", style: e },
            n.createElement(
              "div",
              {
                className: "mx_AuthPage_modal",
                style: { position: "relative", background: "initial" },
              },
              n.createElement("div", {
                className: "mx_AuthPage_modalBlur",
                style: t,
              }),
              n.createElement(
                "div",
                {
                  className: "mx_AuthPage_modalContent",
                  style: {
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",       // Corrected from 'alignitems' to 'alignItems'
                    justifyContent: "center",   // Corrected from 'justifycontent' to 'justifyContent'
                    alignContent: "center",     // Corrected from 'aligncontent' to 'alignContent'
                    zIndex: 1,
                    background: "rgba(255, 255, 255, 0.59)",
                    borderRadius: "8px",
                }
                
                },
                this.props.children
              )
            ),
            n.createElement(i, null)
          );
        }
      }
      (0, r.A)(d, "welcomeBackgroundUrl", void 0);
    },
    "./src/vector/app.tsx": (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { loadApp: () => C });
      s("./node_modules/matrix-js-sdk/src/browser-index.ts");
      var r = s("./node_modules/react/index.js"),
        n = s("./node_modules/matrix-react-sdk/src/PlatformPeg.ts"),
        o = s(
          "./node_modules/matrix-react-sdk/src/utils/AutoDiscoveryUtils.tsx"
        ),
        a = s("./node_modules/matrix-js-sdk/src/autodiscovery.ts"),
        i = s("./node_modules/matrix-react-sdk/src/Lifecycle.ts"),
        d = s("./node_modules/matrix-react-sdk/src/SdkConfig.ts"),
        c = s("./node_modules/matrix-js-sdk/src/logger.ts"),
        l = s("./node_modules/matrix-js-sdk/src/matrix.ts"),
        m = s("./node_modules/matrix-react-sdk/src/utils/SnakedObject.ts"),
        f = s(
          "./node_modules/matrix-react-sdk/src/components/structures/MatrixChat.tsx"
        ),
        u = s(
          "./node_modules/@matrix-org/react-sdk-module-api/lib/lifecycles/WrapperLifecycle.js"
        ),
        g = s("./node_modules/matrix-react-sdk/src/modules/ModuleRunner.ts"),
        _ = s("./src/vector/url_utils.ts");
      let x = null;
      function w(e) {
        const t = (0, _._)(e);
        return { screen: t.location.substring(1), params: t.params };
      }
      function v() {
        decodeURIComponent(window.location.hash) !== x &&
          (function (e) {
            if (!window.matrixChat) return;
            c.v.log("Routing URL ", e.href);
            const t = w(e);
            window.matrixChat.showScreen(t.screen, t.params);
          })(window.location);
      }
      function h(e, t = !1) {
        c.v.log("newscreen " + e);
        const s = "#/" + e;
        (x = s),
          e.startsWith("room/") &&
            window.location.hash.includes("/$") === s.includes("/$") &&
            window.location.hash.startsWith(s) &&
            (t = !0),
          t ? window.location.replace(s) : window.location.assign(s);
      }
      const k = "mx_screen_after_login";
      function p(e) {
        const t = w(e);
        (t.screen || t.params) &&
          (function (e) {
            null != e &&
              e.screen &&
              sessionStorage.setItem(k, JSON.stringify(e));
          })(t);
        const s = (function () {
          const e = sessionStorage.getItem(k);
          return e ? JSON.parse(e) : void 0;
        })();
        return s;
      }
      var b = s("./src/languageHandler.tsx");
      function y() {
        const e = new URL(window.location.href);
        e.searchParams.delete("loginToken"),
          e.searchParams.delete("state"),
          e.searchParams.delete("code"),
          c.v.log(
            `Redirecting to ${e.href} to drop delegated authentication params from queryparams`
          ),
          window.history.replaceState(null, "", e.href);
      }
      async function C(e, t) {
        var s;
        window.addEventListener("hashchange", v);
        const x = n.A.get(),
          k = (0, _.u)(window.location),
          C =
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname;
        c.v.log("Vector starting at " + C), x.startUpdater();
        const A = await (async function () {
            let e;
            try {
              c.v.log("Verifying homeserver configuration");
              const t = d.Ay.get();
              let s = t.default_server_config;
              const r = t.default_server_name,
                n = t.default_hs_url,
                i = t.default_is_url,
                l = [s, r, n].filter((e) => !!e);
              if (n && (s || r))
                throw new b.P7("error|invalid_configuration_mixed_server");
              if (l.length < 1)
                throw new b.P7("error|invalid_configuration_no_server");
              let m;
              n &&
                (c.v.log(
                  "Config uses a default_hs_url - constructing a default_server_config using this information"
                ),
                c.v.warn(
                  "DEPRECATED CONFIG OPTION: In the future, default_hs_url will not be accepted. Please use default_server_config instead."
                ),
                (s = { "m.homeserver": { base_url: n } }),
                i && (s["m.identity_server"] = { base_url: i })),
                !r &&
                  s &&
                  (c.v.log(
                    "Config uses a default_server_config - validating object"
                  ),
                  (m = await a.MN.fromDiscoveryConfig(s))),
                r &&
                  (c.v.log(
                    "Config uses a default_server_name - doing .well-known lookup"
                  ),
                  c.v.warn(
                    "DEPRECATED CONFIG OPTION: In the future, default_server_name will not be accepted. Please use default_server_config instead."
                  ),
                  (m = await a.MN.findClientConfig(r)),
                  null === m["m.homeserver"].base_url &&
                    s &&
                    (c.v.log(
                      "Finding base_url failed but a default_server_config was found - using it as a fallback"
                    ),
                    (m = await a.MN.fromDiscoveryConfig(s)))),
                (e = await o.A.buildValidatedConfigFromDiscovery(r, m, !0));
            } catch (t) {
              const { hsUrl: s, isUrl: r, userId: n } = await i.yl();
              if (!s || !n) throw t;
              c.v.error(t),
                c.v.warn(
                  "A session was found - suppressing config error and using the session's homeserver"
                ),
                c.v.log("Using pre-existing hsUrl and isUrl: ", {
                  hsUrl: s,
                  isUrl: r,
                }),
                (e = await o.A.validateServerConfigWithStaticUrls(s, r, !0));
            }
            return (
              (e.isDefault = !0),
              c.v.log("Using homeserver config:", e),
              c.v.log(
                "Updating SdkConfig with validated discovery information"
              ),
              d.Ay.add({ validated_server_config: e }),
              d.Ay.get()
            );
          })(),
          U = new m.Q(A),
          [E] = await i.hP(),
          P = !!E,
          N = !!k.loginToken,
          S = (0, d.Hy)(A);
        let O = !0 === S.immediate;
        const j =
          "#/welcome" === window.location.hash ||
          "#" === window.location.hash ||
          "" === window.location.hash;
        if ((!O && S.on_welcome_page && j && (O = !0), !P && !N && O)) {
          c.v.log("Bypassing app load to redirect to SSO");
          const e = (0, l.createClient)({
            baseUrl: A.validated_server_config.hsUrl,
            idBaseUrl: A.validated_server_config.isUrl,
          });
          return (
            n.A.get().startSingleSignOn(
              e,
              "sso",
              `/${w(window.location).screen}`
            ),
            r.createElement(r.Fragment, null)
          );
        }
        const D =
            null !== (s = U.get("default_device_display_name")) && void 0 !== s
              ? s
              : null == x
              ? void 0
              : x.getDefaultDeviceDisplayName(),
          I = p(window.location),
          B = { Wrapper: r.Fragment };
        return (
          g.r.instance.invoke(u.m.Wrapper, B),
          r.createElement(
            B.Wrapper,
            null,
            r.createElement(f.A, {
              ref: t,
              onNewScreen: h,
              config: A,
              realQueryParams: k,
              startingFragmentQueryParams: e,
              enableGuest: !A.disable_guests,
              onTokenLoginCompleted: y,
              initialScreenAfterLogin: I,
              defaultDeviceDisplayName: D,
            })
          )
        );
      }
      (window.React = r),
        c.v.log("Application is running in production mode"),
        (window.matrixLogger = c.v);
    },
    "./node_modules/matrix-react-sdk/src/effects lazy recursive ^\\.\\/.*$ referencedExports: default":
      (e, t, s) => {
        var r = {
          "./": ["./node_modules/matrix-react-sdk/src/effects/index.ts", 9],
          "./ICanvasEffect": [
            "./node_modules/matrix-react-sdk/src/effects/ICanvasEffect.ts",
            7,
            7356,
          ],
          "./ICanvasEffect.ts": [
            "./node_modules/matrix-react-sdk/src/effects/ICanvasEffect.ts",
            7,
            7356,
          ],
          "./confetti": [
            "./node_modules/matrix-react-sdk/src/effects/confetti/index.ts",
            9,
            2727,
          ],
          "./confetti/": [
            "./node_modules/matrix-react-sdk/src/effects/confetti/index.ts",
            9,
            2727,
          ],
          "./confetti/index": [
            "./node_modules/matrix-react-sdk/src/effects/confetti/index.ts",
            9,
            2727,
          ],
          "./confetti/index.ts": [
            "./node_modules/matrix-react-sdk/src/effects/confetti/index.ts",
            9,
            2727,
          ],
          "./effect": [
            "./node_modules/matrix-react-sdk/src/effects/effect.ts",
            9,
            7121,
          ],
          "./effect.ts": [
            "./node_modules/matrix-react-sdk/src/effects/effect.ts",
            9,
            7121,
          ],
          "./fireworks": [
            "./node_modules/matrix-react-sdk/src/effects/fireworks/index.ts",
            9,
            3191,
          ],
          "./fireworks/": [
            "./node_modules/matrix-react-sdk/src/effects/fireworks/index.ts",
            9,
            3191,
          ],
          "./fireworks/index": [
            "./node_modules/matrix-react-sdk/src/effects/fireworks/index.ts",
            9,
            3191,
          ],
          "./fireworks/index.ts": [
            "./node_modules/matrix-react-sdk/src/effects/fireworks/index.ts",
            9,
            3191,
          ],
          "./hearts": [
            "./node_modules/matrix-react-sdk/src/effects/hearts/index.ts",
            9,
            2766,
          ],
          "./hearts/": [
            "./node_modules/matrix-react-sdk/src/effects/hearts/index.ts",
            9,
            2766,
          ],
          "./hearts/index": [
            "./node_modules/matrix-react-sdk/src/effects/hearts/index.ts",
            9,
            2766,
          ],
          "./hearts/index.ts": [
            "./node_modules/matrix-react-sdk/src/effects/hearts/index.ts",
            9,
            2766,
          ],
          "./index": [
            "./node_modules/matrix-react-sdk/src/effects/index.ts",
            9,
          ],
          "./index.ts": [
            "./node_modules/matrix-react-sdk/src/effects/index.ts",
            9,
          ],
          "./rainfall": [
            "./node_modules/matrix-react-sdk/src/effects/rainfall/index.ts",
            9,
            1696,
          ],
          "./rainfall/": [
            "./node_modules/matrix-react-sdk/src/effects/rainfall/index.ts",
            9,
            1696,
          ],
          "./rainfall/index": [
            "./node_modules/matrix-react-sdk/src/effects/rainfall/index.ts",
            9,
            1696,
          ],
          "./rainfall/index.ts": [
            "./node_modules/matrix-react-sdk/src/effects/rainfall/index.ts",
            9,
            1696,
          ],
          "./snowfall": [
            "./node_modules/matrix-react-sdk/src/effects/snowfall/index.ts",
            9,
            7609,
          ],
          "./snowfall/": [
            "./node_modules/matrix-react-sdk/src/effects/snowfall/index.ts",
            9,
            7609,
          ],
          "./snowfall/index": [
            "./node_modules/matrix-react-sdk/src/effects/snowfall/index.ts",
            9,
            7609,
          ],
          "./snowfall/index.ts": [
            "./node_modules/matrix-react-sdk/src/effects/snowfall/index.ts",
            9,
            7609,
          ],
          "./spaceinvaders": [
            "./node_modules/matrix-react-sdk/src/effects/spaceinvaders/index.ts",
            9,
            1305,
          ],
          "./spaceinvaders/": [
            "./node_modules/matrix-react-sdk/src/effects/spaceinvaders/index.ts",
            9,
            1305,
          ],
          "./spaceinvaders/index": [
            "./node_modules/matrix-react-sdk/src/effects/spaceinvaders/index.ts",
            9,
            1305,
          ],
          "./spaceinvaders/index.ts": [
            "./node_modules/matrix-react-sdk/src/effects/spaceinvaders/index.ts",
            9,
            1305,
          ],
          "./utils": [
            "./node_modules/matrix-react-sdk/src/effects/utils.ts",
            9,
          ],
          "./utils.ts": [
            "./node_modules/matrix-react-sdk/src/effects/utils.ts",
            9,
          ],
        };
        function n(e) {
          if (!s.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            n = t[0];
          return Promise.all(t.slice(2).map(s.e)).then(() => s.t(n, 16 | t[1]));
        }
        (n.keys = () => Object.keys(r)),
          (n.id =
            "./node_modules/matrix-react-sdk/src/effects lazy recursive ^\\.\\/.*$ referencedExports: default"),
          (e.exports = n);
      },
    "?d4c0": () => {},
  },
]);
//# sourceMappingURL=element-web-app.js.map
