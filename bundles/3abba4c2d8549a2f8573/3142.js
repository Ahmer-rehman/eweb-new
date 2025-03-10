/*! For license information please see 3142.js.LICENSE.txt */
(self.webpackChunkelement_web = self.webpackChunkelement_web || []).push([[3142], {
    "./node_modules/@matrix-org/olm/olm.js": function(e, t) {
        var n, o, r, i, s, a, l = (s = {},
        r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0,
        "undefined" != typeof __filename && (r = r || __filename),
        a = function(t) {
            var i, a, l, _;
            if (t = t || {},
            i || (i = void 0 !== t ? t : {}),
            i.ready = new Promise((function(e, t) {
                a = e,
                l = t
            }
            )),
            "undefined" != typeof window)
                _ = function(e) {
                    window.crypto.getRandomValues(e)
                }
                ;
            else {
                if (!e.exports)
                    throw Error("Cannot find global to attach library to");
                var u = require("crypto");
                _ = function(e) {
                    var t = u.randomBytes(e.length);
                    e.set(t)
                }
            }
            if ("undefined" != typeof OLM_OPTIONS)
                for (var c in OLM_OPTIONS)
                    OLM_OPTIONS.hasOwnProperty(c) && (i[c] = OLM_OPTIONS[c]);
            i.onRuntimeInitialized = function() {
                xe = i._olm_error(),
                s.PRIVATE_KEY_LENGTH = i._olm_pk_private_key_length(),
                n && n()
            }
            ,
            i.onAbort = function(e) {
                o && o(e)
            }
            ;
            var p, m, d, h, b, y, f = Object.assign({}, i), g = "object" == typeof window, k = "function" == typeof importScripts, w = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, v = "";
            w ? (v = k ? require("path").dirname(v) + "/" : __dirname + "/",
            y = ()=>{
                b || (h = require("fs"),
                b = require("path"))
            }
            ,
            p = function(e, t) {
                return y(),
                e = b.normalize(e),
                h.readFileSync(e, t ? void 0 : "utf8")
            }
            ,
            d = e=>((e = p(e, !0)).buffer || (e = new Uint8Array(e)),
            e),
            m = (e,t,n)=>{
                y(),
                e = b.normalize(e),
                h.readFile(e, (function(e, o) {
                    e ? n(e) : t(o.buffer)
                }
                ))
            }
            ,
            1 < process.argv.length && process.argv[1].replace(/\\/g, "/"),
            process.argv.slice(2),
            process.on("uncaughtException", (function(e) {
                throw e
            }
            )),
            process.on("unhandledRejection", (function(e) {
                throw e
            }
            )),
            i.inspect = function() {
                return "[Emscripten Module object]"
            }
            ) : (g || k) && (k ? v = self.location.href : "undefined" != typeof document && document.currentScript && (v = document.currentScript.src),
            r && (v = r),
            v = 0 !== v.indexOf("blob:") ? v.substr(0, v.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
            p = e=>{
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1),
                t.send(null),
                t.responseText
            }
            ,
            k && (d = e=>{
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1),
                t.responseType = "arraybuffer",
                t.send(null),
                new Uint8Array(t.response)
            }
            ),
            m = (e,t,n)=>{
                var o = new XMLHttpRequest;
                o.open("GET", e, !0),
                o.responseType = "arraybuffer",
                o.onload = ()=>{
                    200 == o.status || 0 == o.status && o.response ? t(o.response) : n()
                }
                ,
                o.onerror = n,
                o.send(null)
            }
            ),
            i.print || console.log.bind(console);
            var x, A = i.printErr || console.warn.bind(console);
            Object.assign(i, f),
            f = null,
            i.wasmBinary && (x = i.wasmBinary),
            i.noExitRuntime,
            "object" != typeof WebAssembly && Y("no native wasm support detected");
            var S, $, C, E, U, R, T, O, I, P = !1, N = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function M(e, t) {
                if (e) {
                    var n = E
                      , o = e + t;
                    for (t = e; n[t] && !(t >= o); )
                        ++t;
                    if (16 < t - e && n.buffer && N)
                        e = N.decode(n.subarray(e, t));
                    else {
                        for (o = ""; e < t; ) {
                            var r = n[e++];
                            if (128 & r) {
                                var i = 63 & n[e++];
                                if (192 == (224 & r))
                                    o += String.fromCharCode((31 & r) << 6 | i);
                                else {
                                    var s = 63 & n[e++];
                                    65536 > (r = 224 == (240 & r) ? (15 & r) << 12 | i << 6 | s : (7 & r) << 18 | i << 12 | s << 6 | 63 & n[e++]) ? o += String.fromCharCode(r) : (r -= 65536,
                                    o += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r))
                                }
                            } else
                                o += String.fromCharCode(r)
                        }
                        e = o
                    }
                } else
                    e = "";
                return e
            }
            function z(e, t, n, o) {
                if (!(0 < o))
                    return 0;
                var r = n;
                o = n + o - 1;
                for (var i = 0; i < e.length; ++i) {
                    var s = e.charCodeAt(i);
                    if (55296 <= s && 57343 >= s && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++i)),
                    127 >= s) {
                        if (n >= o)
                            break;
                        t[n++] = s
                    } else {
                        if (2047 >= s) {
                            if (n + 1 >= o)
                                break;
                            t[n++] = 192 | s >> 6
                        } else {
                            if (65535 >= s) {
                                if (n + 2 >= o)
                                    break;
                                t[n++] = 224 | s >> 12
                            } else {
                                if (n + 3 >= o)
                                    break;
                                t[n++] = 240 | s >> 18,
                                t[n++] = 128 | s >> 12 & 63
                            }
                            t[n++] = 128 | s >> 6 & 63
                        }
                        t[n++] = 128 | 63 & s
                    }
                }
                return t[n] = 0,
                n - r
            }
            function L(e, t, n) {
                return z(e, E, t, n)
            }
            function j(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var o = e.charCodeAt(n);
                    127 >= o ? t++ : 2047 >= o ? t += 2 : 55296 <= o && 57343 >= o ? (t += 4,
                    ++n) : t += 3
                }
                return t
            }
            function D() {
                var e = S.buffer;
                $ = e,
                i.HEAP8 = C = new Int8Array(e),
                i.HEAP16 = U = new Int16Array(e),
                i.HEAP32 = R = new Int32Array(e),
                i.HEAPU8 = E = new Uint8Array(e),
                i.HEAPU16 = new Uint16Array(e),
                i.HEAPU32 = T = new Uint32Array(e),
                i.HEAPF32 = O = new Float32Array(e),
                i.HEAPF64 = I = new Float64Array(e)
            }
            var V = []
              , q = []
              , H = [];
            function B() {
                var e = i.preRun.shift();
                V.unshift(e)
            }
            var F, W, G = 0, K = null, X = null;
            function Y(e) {
                throw i.onAbort && i.onAbort(e),
                A(e = "Aborted(" + e + ")"),
                P = !0,
                e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info."),
                l(e),
                e
            }
            function J() {
                return F.startsWith("data:application/octet-stream;base64,")
            }
            if (F = "olm.wasm",
            !J()) {
                var Z = F;
                F = i.locateFile ? i.locateFile(Z, v) : v + Z
            }
            function Q() {
                var e = F;
                try {
                    if (e == F && x)
                        return new Uint8Array(x);
                    if (d)
                        return d(e);
                    throw "both async and sync fetching of the wasm failed"
                } catch (e) {
                    Y(e)
                }
            }
            function ee(e) {
                for (; 0 < e.length; )
                    e.shift()(i)
            }
            function te(e, t="i8") {
                switch (t.endsWith("*") && (t = "*"),
                t) {
                case "i1":
                case "i8":
                    return C[0 | e];
                case "i16":
                    return U[e >> 1];
                case "i32":
                case "i64":
                    return R[e >> 2];
                case "float":
                    return O[e >> 2];
                case "double":
                    return I[e >> 3];
                case "*":
                    return T[e >> 2];
                default:
                    Y("invalid type for getValue: " + t)
                }
                return null
            }
            function ne(e) {
                var t = "i8";
                switch (t.endsWith("*") && (t = "*"),
                t) {
                case "i1":
                case "i8":
                    C[0 | e] = 0;
                    break;
                case "i16":
                    U[e >> 1] = 0;
                    break;
                case "i32":
                    R[e >> 2] = 0;
                    break;
                case "i64":
                    W = [0, 0],
                    R[e >> 2] = W[0],
                    R[e + 4 >> 2] = W[1];
                    break;
                case "float":
                    O[e >> 2] = 0;
                    break;
                case "double":
                    I[e >> 3] = 0;
                    break;
                case "*":
                    T[e >> 2] = 0;
                    break;
                default:
                    Y("invalid type for setValue: " + t)
                }
            }
            function oe(e, t, n) {
                for (var o = 0; o < e.length; ++o)
                    C[0 | t++] = e.charCodeAt(o);
                n || (C[0 | t] = 0)
            }
            function re(e, t, n) {
                return e = z(e, n = Array(0 < n ? n : j(e) + 1), 0, n.length),
                t && (n.length = e),
                n
            }
            var ie = {
                b: function(e, t, n) {
                    E.copyWithin(e, t, t + n)
                },
                a: function(e) {
                    var t = E.length;
                    if (2147483648 < (e >>>= 0))
                        return !1;
                    for (var n = 1; 4 >= n; n *= 2) {
                        var o = t * (1 + .2 / n);
                        o = Math.min(o, e + 100663296);
                        var r = Math;
                        o = Math.max(e, o),
                        r = r.min.call(r, 2147483648, o + (65536 - o % 65536) % 65536);
                        e: {
                            try {
                                S.grow(r - $.byteLength + 65535 >>> 16),
                                D();
                                var i = 1;
                                break e
                            } catch (e) {}
                            i = void 0
                        }
                        if (i)
                            return !0
                    }
                    return !1
                }
            };
            !function() {
                function e(e) {
                    i.asm = e.exports,
                    S = i.asm.c,
                    D(),
                    q.unshift(i.asm.d),
                    G--,
                    i.monitorRunDependencies && i.monitorRunDependencies(G),
                    0 == G && (null !== K && (clearInterval(K),
                    K = null),
                    X && (e = X,
                    X = null,
                    e()))
                }
                function t(t) {
                    e(t.instance)
                }
                function n(e) {
                    return function() {
                        if (!x && (g || k)) {
                            if ("function" == typeof fetch && !F.startsWith("file://"))
                                return fetch(F, {
                                    credentials: "same-origin"
                                }).then((function(e) {
                                    if (!e.ok)
                                        throw "failed to load wasm binary file at '" + F + "'";
                                    return e.arrayBuffer()
                                }
                                )).catch((function() {
                                    return Q()
                                }
                                ));
                            if (m)
                                return new Promise((function(e, t) {
                                    m(F, (function(t) {
                                        e(new Uint8Array(t))
                                    }
                                    ), t)
                                }
                                ))
                        }
                        return Promise.resolve().then((function() {
                            return Q()
                        }
                        ))
                    }().then((function(e) {
                        return WebAssembly.instantiate(e, o)
                    }
                    )).then((function(e) {
                        return e
                    }
                    )).then(e, (function(e) {
                        A("failed to asynchronously prepare wasm: " + e),
                        Y(e)
                    }
                    ))
                }
                var o = {
                    a: ie
                };
                if (G++,
                i.monitorRunDependencies && i.monitorRunDependencies(G),
                i.instantiateWasm)
                    try {
                        return i.instantiateWasm(o, e)
                    } catch (e) {
                        return A("Module.instantiateWasm callback failed with error: " + e),
                        !1
                    }
                (x || "function" != typeof WebAssembly.instantiateStreaming || J() || F.startsWith("file://") || w || "function" != typeof fetch ? n(t) : fetch(F, {
                    credentials: "same-origin"
                }).then((function(e) {
                    return WebAssembly.instantiateStreaming(e, o).then(t, (function(e) {
                        return A("wasm streaming compile failed: " + e),
                        A("falling back to ArrayBuffer instantiation"),
                        n(t)
                    }
                    ))
                }
                ))).catch(l)
            }(),
            i.___wasm_call_ctors = function() {
                return (i.___wasm_call_ctors = i.asm.d).apply(null, arguments)
            }
            ,
            i._olm_get_library_version = function() {
                return (i._olm_get_library_version = i.asm.f).apply(null, arguments)
            }
            ,
            i._olm_error = function() {
                return (i._olm_error = i.asm.g).apply(null, arguments)
            }
            ,
            i._olm_account_last_error = function() {
                return (i._olm_account_last_error = i.asm.h).apply(null, arguments)
            }
            ,
            i.__olm_error_to_string = function() {
                return (i.__olm_error_to_string = i.asm.i).apply(null, arguments)
            }
            ,
            i._olm_account_last_error_code = function() {
                return (i._olm_account_last_error_code = i.asm.j).apply(null, arguments)
            }
            ,
            i._olm_session_last_error = function() {
                return (i._olm_session_last_error = i.asm.k).apply(null, arguments)
            }
            ,
            i._olm_session_last_error_code = function() {
                return (i._olm_session_last_error_code = i.asm.l).apply(null, arguments)
            }
            ,
            i._olm_utility_last_error = function() {
                return (i._olm_utility_last_error = i.asm.m).apply(null, arguments)
            }
            ,
            i._olm_utility_last_error_code = function() {
                return (i._olm_utility_last_error_code = i.asm.n).apply(null, arguments)
            }
            ,
            i._olm_account_size = function() {
                return (i._olm_account_size = i.asm.o).apply(null, arguments)
            }
            ,
            i._olm_session_size = function() {
                return (i._olm_session_size = i.asm.p).apply(null, arguments)
            }
            ,
            i._olm_utility_size = function() {
                return (i._olm_utility_size = i.asm.q).apply(null, arguments)
            }
            ,
            i._olm_account = function() {
                return (i._olm_account = i.asm.r).apply(null, arguments)
            }
            ,
            i._olm_session = function() {
                return (i._olm_session = i.asm.s).apply(null, arguments)
            }
            ,
            i._olm_utility = function() {
                return (i._olm_utility = i.asm.t).apply(null, arguments)
            }
            ,
            i._olm_clear_account = function() {
                return (i._olm_clear_account = i.asm.u).apply(null, arguments)
            }
            ,
            i._olm_clear_session = function() {
                return (i._olm_clear_session = i.asm.v).apply(null, arguments)
            }
            ,
            i._olm_clear_utility = function() {
                return (i._olm_clear_utility = i.asm.w).apply(null, arguments)
            }
            ,
            i._olm_pickle_account_length = function() {
                return (i._olm_pickle_account_length = i.asm.x).apply(null, arguments)
            }
            ,
            i._olm_pickle_session_length = function() {
                return (i._olm_pickle_session_length = i.asm.y).apply(null, arguments)
            }
            ,
            i._olm_pickle_account = function() {
                return (i._olm_pickle_account = i.asm.z).apply(null, arguments)
            }
            ,
            i._olm_pickle_session = function() {
                return (i._olm_pickle_session = i.asm.A).apply(null, arguments)
            }
            ,
            i._olm_unpickle_account = function() {
                return (i._olm_unpickle_account = i.asm.B).apply(null, arguments)
            }
            ,
            i._olm_unpickle_session = function() {
                return (i._olm_unpickle_session = i.asm.C).apply(null, arguments)
            }
            ,
            i._olm_create_account_random_length = function() {
                return (i._olm_create_account_random_length = i.asm.D).apply(null, arguments)
            }
            ,
            i._olm_create_account = function() {
                return (i._olm_create_account = i.asm.E).apply(null, arguments)
            }
            ,
            i._olm_account_identity_keys_length = function() {
                return (i._olm_account_identity_keys_length = i.asm.F).apply(null, arguments)
            }
            ,
            i._olm_account_identity_keys = function() {
                return (i._olm_account_identity_keys = i.asm.G).apply(null, arguments)
            }
            ,
            i._olm_account_signature_length = function() {
                return (i._olm_account_signature_length = i.asm.H).apply(null, arguments)
            }
            ,
            i._olm_account_sign = function() {
                return (i._olm_account_sign = i.asm.I).apply(null, arguments)
            }
            ,
            i._olm_account_one_time_keys_length = function() {
                return (i._olm_account_one_time_keys_length = i.asm.J).apply(null, arguments)
            }
            ,
            i._olm_account_one_time_keys = function() {
                return (i._olm_account_one_time_keys = i.asm.K).apply(null, arguments)
            }
            ,
            i._olm_account_mark_keys_as_published = function() {
                return (i._olm_account_mark_keys_as_published = i.asm.L).apply(null, arguments)
            }
            ,
            i._olm_account_max_number_of_one_time_keys = function() {
                return (i._olm_account_max_number_of_one_time_keys = i.asm.M).apply(null, arguments)
            }
            ,
            i._olm_account_generate_one_time_keys_random_length = function() {
                return (i._olm_account_generate_one_time_keys_random_length = i.asm.N).apply(null, arguments)
            }
            ,
            i._olm_account_generate_one_time_keys = function() {
                return (i._olm_account_generate_one_time_keys = i.asm.O).apply(null, arguments)
            }
            ,
            i._olm_account_generate_fallback_key_random_length = function() {
                return (i._olm_account_generate_fallback_key_random_length = i.asm.P).apply(null, arguments)
            }
            ,
            i._olm_account_generate_fallback_key = function() {
                return (i._olm_account_generate_fallback_key = i.asm.Q).apply(null, arguments)
            }
            ,
            i._olm_account_fallback_key_length = function() {
                return (i._olm_account_fallback_key_length = i.asm.R).apply(null, arguments)
            }
            ,
            i._olm_account_fallback_key = function() {
                return (i._olm_account_fallback_key = i.asm.S).apply(null, arguments)
            }
            ,
            i._olm_account_unpublished_fallback_key_length = function() {
                return (i._olm_account_unpublished_fallback_key_length = i.asm.T).apply(null, arguments)
            }
            ,
            i._olm_account_unpublished_fallback_key = function() {
                return (i._olm_account_unpublished_fallback_key = i.asm.U).apply(null, arguments)
            }
            ,
            i._olm_account_forget_old_fallback_key = function() {
                return (i._olm_account_forget_old_fallback_key = i.asm.V).apply(null, arguments)
            }
            ,
            i._olm_create_outbound_session_random_length = function() {
                return (i._olm_create_outbound_session_random_length = i.asm.W).apply(null, arguments)
            }
            ,
            i._olm_create_outbound_session = function() {
                return (i._olm_create_outbound_session = i.asm.X).apply(null, arguments)
            }
            ,
            i._olm_create_inbound_session = function() {
                return (i._olm_create_inbound_session = i.asm.Y).apply(null, arguments)
            }
            ,
            i._olm_create_inbound_session_from = function() {
                return (i._olm_create_inbound_session_from = i.asm.Z).apply(null, arguments)
            }
            ,
            i._olm_session_id_length = function() {
                return (i._olm_session_id_length = i.asm._).apply(null, arguments)
            }
            ,
            i._olm_session_id = function() {
                return (i._olm_session_id = i.asm.$).apply(null, arguments)
            }
            ,
            i._olm_session_has_received_message = function() {
                return (i._olm_session_has_received_message = i.asm.aa).apply(null, arguments)
            }
            ,
            i._olm_session_describe = function() {
                return (i._olm_session_describe = i.asm.ba).apply(null, arguments)
            }
            ,
            i._olm_matches_inbound_session = function() {
                return (i._olm_matches_inbound_session = i.asm.ca).apply(null, arguments)
            }
            ,
            i._olm_matches_inbound_session_from = function() {
                return (i._olm_matches_inbound_session_from = i.asm.da).apply(null, arguments)
            }
            ,
            i._olm_remove_one_time_keys = function() {
                return (i._olm_remove_one_time_keys = i.asm.ea).apply(null, arguments)
            }
            ,
            i._olm_encrypt_message_type = function() {
                return (i._olm_encrypt_message_type = i.asm.fa).apply(null, arguments)
            }
            ,
            i._olm_encrypt_random_length = function() {
                return (i._olm_encrypt_random_length = i.asm.ga).apply(null, arguments)
            }
            ,
            i._olm_encrypt_message_length = function() {
                return (i._olm_encrypt_message_length = i.asm.ha).apply(null, arguments)
            }
            ,
            i._olm_encrypt = function() {
                return (i._olm_encrypt = i.asm.ia).apply(null, arguments)
            }
            ,
            i._olm_decrypt_max_plaintext_length = function() {
                return (i._olm_decrypt_max_plaintext_length = i.asm.ja).apply(null, arguments)
            }
            ,
            i._olm_decrypt = function() {
                return (i._olm_decrypt = i.asm.ka).apply(null, arguments)
            }
            ,
            i._olm_sha256_length = function() {
                return (i._olm_sha256_length = i.asm.la).apply(null, arguments)
            }
            ,
            i._olm_sha256 = function() {
                return (i._olm_sha256 = i.asm.ma).apply(null, arguments)
            }
            ,
            i._olm_ed25519_verify = function() {
                return (i._olm_ed25519_verify = i.asm.na).apply(null, arguments)
            }
            ,
            i._olm_pk_encryption_last_error = function() {
                return (i._olm_pk_encryption_last_error = i.asm.oa).apply(null, arguments)
            }
            ,
            i._olm_pk_encryption_last_error_code = function() {
                return (i._olm_pk_encryption_last_error_code = i.asm.pa).apply(null, arguments)
            }
            ,
            i._olm_pk_encryption_size = function() {
                return (i._olm_pk_encryption_size = i.asm.qa).apply(null, arguments)
            }
            ,
            i._olm_pk_encryption = function() {
                return (i._olm_pk_encryption = i.asm.ra).apply(null, arguments)
            }
            ,
            i._olm_clear_pk_encryption = function() {
                return (i._olm_clear_pk_encryption = i.asm.sa).apply(null, arguments)
            }
            ,
            i._olm_pk_encryption_set_recipient_key = function() {
                return (i._olm_pk_encryption_set_recipient_key = i.asm.ta).apply(null, arguments)
            }
            ,
            i._olm_pk_key_length = function() {
                return (i._olm_pk_key_length = i.asm.ua).apply(null, arguments)
            }
            ,
            i._olm_pk_ciphertext_length = function() {
                return (i._olm_pk_ciphertext_length = i.asm.va).apply(null, arguments)
            }
            ,
            i._olm_pk_mac_length = function() {
                return (i._olm_pk_mac_length = i.asm.wa).apply(null, arguments)
            }
            ,
            i._olm_pk_encrypt_random_length = function() {
                return (i._olm_pk_encrypt_random_length = i.asm.xa).apply(null, arguments)
            }
            ,
            i._olm_pk_encrypt = function() {
                return (i._olm_pk_encrypt = i.asm.ya).apply(null, arguments)
            }
            ,
            i._olm_pk_decryption_last_error = function() {
                return (i._olm_pk_decryption_last_error = i.asm.za).apply(null, arguments)
            }
            ,
            i._olm_pk_decryption_last_error_code = function() {
                return (i._olm_pk_decryption_last_error_code = i.asm.Aa).apply(null, arguments)
            }
            ,
            i._olm_pk_decryption_size = function() {
                return (i._olm_pk_decryption_size = i.asm.Ba).apply(null, arguments)
            }
            ,
            i._olm_pk_decryption = function() {
                return (i._olm_pk_decryption = i.asm.Ca).apply(null, arguments)
            }
            ,
            i._olm_clear_pk_decryption = function() {
                return (i._olm_clear_pk_decryption = i.asm.Da).apply(null, arguments)
            }
            ,
            i._olm_pk_private_key_length = function() {
                return (i._olm_pk_private_key_length = i.asm.Ea).apply(null, arguments)
            }
            ,
            i._olm_pk_generate_key_random_length = function() {
                return (i._olm_pk_generate_key_random_length = i.asm.Fa).apply(null, arguments)
            }
            ,
            i._olm_pk_key_from_private = function() {
                return (i._olm_pk_key_from_private = i.asm.Ga).apply(null, arguments)
            }
            ,
            i._olm_pk_generate_key = function() {
                return (i._olm_pk_generate_key = i.asm.Ha).apply(null, arguments)
            }
            ,
            i._olm_pickle_pk_decryption_length = function() {
                return (i._olm_pickle_pk_decryption_length = i.asm.Ia).apply(null, arguments)
            }
            ,
            i._olm_pickle_pk_decryption = function() {
                return (i._olm_pickle_pk_decryption = i.asm.Ja).apply(null, arguments)
            }
            ,
            i._olm_unpickle_pk_decryption = function() {
                return (i._olm_unpickle_pk_decryption = i.asm.Ka).apply(null, arguments)
            }
            ,
            i._olm_pk_max_plaintext_length = function() {
                return (i._olm_pk_max_plaintext_length = i.asm.La).apply(null, arguments)
            }
            ,
            i._olm_pk_decrypt = function() {
                return (i._olm_pk_decrypt = i.asm.Ma).apply(null, arguments)
            }
            ,
            i._olm_pk_get_private_key = function() {
                return (i._olm_pk_get_private_key = i.asm.Na).apply(null, arguments)
            }
            ,
            i._olm_pk_signing_size = function() {
                return (i._olm_pk_signing_size = i.asm.Oa).apply(null, arguments)
            }
            ,
            i._olm_pk_signing = function() {
                return (i._olm_pk_signing = i.asm.Pa).apply(null, arguments)
            }
            ,
            i._olm_pk_signing_last_error = function() {
                return (i._olm_pk_signing_last_error = i.asm.Qa).apply(null, arguments)
            }
            ,
            i._olm_pk_signing_last_error_code = function() {
                return (i._olm_pk_signing_last_error_code = i.asm.Ra).apply(null, arguments)
            }
            ,
            i._olm_clear_pk_signing = function() {
                return (i._olm_clear_pk_signing = i.asm.Sa).apply(null, arguments)
            }
            ,
            i._olm_pk_signing_seed_length = function() {
                return (i._olm_pk_signing_seed_length = i.asm.Ta).apply(null, arguments)
            }
            ,
            i._olm_pk_signing_public_key_length = function() {
                return (i._olm_pk_signing_public_key_length = i.asm.Ua).apply(null, arguments)
            }
            ,
            i._olm_pk_signing_key_from_seed = function() {
                return (i._olm_pk_signing_key_from_seed = i.asm.Va).apply(null, arguments)
            }
            ,
            i._olm_pk_signature_length = function() {
                return (i._olm_pk_signature_length = i.asm.Wa).apply(null, arguments)
            }
            ,
            i._olm_pk_sign = function() {
                return (i._olm_pk_sign = i.asm.Xa).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session_size = function() {
                return (i._olm_inbound_group_session_size = i.asm.Ya).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session = function() {
                return (i._olm_inbound_group_session = i.asm.Za).apply(null, arguments)
            }
            ,
            i._olm_clear_inbound_group_session = function() {
                return (i._olm_clear_inbound_group_session = i.asm._a).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session_last_error = function() {
                return (i._olm_inbound_group_session_last_error = i.asm.$a).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session_last_error_code = function() {
                return (i._olm_inbound_group_session_last_error_code = i.asm.ab).apply(null, arguments)
            }
            ,
            i._olm_init_inbound_group_session = function() {
                return (i._olm_init_inbound_group_session = i.asm.bb).apply(null, arguments)
            }
            ,
            i._olm_import_inbound_group_session = function() {
                return (i._olm_import_inbound_group_session = i.asm.cb).apply(null, arguments)
            }
            ,
            i._olm_pickle_inbound_group_session_length = function() {
                return (i._olm_pickle_inbound_group_session_length = i.asm.db).apply(null, arguments)
            }
            ,
            i._olm_pickle_inbound_group_session = function() {
                return (i._olm_pickle_inbound_group_session = i.asm.eb).apply(null, arguments)
            }
            ,
            i._olm_unpickle_inbound_group_session = function() {
                return (i._olm_unpickle_inbound_group_session = i.asm.fb).apply(null, arguments)
            }
            ,
            i._olm_group_decrypt_max_plaintext_length = function() {
                return (i._olm_group_decrypt_max_plaintext_length = i.asm.gb).apply(null, arguments)
            }
            ,
            i._olm_group_decrypt = function() {
                return (i._olm_group_decrypt = i.asm.hb).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session_id_length = function() {
                return (i._olm_inbound_group_session_id_length = i.asm.ib).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session_id = function() {
                return (i._olm_inbound_group_session_id = i.asm.jb).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session_first_known_index = function() {
                return (i._olm_inbound_group_session_first_known_index = i.asm.kb).apply(null, arguments)
            }
            ,
            i._olm_inbound_group_session_is_verified = function() {
                return (i._olm_inbound_group_session_is_verified = i.asm.lb).apply(null, arguments)
            }
            ,
            i._olm_export_inbound_group_session_length = function() {
                return (i._olm_export_inbound_group_session_length = i.asm.mb).apply(null, arguments)
            }
            ,
            i._olm_export_inbound_group_session = function() {
                return (i._olm_export_inbound_group_session = i.asm.nb).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_size = function() {
                return (i._olm_outbound_group_session_size = i.asm.ob).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session = function() {
                return (i._olm_outbound_group_session = i.asm.pb).apply(null, arguments)
            }
            ,
            i._olm_clear_outbound_group_session = function() {
                return (i._olm_clear_outbound_group_session = i.asm.qb).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_last_error = function() {
                return (i._olm_outbound_group_session_last_error = i.asm.rb).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_last_error_code = function() {
                return (i._olm_outbound_group_session_last_error_code = i.asm.sb).apply(null, arguments)
            }
            ,
            i._olm_pickle_outbound_group_session_length = function() {
                return (i._olm_pickle_outbound_group_session_length = i.asm.tb).apply(null, arguments)
            }
            ,
            i._olm_pickle_outbound_group_session = function() {
                return (i._olm_pickle_outbound_group_session = i.asm.ub).apply(null, arguments)
            }
            ,
            i._olm_unpickle_outbound_group_session = function() {
                return (i._olm_unpickle_outbound_group_session = i.asm.vb).apply(null, arguments)
            }
            ,
            i._olm_init_outbound_group_session_random_length = function() {
                return (i._olm_init_outbound_group_session_random_length = i.asm.wb).apply(null, arguments)
            }
            ,
            i._olm_init_outbound_group_session = function() {
                return (i._olm_init_outbound_group_session = i.asm.xb).apply(null, arguments)
            }
            ,
            i._olm_group_encrypt_message_length = function() {
                return (i._olm_group_encrypt_message_length = i.asm.yb).apply(null, arguments)
            }
            ,
            i._olm_group_encrypt = function() {
                return (i._olm_group_encrypt = i.asm.zb).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_id_length = function() {
                return (i._olm_outbound_group_session_id_length = i.asm.Ab).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_id = function() {
                return (i._olm_outbound_group_session_id = i.asm.Bb).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_message_index = function() {
                return (i._olm_outbound_group_session_message_index = i.asm.Cb).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_key_length = function() {
                return (i._olm_outbound_group_session_key_length = i.asm.Db).apply(null, arguments)
            }
            ,
            i._olm_outbound_group_session_key = function() {
                return (i._olm_outbound_group_session_key = i.asm.Eb).apply(null, arguments)
            }
            ,
            i._olm_sas_last_error = function() {
                return (i._olm_sas_last_error = i.asm.Fb).apply(null, arguments)
            }
            ,
            i._olm_sas_last_error_code = function() {
                return (i._olm_sas_last_error_code = i.asm.Gb).apply(null, arguments)
            }
            ,
            i._olm_sas_size = function() {
                return (i._olm_sas_size = i.asm.Hb).apply(null, arguments)
            }
            ,
            i._olm_sas = function() {
                return (i._olm_sas = i.asm.Ib).apply(null, arguments)
            }
            ,
            i._olm_clear_sas = function() {
                return (i._olm_clear_sas = i.asm.Jb).apply(null, arguments)
            }
            ,
            i._olm_create_sas_random_length = function() {
                return (i._olm_create_sas_random_length = i.asm.Kb).apply(null, arguments)
            }
            ,
            i._olm_create_sas = function() {
                return (i._olm_create_sas = i.asm.Lb).apply(null, arguments)
            }
            ,
            i._olm_sas_pubkey_length = function() {
                return (i._olm_sas_pubkey_length = i.asm.Mb).apply(null, arguments)
            }
            ,
            i._olm_sas_get_pubkey = function() {
                return (i._olm_sas_get_pubkey = i.asm.Nb).apply(null, arguments)
            }
            ,
            i._olm_sas_set_their_key = function() {
                return (i._olm_sas_set_their_key = i.asm.Ob).apply(null, arguments)
            }
            ,
            i._olm_sas_is_their_key_set = function() {
                return (i._olm_sas_is_their_key_set = i.asm.Pb).apply(null, arguments)
            }
            ,
            i._olm_sas_generate_bytes = function() {
                return (i._olm_sas_generate_bytes = i.asm.Qb).apply(null, arguments)
            }
            ,
            i._olm_sas_mac_length = function() {
                return (i._olm_sas_mac_length = i.asm.Rb).apply(null, arguments)
            }
            ,
            i._olm_sas_calculate_mac_fixed_base64 = function() {
                return (i._olm_sas_calculate_mac_fixed_base64 = i.asm.Sb).apply(null, arguments)
            }
            ,
            i._olm_sas_calculate_mac = function() {
                return (i._olm_sas_calculate_mac = i.asm.Tb).apply(null, arguments)
            }
            ,
            i._olm_sas_calculate_mac_long_kdf = function() {
                return (i._olm_sas_calculate_mac_long_kdf = i.asm.Ub).apply(null, arguments)
            }
            ,
            i._malloc = function() {
                return (i._malloc = i.asm.Vb).apply(null, arguments)
            }
            ,
            i._free = function() {
                return (i._free = i.asm.Wb).apply(null, arguments)
            }
            ;
            var se, ae = i.stackSave = function() {
                return (ae = i.stackSave = i.asm.Xb).apply(null, arguments)
            }
            , le = i.stackRestore = function() {
                return (le = i.stackRestore = i.asm.Yb).apply(null, arguments)
            }
            , _e = i.stackAlloc = function() {
                return (_e = i.stackAlloc = i.asm.Zb).apply(null, arguments)
            }
            ;
            function ue() {
                function e() {
                    if (!se && (se = !0,
                    i.calledRun = !0,
                    !P)) {
                        if (ee(q),
                        a(i),
                        i.onRuntimeInitialized && i.onRuntimeInitialized(),
                        i.postRun)
                            for ("function" == typeof i.postRun && (i.postRun = [i.postRun]); i.postRun.length; ) {
                                var e = i.postRun.shift();
                                H.unshift(e)
                            }
                        ee(H)
                    }
                }
                if (!(0 < G)) {
                    if (i.preRun)
                        for ("function" == typeof i.preRun && (i.preRun = [i.preRun]); i.preRun.length; )
                            B();
                    ee(V),
                    0 < G || (i.setStatus ? (i.setStatus("Running..."),
                    setTimeout((function() {
                        setTimeout((function() {
                            i.setStatus("")
                        }
                        ), 1),
                        e()
                    }
                    ), 1)) : e())
                }
            }
            if (i.UTF8ToString = M,
            i.stringToUTF8 = L,
            i.intArrayFromString = re,
            i.writeAsciiToMemory = oe,
            i.ALLOC_STACK = 1,
            X = function e() {
                se || ue(),
                se || (X = e)
            }
            ,
            i.preInit)
                for ("function" == typeof i.preInit && (i.preInit = [i.preInit]); 0 < i.preInit.length; )
                    i.preInit.pop()();
            function ce() {
                var e = i._olm_outbound_group_session_size();
                this.ac = Ae(e),
                this.$b = i._olm_outbound_group_session(this.ac)
            }
            function pe(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_outbound_group_session_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            function me() {
                var e = i._olm_inbound_group_session_size();
                this.ac = Ae(e),
                this.$b = i._olm_inbound_group_session(this.ac)
            }
            function de(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_inbound_group_session_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            function he() {
                var e = i._olm_pk_encryption_size();
                this.ac = Ae(e),
                this.$b = i._olm_pk_encryption(this.ac)
            }
            function be(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_pk_encryption_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            function ye() {
                var e = i._olm_pk_decryption_size();
                this.ac = Ae(e),
                this.$b = i._olm_pk_decryption(this.ac)
            }
            function fe(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_pk_decryption_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            function ge() {
                var e = i._olm_pk_signing_size();
                this.ac = Ae(e),
                this.$b = i._olm_pk_signing(this.ac)
            }
            function ke(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_pk_signing_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            function we() {
                var e = i._olm_sas_size()
                  , t = i._olm_create_sas_random_length()
                  , n = $e(t, _);
                this.ac = Ae(e),
                this.$b = i._olm_sas(this.ac),
                i._olm_create_sas(this.$b, n, t),
                Re(n, t)
            }
            function ve(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_sas_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            ue(),
            ce.prototype.free = function() {
                i._olm_clear_outbound_group_session(this.$b),
                Se(this.$b)
            }
            ,
            ce.prototype.pickle = Ue((function(e) {
                e = Ee(e);
                var t = pe(i._olm_pickle_outbound_group_session_length)(this.$b)
                  , n = Ce(e)
                  , o = Ce(t + 1);
                try {
                    pe(i._olm_pickle_outbound_group_session)(this.$b, n, e.length, o, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(o, t)
            }
            )),
            ce.prototype.unpickle = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t));
                try {
                    pe(i._olm_unpickle_outbound_group_session)(this.$b, n, e.length, o, t.length)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
            }
            )),
            ce.prototype.create = Ue((function() {
                var e = pe(i._olm_init_outbound_group_session_random_length)(this.$b)
                  , t = $e(e, _);
                try {
                    pe(i._olm_init_outbound_group_session)(this.$b, t, e)
                } finally {
                    Re(t, e)
                }
            }
            )),
            ce.prototype.encrypt = function(e) {
                try {
                    var t = j(e)
                      , n = pe(i._olm_group_encrypt_message_length)(this.$b, t)
                      , o = Ae(t + 1);
                    L(e, o, t + 1);
                    var r = Ae(n + 1);
                    return pe(i._olm_group_encrypt)(this.$b, o, t, r, n),
                    ne(r + n),
                    M(r, n)
                } finally {
                    void 0 !== o && (Re(o, t + 1),
                    Se(o)),
                    void 0 !== r && Se(r)
                }
            }
            ,
            ce.prototype.session_id = Ue((function() {
                var e = pe(i._olm_outbound_group_session_id_length)(this.$b)
                  , t = Ce(e + 1);
                return pe(i._olm_outbound_group_session_id)(this.$b, t, e),
                M(t, e)
            }
            )),
            ce.prototype.session_key = Ue((function() {
                var e = pe(i._olm_outbound_group_session_key_length)(this.$b)
                  , t = Ce(e + 1);
                pe(i._olm_outbound_group_session_key)(this.$b, t, e);
                var n = M(t, e);
                return Re(t, e),
                n
            }
            )),
            ce.prototype.message_index = function() {
                return pe(i._olm_outbound_group_session_message_index)(this.$b)
            }
            ,
            s.OutboundGroupSession = ce,
            me.prototype.free = function() {
                i._olm_clear_inbound_group_session(this.$b),
                Se(this.$b)
            }
            ,
            me.prototype.pickle = Ue((function(e) {
                e = Ee(e);
                var t = de(i._olm_pickle_inbound_group_session_length)(this.$b)
                  , n = Ce(e)
                  , o = Ce(t + 1);
                try {
                    de(i._olm_pickle_inbound_group_session)(this.$b, n, e.length, o, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(o, t)
            }
            )),
            me.prototype.unpickle = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t));
                try {
                    de(i._olm_unpickle_inbound_group_session)(this.$b, n, e.length, o, t.length)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
            }
            )),
            me.prototype.create = Ue((function(e) {
                var t = Ce(e = Ee(e));
                try {
                    de(i._olm_init_inbound_group_session)(this.$b, t, e.length)
                } finally {
                    for (Re(t, e.length),
                    t = 0; t < e.length; t++)
                        e[t] = 0
                }
            }
            )),
            me.prototype.import_session = Ue((function(e) {
                var t = Ce(e = Ee(e));
                try {
                    de(i._olm_import_inbound_group_session)(this.$b, t, e.length)
                } finally {
                    for (Re(t, e.length),
                    t = 0; t < e.length; t++)
                        e[t] = 0
                }
            }
            )),
            me.prototype.decrypt = Ue((function(e) {
                try {
                    var t = Ae(e.length);
                    oe(e, t, !0);
                    var n = de(i._olm_group_decrypt_max_plaintext_length)(this.$b, t, e.length);
                    oe(e, t, !0);
                    var o = Ae(n + 1)
                      , r = Ce(4)
                      , s = de(i._olm_group_decrypt)(this.$b, t, e.length, o, n, r);
                    return ne(o + s),
                    {
                        plaintext: M(o, s),
                        message_index: te(r, "i32")
                    }
                } finally {
                    void 0 !== t && Se(t),
                    void 0 !== o && (Re(o, s),
                    Se(o))
                }
            }
            )),
            me.prototype.session_id = Ue((function() {
                var e = de(i._olm_inbound_group_session_id_length)(this.$b)
                  , t = Ce(e + 1);
                return de(i._olm_inbound_group_session_id)(this.$b, t, e),
                M(t, e)
            }
            )),
            me.prototype.first_known_index = Ue((function() {
                return de(i._olm_inbound_group_session_first_known_index)(this.$b)
            }
            )),
            me.prototype.export_session = Ue((function(e) {
                var t = de(i._olm_export_inbound_group_session_length)(this.$b)
                  , n = Ce(t + 1);
                return pe(i._olm_export_inbound_group_session)(this.$b, n, t, e),
                e = M(n, t),
                Re(n, t),
                e
            }
            )),
            s.InboundGroupSession = me,
            he.prototype.free = function() {
                i._olm_clear_pk_encryption(this.$b),
                Se(this.$b)
            }
            ,
            he.prototype.set_recipient_key = Ue((function(e) {
                var t = Ce(e = Ee(e));
                be(i._olm_pk_encryption_set_recipient_key)(this.$b, t, e.length)
            }
            )),
            he.prototype.encrypt = Ue((function(e) {
                try {
                    var t = j(e)
                      , n = Ae(t + 1);
                    L(e, n, t + 1);
                    var o = be(i._olm_pk_encrypt_random_length)()
                      , r = $e(o, _)
                      , s = be(i._olm_pk_ciphertext_length)(this.$b, t)
                      , a = Ae(s + 1)
                      , l = be(i._olm_pk_mac_length)(this.$b)
                      , u = Ce(l + 1);
                    ne(u + l);
                    var c = be(i._olm_pk_key_length)()
                      , p = Ce(c + 1);
                    return ne(p + c),
                    be(i._olm_pk_encrypt)(this.$b, n, t, a, s, u, l, p, c, r, o),
                    ne(a + s),
                    {
                        ciphertext: M(a, s),
                        mac: M(u, l),
                        ephemeral: M(p, c)
                    }
                } finally {
                    void 0 !== r && Re(r, o),
                    void 0 !== n && (Re(n, t + 1),
                    Se(n)),
                    void 0 !== a && Se(a)
                }
            }
            )),
            ye.prototype.free = function() {
                i._olm_clear_pk_decryption(this.$b),
                Se(this.$b)
            }
            ,
            ye.prototype.init_with_private_key = Ue((function(e) {
                var t = Ce(e.length);
                i.HEAPU8.set(e, t);
                var n = fe(i._olm_pk_key_length)()
                  , o = Ce(n + 1);
                try {
                    fe(i._olm_pk_key_from_private)(this.$b, o, n, t, e.length)
                } finally {
                    Re(t, e.length)
                }
                return M(o, n)
            }
            )),
            ye.prototype.generate_key = Ue((function() {
                var e = fe(i._olm_pk_private_key_length)()
                  , t = $e(e, _)
                  , n = fe(i._olm_pk_key_length)()
                  , o = Ce(n + 1);
                try {
                    fe(i._olm_pk_key_from_private)(this.$b, o, n, t, e)
                } finally {
                    Re(t, e)
                }
                return M(o, n)
            }
            )),
            ye.prototype.get_private_key = Ue((function() {
                var e = be(i._olm_pk_private_key_length)()
                  , t = Ce(e);
                fe(i._olm_pk_get_private_key)(this.$b, t, e);
                var n = new Uint8Array(new Uint8Array(i.HEAPU8.buffer,t,e));
                return Re(t, e),
                n
            }
            )),
            ye.prototype.pickle = Ue((function(e) {
                e = Ee(e);
                var t = fe(i._olm_pickle_pk_decryption_length)(this.$b)
                  , n = Ce(e)
                  , o = Ce(t + 1);
                try {
                    fe(i._olm_pickle_pk_decryption)(this.$b, n, e.length, o, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(o, t)
            }
            )),
            ye.prototype.unpickle = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ee(t)
                  , r = Ce(o)
                  , s = Ce((t = fe(i._olm_pk_key_length)()) + 1);
                try {
                    fe(i._olm_unpickle_pk_decryption)(this.$b, n, e.length, r, o.length, s, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(s, t)
            }
            )),
            ye.prototype.decrypt = Ue((function(e, t, n) {
                try {
                    var o = j(n)
                      , r = Ae(o + 1);
                    L(n, r, o + 1);
                    var s = Ee(e)
                      , a = Ce(s)
                      , l = Ee(t)
                      , _ = Ce(l)
                      , u = fe(i._olm_pk_max_plaintext_length)(this.$b, o)
                      , c = Ae(u + 1)
                      , p = fe(i._olm_pk_decrypt)(this.$b, a, s.length, _, l.length, r, o, c, u);
                    return ne(c + p),
                    M(c, p)
                } finally {
                    void 0 !== c && (Re(c, p + 1),
                    Se(c)),
                    void 0 !== r && Se(r)
                }
            }
            )),
            ge.prototype.free = function() {
                i._olm_clear_pk_signing(this.$b),
                Se(this.$b)
            }
            ,
            ge.prototype.init_with_seed = Ue((function(e) {
                var t = Ce(e.length);
                i.HEAPU8.set(e, t);
                var n = ke(i._olm_pk_signing_public_key_length)()
                  , o = Ce(n + 1);
                try {
                    ke(i._olm_pk_signing_key_from_seed)(this.$b, o, n, t, e.length)
                } finally {
                    Re(t, e.length)
                }
                return M(o, n)
            }
            )),
            ge.prototype.generate_seed = Ue((function() {
                var e = ke(i._olm_pk_signing_seed_length)()
                  , t = $e(e, _)
                  , n = new Uint8Array(new Uint8Array(i.HEAPU8.buffer,t,e));
                return Re(t, e),
                n
            }
            )),
            ge.prototype.sign = Ue((function(e) {
                try {
                    var t = j(e)
                      , n = Ae(t + 1);
                    L(e, n, t + 1);
                    var o = ke(i._olm_pk_signature_length)()
                      , r = Ce(o + 1);
                    return ke(i._olm_pk_sign)(this.$b, n, t, r, o),
                    M(r, o)
                } finally {
                    void 0 !== n && (Re(n, t + 1),
                    Se(n))
                }
            }
            )),
            we.prototype.free = function() {
                i._olm_clear_sas(this.$b),
                Se(this.$b)
            }
            ,
            we.prototype.get_pubkey = Ue((function() {
                var e = ve(i._olm_sas_pubkey_length)(this.$b)
                  , t = Ce(e + 1);
                return ve(i._olm_sas_get_pubkey)(this.$b, t, e),
                M(t, e)
            }
            )),
            we.prototype.set_their_key = Ue((function(e) {
                var t = Ce(e = Ee(e));
                ve(i._olm_sas_set_their_key)(this.$b, t, e.length)
            }
            )),
            we.prototype.is_their_key_set = Ue((function() {
                return !!ve(i._olm_sas_is_their_key_set)(this.$b)
            }
            )),
            we.prototype.generate_bytes = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t);
                return ve(i._olm_sas_generate_bytes)(this.$b, n, e.length, o, t),
                new Uint8Array(new Uint8Array(i.HEAPU8.buffer,o,t))
            }
            )),
            we.prototype.calculate_mac = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t))
                  , r = ve(i._olm_sas_mac_length)(this.$b)
                  , s = Ce(r + 1);
                return ve(i._olm_sas_calculate_mac)(this.$b, n, e.length, o, t.length, s, r),
                M(s, r)
            }
            )),
            we.prototype.calculate_mac_fixed_base64 = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t))
                  , r = ve(i._olm_sas_mac_length)(this.$b)
                  , s = Ce(r + 1);
                return ve(i._olm_sas_calculate_mac_fixed_base64)(this.$b, n, e.length, o, t.length, s, r),
                M(s, r)
            }
            )),
            we.prototype.calculate_mac_long_kdf = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t))
                  , r = ve(i._olm_sas_mac_length)(this.$b)
                  , s = Ce(r + 1);
                return ve(i._olm_sas_calculate_mac_long_kdf)(this.$b, n, e.length, o, t.length, s, r),
                M(s, r)
            }
            ));
            var xe, Ae = i._malloc, Se = i._free;
            function $e(e, t) {
                var n = _e(e);
                return t(new Uint8Array(i.HEAPU8.buffer,n,e)),
                n
            }
            function Ce(e) {
                return "number" == typeof e ? $e(e, (function(e) {
                    e.fill(0)
                }
                )) : $e(e.length, (function(t) {
                    t.set(e)
                }
                ))
            }
            function Ee(e) {
                return e instanceof Uint8Array ? e : re(e, !0)
            }
            function Ue(e) {
                return function() {
                    var t = ae();
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        le(t)
                    }
                }
            }
            function Re(e, t) {
                for (; 0 < t--; )
                    i.HEAP8[e++] = 0
            }
            function Te() {
                var e = i._olm_account_size();
                this.ac = Ae(e),
                this.$b = i._olm_account(this.ac)
            }
            function Oe(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_account_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            function Ie() {
                var e = i._olm_session_size();
                this.ac = Ae(e),
                this.$b = i._olm_session(this.ac)
            }
            function Pe(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_session_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            function Ne() {
                var e = i._olm_utility_size();
                this.ac = Ae(e),
                this.$b = i._olm_utility(this.ac)
            }
            function Me(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    if (t === xe)
                        throw t = M(i._olm_utility_last_error(arguments[0])),
                        Error("OLM." + t);
                    return t
                }
            }
            return Te.prototype.free = function() {
                i._olm_clear_account(this.$b),
                Se(this.$b)
            }
            ,
            Te.prototype.create = Ue((function() {
                var e = Oe(i._olm_create_account_random_length)(this.$b)
                  , t = $e(e, _);
                try {
                    Oe(i._olm_create_account)(this.$b, t, e)
                } finally {
                    Re(t, e)
                }
            }
            )),
            Te.prototype.identity_keys = Ue((function() {
                var e = Oe(i._olm_account_identity_keys_length)(this.$b)
                  , t = Ce(e + 1);
                return Oe(i._olm_account_identity_keys)(this.$b, t, e),
                M(t, e)
            }
            )),
            Te.prototype.sign = Ue((function(e) {
                var t = Oe(i._olm_account_signature_length)(this.$b)
                  , n = Ce(e = Ee(e))
                  , o = Ce(t + 1);
                try {
                    Oe(i._olm_account_sign)(this.$b, n, e.length, o, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(o, t)
            }
            )),
            Te.prototype.one_time_keys = Ue((function() {
                var e = Oe(i._olm_account_one_time_keys_length)(this.$b)
                  , t = Ce(e + 1);
                return Oe(i._olm_account_one_time_keys)(this.$b, t, e),
                M(t, e)
            }
            )),
            Te.prototype.mark_keys_as_published = Ue((function() {
                Oe(i._olm_account_mark_keys_as_published)(this.$b)
            }
            )),
            Te.prototype.max_number_of_one_time_keys = Ue((function() {
                return Oe(i._olm_account_max_number_of_one_time_keys)(this.$b)
            }
            )),
            Te.prototype.generate_one_time_keys = Ue((function(e) {
                var t = Oe(i._olm_account_generate_one_time_keys_random_length)(this.$b, e)
                  , n = $e(t, _);
                try {
                    Oe(i._olm_account_generate_one_time_keys)(this.$b, e, n, t)
                } finally {
                    Re(n, t)
                }
            }
            )),
            Te.prototype.remove_one_time_keys = Ue((function(e) {
                Oe(i._olm_remove_one_time_keys)(this.$b, e.$b)
            }
            )),
            Te.prototype.generate_fallback_key = Ue((function() {
                var e = Oe(i._olm_account_generate_fallback_key_random_length)(this.$b)
                  , t = $e(e, _);
                try {
                    Oe(i._olm_account_generate_fallback_key)(this.$b, t, e)
                } finally {
                    Re(t, e)
                }
            }
            )),
            Te.prototype.fallback_key = Ue((function() {
                var e = Oe(i._olm_account_fallback_key_length)(this.$b)
                  , t = Ce(e + 1);
                return Oe(i._olm_account_fallback_key)(this.$b, t, e),
                M(t, e)
            }
            )),
            Te.prototype.unpublished_fallback_key = Ue((function() {
                var e = Oe(i._olm_account_unpublished_fallback_key_length)(this.$b)
                  , t = Ce(e + 1);
                return Oe(i._olm_account_unpublished_fallback_key)(this.$b, t, e),
                M(t, e)
            }
            )),
            Te.prototype.forget_old_fallback_key = Ue((function() {
                Oe(i._olm_account_forget_old_fallback_key)(this.$b)
            }
            )),
            Te.prototype.pickle = Ue((function(e) {
                e = Ee(e);
                var t = Oe(i._olm_pickle_account_length)(this.$b)
                  , n = Ce(e)
                  , o = Ce(t + 1);
                try {
                    Oe(i._olm_pickle_account)(this.$b, n, e.length, o, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(o, t)
            }
            )),
            Te.prototype.unpickle = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t));
                try {
                    Oe(i._olm_unpickle_account)(this.$b, n, e.length, o, t.length)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
            }
            )),
            Ie.prototype.free = function() {
                i._olm_clear_session(this.$b),
                Se(this.$b)
            }
            ,
            Ie.prototype.pickle = Ue((function(e) {
                e = Ee(e);
                var t = Pe(i._olm_pickle_session_length)(this.$b)
                  , n = Ce(e)
                  , o = Ce(t + 1);
                try {
                    Pe(i._olm_pickle_session)(this.$b, n, e.length, o, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(o, t)
            }
            )),
            Ie.prototype.unpickle = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t));
                try {
                    Pe(i._olm_unpickle_session)(this.$b, n, e.length, o, t.length)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
            }
            )),
            Ie.prototype.create_outbound = Ue((function(e, t, n) {
                var o = Pe(i._olm_create_outbound_session_random_length)(this.$b)
                  , r = $e(o, _);
                t = Ee(t),
                n = Ee(n);
                var s = Ce(t)
                  , a = Ce(n);
                try {
                    Pe(i._olm_create_outbound_session)(this.$b, e.$b, s, t.length, a, n.length, r, o)
                } finally {
                    Re(r, o)
                }
            }
            )),
            Ie.prototype.create_inbound = Ue((function(e, t) {
                var n = Ce(t = Ee(t));
                try {
                    Pe(i._olm_create_inbound_session)(this.$b, e.$b, n, t.length)
                } finally {
                    for (Re(n, t.length),
                    e = 0; e < t.length; e++)
                        t[e] = 0
                }
            }
            )),
            Ie.prototype.create_inbound_from = Ue((function(e, t, n) {
                var o = Ce(t = Ee(t))
                  , r = Ce(n = Ee(n));
                try {
                    Pe(i._olm_create_inbound_session_from)(this.$b, e.$b, o, t.length, r, n.length)
                } finally {
                    for (Re(r, n.length),
                    e = 0; e < n.length; e++)
                        n[e] = 0
                }
            }
            )),
            Ie.prototype.session_id = Ue((function() {
                var e = Pe(i._olm_session_id_length)(this.$b)
                  , t = Ce(e + 1);
                return Pe(i._olm_session_id)(this.$b, t, e),
                M(t, e)
            }
            )),
            Ie.prototype.has_received_message = function() {
                return !!Pe(i._olm_session_has_received_message)(this.$b)
            }
            ,
            Ie.prototype.matches_inbound = Ue((function(e) {
                var t = Ce(e = Ee(e));
                return !!Pe(i._olm_matches_inbound_session)(this.$b, t, e.length)
            }
            )),
            Ie.prototype.matches_inbound_from = Ue((function(e, t) {
                var n = Ce(e = Ee(e))
                  , o = Ce(t = Ee(t));
                return !!Pe(i._olm_matches_inbound_session_from)(this.$b, n, e.length, o, t.length)
            }
            )),
            Ie.prototype.encrypt = Ue((function(e) {
                try {
                    var t = Pe(i._olm_encrypt_random_length)(this.$b)
                      , n = Pe(i._olm_encrypt_message_type)(this.$b)
                      , o = j(e)
                      , r = Pe(i._olm_encrypt_message_length)(this.$b, o)
                      , s = $e(t, _)
                      , a = Ae(o + 1);
                    L(e, a, o + 1);
                    var l = Ae(r + 1);
                    return Pe(i._olm_encrypt)(this.$b, a, o, s, t, l, r),
                    ne(l + r),
                    {
                        type: n,
                        body: M(l, r)
                    }
                } finally {
                    void 0 !== s && Re(s, t),
                    void 0 !== a && (Re(a, o + 1),
                    Se(a)),
                    void 0 !== l && Se(l)
                }
            }
            )),
            Ie.prototype.decrypt = Ue((function(e, t) {
                try {
                    var n = Ae(t.length);
                    oe(t, n, !0);
                    var o = Pe(i._olm_decrypt_max_plaintext_length)(this.$b, e, n, t.length);
                    oe(t, n, !0);
                    var r = Ae(o + 1)
                      , s = Pe(i._olm_decrypt)(this.$b, e, n, t.length, r, o);
                    return ne(r + s),
                    M(r, s)
                } finally {
                    void 0 !== n && Se(n),
                    void 0 !== r && (Re(r, o),
                    Se(r))
                }
            }
            )),
            Ie.prototype.describe = Ue((function() {
                try {
                    var e = Ae(256);
                    return Pe(i._olm_session_describe)(this.$b, e, 256),
                    M(e)
                } finally {
                    void 0 !== e && Se(e)
                }
            }
            )),
            Ne.prototype.free = function() {
                i._olm_clear_utility(this.$b),
                Se(this.$b)
            }
            ,
            Ne.prototype.sha256 = Ue((function(e) {
                var t = Me(i._olm_sha256_length)(this.$b)
                  , n = Ce(e = Ee(e))
                  , o = Ce(t + 1);
                try {
                    Me(i._olm_sha256)(this.$b, n, e.length, o, t)
                } finally {
                    for (Re(n, e.length),
                    n = 0; n < e.length; n++)
                        e[n] = 0
                }
                return M(o, t)
            }
            )),
            Ne.prototype.ed25519_verify = Ue((function(e, t, n) {
                var o = Ce(e = Ee(e))
                  , r = Ce(t = Ee(t))
                  , s = Ce(n = Ee(n));
                try {
                    Me(i._olm_ed25519_verify)(this.$b, o, e.length, r, t.length, s, n.length)
                } finally {
                    for (Re(r, t.length),
                    e = 0; e < t.length; e++)
                        t[e] = 0
                }
            }
            )),
            s.Account = Te,
            s.Session = Ie,
            s.Utility = Ne,
            s.PkEncryption = he,
            s.PkDecryption = ye,
            s.PkSigning = ge,
            s.SAS = we,
            s.get_library_version = Ue((function() {
                var e = Ce(3);
                return i._olm_get_library_version(e, e + 1, e + 2),
                [te(e, "i8"), te(e + 1, "i8"), te(e + 2, "i8")]
            }
            )),
            t.ready
        }
        ,
        "object" == typeof t && "object" == typeof e ? e.exports = a : "function" == typeof define && define.amd ? define([], (function() {
            return a
        }
        )) : "object" == typeof t && (t.Module = a),
        s.init = function(e) {
            return i || (e && (OLM_OPTIONS = e),
            i = new Promise((function(e, t) {
                n = function() {
                    e()
                }
                ,
                o = function(e) {
                    t(e)
                }
                ,
                a()
            }
            )))
        }
        ,
        s);
        "undefined" != typeof window && (window.Olm = l),
        "object" == typeof e && (e.exports = l)
    },
    "./node_modules/matrix-react-sdk/src/BasePlatform.ts": (e,t,n)=>{
        "use strict";
        n.d(t, {
            FL: ()=>m,
            ot: ()=>h,
            U7: ()=>d,
            Kn: ()=>b,
            Ay: ()=>f
        });
        var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js")
          , r = n("./node_modules/matrix-js-sdk/src/matrix.ts")
          , i = n("./node_modules/matrix-js-sdk/src/logger.ts")
          , s = n("./node_modules/matrix-react-sdk/src/dispatcher/dispatcher.ts")
          , a = n("./node_modules/matrix-react-sdk/src/dispatcher/actions.ts")
          , l = n("./node_modules/matrix-react-sdk/src/toasts/UpdateToast.tsx")
          , _ = n("./node_modules/matrix-react-sdk/src/MatrixClientPeg.ts")
          , u = n("./node_modules/matrix-react-sdk/src/utils/StorageAccess.ts")
          , c = n("./node_modules/matrix-react-sdk/src/SdkConfig.ts");
        function p(e, t) {
            const n = new Uint8Array(e.length + t.length + 1);
            for (let t = 0; t < e.length; t++)
                n[t] = e.charCodeAt(t);
            n[e.length] = 124;
            for (let o = 0; o < t.length; o++)
                n[e.length + 1 + o] = t.charCodeAt(o);
            return n
        }
        const m = "mx_sso_hs_url"
          , d = "mx_sso_is_url"
          , h = "mx_sso_idp_id";
        let b = function(e) {
            return e.Checking = "CHECKING",
            e.Error = "ERROR",
            e.NotAvailable = "NOTAVAILABLE",
            e.Downloading = "DOWNLOADING",
            e.Ready = "READY",
            e
        }({});
        const y = "mx_defer_update";
        class f {
            constructor() {
                (0,
                o.A)(this, "notificationCount", 0),
                (0,
                o.A)(this, "errorDidOccur", !1),
                (0,
                o.A)(this, "onAction", (e=>{
                    switch (e.action) {
                    case "on_client_not_viable":
                    case a.r.OnLoggedOut:
                        this.setNotificationCount(0)
                    }
                }
                )),
                s.Ay.register(this.onAction),
                this.startUpdateCheck = this.startUpdateCheck.bind(this)
            }
            setNotificationCount(e) {
                this.notificationCount = e
            }
            setErrorStatus(e) {
                this.errorDidOccur = e
            }
            async canSelfUpdate() {
                return !1
            }
            startUpdateCheck() {
                (0,
                l.Y)(),
                localStorage.removeItem(y),
                s.Ay.dispatch({
                    action: a.r.CheckUpdates,
                    status: b.Checking
                })
            }
            installUpdate() {}
            shouldShowUpdate(e) {
                if (_.J.userRegisteredWithinLastHours(24))
                    return !1;
                try {
                    const [t,n] = JSON.parse(localStorage.getItem(y));
                    return e !== t || Date.now() > n
                } catch (e) {
                    return !0
                }
            }
            deferUpdate(e) {
                const t = new Date(Date.now() + 864e5);
                t.setHours(8, 0, 0, 0),
                localStorage.setItem(y, JSON.stringify([e, t.getTime()])),
                (0,
                l.Y)()
            }
            supportsSpellCheckSettings() {
                return !1
            }
            allowOverridingNativeContextMenus() {
                return !1
            }
            supportsNotifications() {
                return !1
            }
            maySendNotifications() {
                return !1
            }
            displayNotification(e, t, n, o, r) {
                const i = {
                    body: t,
                    silent: !0
                };
                n && (i.icon = n);
                const l = new window.Notification(e,i);
                return l.onclick = ()=>{
                    const e = {
                        action: a.r.ViewRoom,
                        room_id: o.roomId,
                        metricsTrigger: "Notification"
                    };
                    null != r && r.getThread() && (e.event_id = r.getId()),
                    s.Ay.dispatch(e),
                    window.focus()
                }
                ,
                l
            }
            loudNotification(e, t) {}
            clearNotification(e) {
                e.close && e.close()
            }
            needsUrlTooltips() {
                return !1
            }
            supportsSetting(e) {
                return !1
            }
            async getSettingValue(e) {}
            setSettingValue(e, t) {
                throw new Error("Unimplemented")
            }
            getEventIndexingManager() {
                return null
            }
            setLanguage(e) {}
            setSpellCheckEnabled(e) {}
            async getSpellCheckEnabled() {
                return !1
            }
            setSpellCheckLanguages(e) {}
            getSpellCheckLanguages() {
                return null
            }
            async getDesktopCapturerSources(e) {
                return []
            }
            supportsDesktopCapturer() {
                return !1
            }
            supportsJitsiScreensharing() {
                return !0
            }
            overrideBrowserShortcuts() {
                return !1
            }
            navigateForwardBack(e) {}
            getAvailableSpellCheckLanguages() {
                return null
            }
            getSSOCallbackUrl(e="") {
                const t = new URL(window.location.href);
                return t.hash = e,
                t
            }
            startSingleSignOn(e, t, n, o, r) {
                localStorage.setItem(m, e.getHomeserverUrl()),
                e.getIdentityServerUrl() && localStorage.setItem(d, e.getIdentityServerUrl()),
                o && localStorage.setItem(h, o);
                const i = this.getSSOCallbackUrl(n);
                window.location.href = e.getSsoLoginUrl(i.toString(), t, o, r)
            }
            async getPickleKey(e, t) {
                var n;
                let o;
                try {
                    o = await (0,
                    u.Gt)("pickleKey", [e, t])
                } catch (e) {
                    i.v.error("idbLoad for pickleKey failed", e)
                }
                return null !== (n = await async function(e, t, n) {
                    var o;
                    if (null !== (o = crypto) && void 0 !== o && o.subtle && e && e.encrypted && e.iv && e.cryptoKey)
                        try {
                            const o = p(t, n)
                              , i = await crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: e.iv,
                                additionalData: o
                            }, e.cryptoKey, e.encrypted);
                            if (i)
                                return (0,
                                r.encodeUnpaddedBase64)(i)
                        } catch (e) {
                            i.v.error("Error decrypting pickle key")
                        }
                }(o, e, t)) && void 0 !== n ? n : null
            }
            async createPickleKey(e, t) {
                const n = new Uint8Array(32);
                crypto.getRandomValues(n);
                const o = await async function(e, t, n) {
                    var o;
                    if (null === (o = crypto) || void 0 === o || !o.subtle)
                        return;
                    const r = await crypto.subtle.generateKey({
                        name: "AES-GCM",
                        length: 256
                    }, !1, ["encrypt", "decrypt"])
                      , i = new Uint8Array(32);
                    crypto.getRandomValues(i);
                    const s = p(t, n);
                    return {
                        encrypted: await crypto.subtle.encrypt({
                            name: "AES-GCM",
                            iv: i,
                            additionalData: s
                        }, r, e),
                        iv: i,
                        cryptoKey: r
                    }
                }(n, e, t);
                if (void 0 === o)
                    return null;
                try {
                    await (0,
                    u.x7)("pickleKey", [e, t], o)
                } catch (e) {
                    return null
                }
                return (0,
                r.encodeUnpaddedBase64)(n)
            }
            async destroyPickleKey(e, t) {
                try {
                    await (0,
                    u.N6)("pickleKey", [e, t])
                } catch (e) {
                    i.v.error("idbDelete failed in destroyPickleKey", e)
                }
            }
            async clearStorage() {
                window.sessionStorage.clear(),
                window.localStorage.clear()
            }
            get baseUrl() {
                return window.location.origin + window.location.pathname
            }
            get defaultOidcClientUri() {
                return window.location.origin
            }
            async getOidcClientMetadata() {
                var e, t, n, o, r, i, s, a, l, _, u;
                const p = c.Ay.get();
                return {
                    clientName: p.brand,
                    clientUri: null !== (e = null === (t = p.oidc_metadata) || void 0 === t ? void 0 : t.client_uri) && void 0 !== e ? e : this.defaultOidcClientUri,
                    redirectUris: [this.getOidcCallbackUrl().href],
                    logoUri: null !== (n = null === (o = p.oidc_metadata) || void 0 === o ? void 0 : o.logo_uri) && void 0 !== n ? n : new URL("vector-icons/1024.png",this.baseUrl).href,
                    applicationType: "web",
                    contacts: null === (r = p.oidc_metadata) || void 0 === r ? void 0 : r.contacts,
                    tosUri: null !== (i = null === (s = p.oidc_metadata) || void 0 === s ? void 0 : s.tos_uri) && void 0 !== i ? i : null === (a = p.terms_and_conditions_links) || void 0 === a || null === (l = a[0]) || void 0 === l ? void 0 : l.url,
                    policyUri: null !== (_ = null === (u = p.oidc_metadata) || void 0 === u ? void 0 : u.policy_uri) && void 0 !== _ ? _ : p.privacy_policy_url
                }
            }
            getOidcClientState() {
                return ""
            }
            getOidcCallbackUrl() {
                const e = new URL(window.location.href);
                return e.hash = "",
                e
            }
        }
    }
    ,
    "./node_modules/matrix-react-sdk/src/components/views/elements/DesktopCapturerSourcePicker.tsx": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Ay: ()=>b
        });
        var o = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js")
          , r = n("./node_modules/react/index.js")
          , i = n("./node_modules/classnames/index.js")
          , s = n.n(i)
          , a = n("./node_modules/matrix-react-sdk/src/languageHandler.tsx")
          , l = n("./node_modules/matrix-react-sdk/src/components/views/dialogs/BaseDialog.tsx")
          , _ = n("./node_modules/matrix-react-sdk/src/components/views/elements/DialogButtons.tsx")
          , u = n("./node_modules/matrix-react-sdk/src/components/views/elements/AccessibleButton.tsx")
          , c = n("./node_modules/matrix-react-sdk/src/components/structures/TabbedView.tsx")
          , p = n("./node_modules/matrix-react-sdk/src/PlatformPeg.ts");
        function m() {
            const e = p.A.get();
            return e ? null == e ? void 0 : e.getDesktopCapturerSources({
                thumbnailSize: {
                    height: 176,
                    width: 312
                },
                types: ["screen", "window"]
            }) : Promise.resolve([])
        }
        let d = function(e) {
            return e.Screens = "screen",
            e.Windows = "window",
            e
        }({});
        class h extends r.Component {
            constructor(e) {
                super(e),
                (0,
                o.A)(this, "onClick", (()=>{
                    this.props.onSelect(this.props.source)
                }
                ))
            }
            render() {
                const e = s()({
                    mx_desktopCapturerSourcePicker_source_thumbnail: !0,
                    mx_desktopCapturerSourcePicker_source_thumbnail_selected: this.props.selected
                });
                return r.createElement(u.A, {
                    className: "mx_desktopCapturerSourcePicker_source",
                    title: this.props.source.name,
                    onClick: this.onClick
                }, r.createElement("img", {
                    alt: this.props.source.name,
                    className: e,
                    src: this.props.source.thumbnailURL
                }), r.createElement("span", {
                    className: "mx_desktopCapturerSourcePicker_source_name"
                }, this.props.source.name))
            }
        }
        class b extends r.Component {
            constructor(e) {
                super(e),
                (0,
                o.A)(this, "interval", void 0),
                (0,
                o.A)(this, "onSelect", (e=>{
                    this.setState({
                        selectedSource: e
                    })
                }
                )),
                (0,
                o.A)(this, "onShare", (()=>{
                    this.props.onFinished(this.state.selectedSource)
                }
                )),
                (0,
                o.A)(this, "onTabChange", (e=>{
                    this.setState({
                        selectedSource: void 0,
                        selectedTab: e
                    })
                }
                )),
                (0,
                o.A)(this, "onCloseClick", (()=>{
                    this.props.onFinished()
                }
                )),
                this.state = {
                    selectedTab: d.Screens,
                    sources: []
                }
            }
            async componentDidMount() {
                this.setState({
                    sources: await m()
                }),
                this.interval = window.setInterval((async()=>{
                    this.setState({
                        sources: await m()
                    })
                }
                ), 500)
            }
            componentWillUnmount() {
                clearInterval(this.interval)
            }
            getTab(e, t) {
                const n = this.state.sources.filter((t=>t.id.startsWith(e))).map((e=>{
                    var t;
                    return r.createElement(h, {
                        selected: (null === (t = this.state.selectedSource) || void 0 === t ? void 0 : t.id) === e.id,
                        source: e,
                        onSelect: this.onSelect,
                        key: e.id
                    })
                }
                ));
                return new c.oz(e,t,null,r.createElement("div", {
                    className: "mx_desktopCapturerSourcePicker_tab"
                }, n))
            }
            render() {
                const e = [this.getTab(d.Screens, (0,
                a.AO)("voip|screenshare_monitor")), this.getTab(d.Windows, (0,
                a.AO)("voip|screenshare_window"))];
                return r.createElement(l.A, {
                    className: "mx_desktopCapturerSourcePicker",
                    onFinished: this.onCloseClick,
                    title: (0,
                    a._t)("voip|screenshare_title")
                }, r.createElement(c.Ay, {
                    tabs: e,
                    tabLocation: c.lX.TOP,
                    activeTabId: this.state.selectedTab,
                    onChange: this.onTabChange
                }), r.createElement(_.A, {
                    primaryButton: (0,
                    a._t)("action|share"),
                    hasCancel: !0,
                    onCancel: this.onCloseClick,
                    onPrimaryButtonClick: this.onShare,
                    primaryDisabled: !this.state.selectedSource
                }))
            }
        }
    }
    ,
    "./node_modules/matrix-react-sdk/src/components/views/toasts/GenericExpiringToast.tsx": (e,t,n)=>{
        "use strict";
        n.d(t, {
            A: ()=>a
        });
        var o = n("./node_modules/react/index.js")
          , r = n("./node_modules/matrix-react-sdk/src/stores/ToastStore.ts")
          , i = n("./node_modules/matrix-react-sdk/src/components/views/toasts/GenericToast.tsx")
          , s = n("./node_modules/matrix-react-sdk/src/hooks/useTimeout.ts");
        const a = ({description: e, acceptLabel: t, dismissLabel: n, onAccept: a, onDismiss: l, toastKey: _, numSeconds: u})=>{
            const c = ()=>{
                l && l(),
                r.A.sharedInstance().dismissToast(_)
            }
              , p = (0,
            s.kD)(c, 1e3, u);
            let m = n;
            return p > 0 && (m += ` (${p})`),
            o.createElement(i.A, {
                description: e,
                acceptLabel: t,
                onAccept: a,
                rejectLabel: m,
                onReject: c
            })
        }
    }
    ,
    "./node_modules/matrix-react-sdk/src/indexing/BaseEventIndexManager.ts": (e,t,n)=>{
        "use strict";
        n.d(t, {
            A: ()=>o
        });
        class o {
            async supportsEventIndexing() {
                return !0
            }
            async initEventIndex(e, t) {
                throw new Error("Unimplemented")
            }
            async addEventToIndex(e, t) {
                throw new Error("Unimplemented")
            }
            async deleteEvent(e) {
                throw new Error("Unimplemented")
            }
            async isEventIndexEmpty() {
                throw new Error("Unimplemented")
            }
            isRoomIndexed(e) {
                throw new Error("Unimplemented")
            }
            async getStats() {
                throw new Error("Unimplemented")
            }
            async getUserVersion() {
                throw new Error("Unimplemented")
            }
            async setUserVersion(e) {
                throw new Error("Unimplemented")
            }
            async commitLiveEvents() {
                throw new Error("Unimplemented")
            }
            async searchEventIndex(e) {
                throw new Error("Unimplemented")
            }
            async addHistoricEvents(e, t, n) {
                throw new Error("Unimplemented")
            }
            async addCrawlerCheckpoint(e) {
                throw new Error("Unimplemented")
            }
            async removeCrawlerCheckpoint(e) {
                throw new Error("Unimplemented")
            }
            async loadCheckpoints() {
                throw new Error("Unimplemented")
            }
            async loadFileEvents(e) {
                throw new Error("Unimplemented")
            }
            async closeEventIndex() {
                throw new Error("Unimplemented")
            }
            async deleteEventIndex() {
                throw new Error("Unimplemented")
            }
        }
    }
    ,
    "./node_modules/matrix-react-sdk/src/stores/BreadcrumbsStore.ts": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Y: ()=>d
        });
        var o, r = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"), i = n("./node_modules/matrix-js-sdk/src/matrix.ts"), s = n("./node_modules/matrix-js-sdk/src/types.ts"), a = n("./node_modules/matrix-js-sdk/src/utils.ts"), l = n("./node_modules/matrix-react-sdk/src/settings/SettingsStore.ts"), _ = n("./node_modules/matrix-react-sdk/src/stores/AsyncStoreWithClient.ts"), u = n("./node_modules/matrix-react-sdk/src/dispatcher/dispatcher.ts"), c = n("./node_modules/matrix-react-sdk/src/utils/arrays.ts"), p = n("./node_modules/matrix-react-sdk/src/settings/SettingLevel.ts"), m = n("./node_modules/matrix-react-sdk/src/dispatcher/actions.ts");
        class d extends _.r {
            constructor() {
                super(u.Ay),
                (0,
                r.A)(this, "waitingRooms", []),
                (0,
                r.A)(this, "onMyMembership", (async e=>{
                    const t = l.A.getValue("breadcrumbs", null, !0);
                    this.meetsRoomRequirement && (0,
                    a.hX)(t) && await l.A.setValue("breadcrumbs", null, p.p.ACCOUNT, !0)
                }
                )),
                (0,
                r.A)(this, "onRoom", (async e=>{
                    const t = this.waitingRooms.find((t=>t.roomId === e.roomId));
                    t && (this.waitingRooms.splice(this.waitingRooms.indexOf(t), 1),
                    Date.now() - t.addedTs > 9e4 || await this.appendRoom(e))
                }
                )),
                l.A.monitorSetting("breadcrumb_rooms", null),
                l.A.monitorSetting("breadcrumbs", null)
            }
            static get instance() {
                return d.internalInstance
            }
            get rooms() {
                return this.state.rooms || []
            }
            get visible() {
                return !!this.state.enabled && this.meetsRoomRequirement
            }
            get meetsRoomRequirement() {
                const e = l.A.getValue("feature_dynamic_room_predecessors");
                return !!this.matrixClient && this.matrixClient.getVisibleRooms(e).length >= 20
            }
            async onAction(e) {
                if (this.matrixClient)
                    if (e.action === m.r.SettingUpdated)
                        "breadcrumb_rooms" === e.settingName ? await this.updateRooms() : "breadcrumbs" === e.settingName && await this.updateState({
                            enabled: l.A.getValue("breadcrumbs", null)
                        });
                    else if (e.action === m.r.ViewRoom)
                        if (e.auto_join && e.room_id && !this.matrixClient.getRoom(e.room_id))
                            this.waitingRooms.push({
                                roomId: e.room_id,
                                addedTs: Date.now()
                            });
                        else {
                            const t = this.matrixClient.getRoom(e.room_id)
                              , n = null == t ? void 0 : t.getMyMembership();
                            t && n === s.O.Join && await this.appendRoom(t)
                        }
                    else if (e.action === m.r.JoinRoom) {
                        const t = this.matrixClient.getRoom(e.roomId);
                        t && await this.appendRoom(t)
                    }
            }
            async onReady() {
                await this.updateRooms(),
                await this.updateState({
                    enabled: l.A.getValue("breadcrumbs", null)
                }),
                this.matrixClient && (this.matrixClient.on(i.RoomEvent.MyMembership, this.onMyMembership),
                this.matrixClient.on(i.ClientEvent.Room, this.onRoom))
            }
            async onNotReady() {
                this.matrixClient && (this.matrixClient.removeListener(i.RoomEvent.MyMembership, this.onMyMembership),
                this.matrixClient.removeListener(i.ClientEvent.Room, this.onRoom))
            }
            async updateRooms() {
                let e = l.A.getValue("breadcrumb_rooms");
                e && 0 !== e.length || (e = []);
                const t = (0,
                c.Bo)(e.map((e=>{
                    var t;
                    return null === (t = this.matrixClient) || void 0 === t ? void 0 : t.getRoom(e)
                }
                )))
                  , n = this.state.rooms || [];
                (0,
                c.dc)(t, n) && await this.updateState({
                    rooms: t
                })
            }
            async appendRoom(e) {
                var t;
                let n = !1;
                const o = (this.state.rooms || []).slice()
                  , r = l.A.getValue("feature_dynamic_room_predecessors")
                  , i = null === (t = this.matrixClient) || void 0 === t ? void 0 : t.getRoomUpgradeHistory(e.roomId, !1, r);
                if (i && i.length > 1) {
                    e = i[i.length - 1];
                    for (let e = 0; e < i.length - 1; e++) {
                        const t = o.findIndex((t=>t.roomId === i[e].roomId));
                        -1 !== t && (o.splice(t, 1),
                        n = !0)
                    }
                }
                const s = o.findIndex((t=>t.roomId === e.roomId));
                if (0 !== s && (-1 !== s && o.splice(s, 1),
                o.splice(0, 0, e),
                n = !0),
                o.length > 20 && (o.splice(20, o.length - 20),
                n = !0),
                n) {
                    await this.updateState({
                        rooms: o
                    });
                    const e = o.map((e=>e.roomId));
                    e.length > 0 && await l.A.setValue("breadcrumb_rooms", null, p.p.ACCOUNT, e)
                }
            }
        }
        o = d,
        (0,
        r.A)(d, "internalInstance", (()=>{
            const e = new o;
            return e.start(),
            e
        }
        )())
    }
    ,
    "./node_modules/matrix-react-sdk/src/toasts/UpdateToast.tsx": (e,t,n)=>{
        "use strict";
        n.d(t, {
            Y: ()=>g,
            P: ()=>f
        });
        var o = n("./node_modules/react/index.js")
          , r = n("./node_modules/matrix-react-sdk/src/languageHandler.tsx")
          , i = n("./node_modules/matrix-react-sdk/src/SdkConfig.ts")
          , s = n("./node_modules/matrix-react-sdk/src/components/views/toasts/GenericToast.tsx")
          , a = n("./node_modules/matrix-react-sdk/src/stores/ToastStore.ts")
          , l = n("./node_modules/matrix-react-sdk/src/components/views/dialogs/QuestionDialog.tsx")
          , _ = n("./node_modules/matrix-react-sdk/src/components/views/elements/Spinner.tsx")
          , u = n("./node_modules/matrix-react-sdk/src/components/views/typography/Heading.tsx");
        const c = ["vector-im/element-web", "matrix-org/matrix-react-sdk", "matrix-org/matrix-js-sdk"];
        class p extends o.Component {
            constructor(e) {
                super(e),
                this.state = {}
            }
            async fetchChanges(e, t, n) {
                const o = `https://riot.im/github/repos/${e}/compare/${t}...${n}`;
                try {
                    const t = await fetch(o);
                    if (!t.ok)
                        return void this.setState({
                            [e]: t.statusText
                        });
                    const n = await t.json();
                    this.setState({
                        [e]: n.commits
                    })
                } catch (t) {
                    this.setState({
                        [e]: t instanceof Error ? t.message : (0,
                        r._t)("error|unknown")
                    })
                }
            }
            componentDidMount() {
                const e = this.props.newVersion.split("-")
                  , t = this.props.version.split("-");
                if (null != e && null != t)
                    for (let n = 0; n < c.length; n++) {
                        const o = t[2 * n]
                          , r = e[2 * n];
                        this.fetchChanges(c[n], o, r)
                    }
            }
            elementsForCommit(e) {
                return o.createElement("li", {
                    key: e.sha,
                    className: "mx_ChangelogDialog_li"
                }, o.createElement("a", {
                    href: e.html_url,
                    target: "_blank",
                    rel: "noreferrer noopener"
                }, e.commit.message.split("\n")[0]))
            }
            render() {
                const e = c.map((e=>{
                    let t;
                    return t = null == this.state[e] ? o.createElement(_.A, {
                        key: e
                    }) : "string" == typeof this.state[e] ? (0,
                    r._t)("update|error_unable_load_commit", {
                        msg: this.state[e]
                    }) : this.state[e].map(this.elementsForCommit),
                    o.createElement("div", {
                        key: e
                    }, o.createElement(u.A, {
                        as: "h2",
                        size: "4"
                    }, e), o.createElement("ul", null, t))
                }
                ))
                  , t = o.createElement("div", {
                    className: "mx_ChangelogDialog_content"
                }, null == this.props.version || null == this.props.newVersion ? o.createElement("h2", null, (0,
                r._t)("update|unavailable")) : e);
                return o.createElement(l.A, {
                    title: (0,
                    r._t)("update|changelog"),
                    description: t,
                    button: (0,
                    r._t)("action|update"),
                    onFinished: this.props.onFinished
                })
            }
        }
        var m = n("./node_modules/matrix-react-sdk/src/PlatformPeg.ts")
          , d = n("./node_modules/matrix-react-sdk/src/Modal.tsx");
        const h = "update";
        function b(e) {
            const t = e.split("-");
            return 5 === t.length && "react" === t[1] && "js" === t[3]
        }
        function y() {
            var e;
            null === (e = m.A.get()) || void 0 === e || e.installUpdate()
        }
        const f = (e,t,n)=>{
            let _, u = (0,
            r._t)("update|see_changes_button");
            n ? _ = ()=>{
                d.Ay.createDialog(l.A, {
                    title: (0,
                    r._t)("update|release_notes_toast_title"),
                    description: o.createElement("pre", null, n),
                    button: (0,
                    r._t)("action|update"),
                    onFinished: e=>{
                        e && m.A.get() && m.A.get().installUpdate()
                    }
                })
            }
            : b(e) && b(t) ? _ = ()=>{
                d.Ay.createDialog(p, {
                    version: e,
                    newVersion: t,
                    onFinished: e=>{
                        e && m.A.get() && m.A.get().installUpdate()
                    }
                })
            }
            : (_ = y,
            u = (0,
            r._t)("action|update"));
            const c = i.Ay.get().brand;
            a.A.sharedInstance().addOrReplaceToast({
                key: h,
                title: (0,
                r._t)("update|toast_title", {
                    brand: c
                }),
                props: {
                    description: (0,
                    r._t)("update|toast_description", {
                        brand: c
                    }),
                    acceptLabel: u,
                    onAccept: _,
                    rejectLabel: (0,
                    r._t)("action|dismiss"),
                    onReject: function() {
                        var e;
                        null === (e = m.A.get()) || void 0 === e || e.deferUpdate(t)
                    }
                },
                component: s.A,
                priority: 20
            })
        }
          , g = ()=>{
            a.A.sharedInstance().dismissToast(h)
        }
    }
    ,
    "./node_modules/@matrix-org/olm/olm.wasm": (e,t,n)=>{
        "use strict";
        n.d(t, {
            A: ()=>o
        });
        const o = n.p + "olm.aab9861.wasm"
    }
    ,
    "./node_modules/ua-parser-js/src/ua-parser.js": function(e, t, n) {
        var o;
        !function(r, i) {
            "use strict";
            var s = "function"
              , a = "undefined"
              , l = "object"
              , _ = "string"
              , u = "major"
              , c = "model"
              , p = "name"
              , m = "type"
              , d = "vendor"
              , h = "version"
              , b = "architecture"
              , y = "console"
              , f = "mobile"
              , g = "tablet"
              , k = "smarttv"
              , w = "wearable"
              , v = "embedded"
              , x = "Amazon"
              , A = "Apple"
              , S = "ASUS"
              , $ = "BlackBerry"
              , C = "Browser"
              , E = "Chrome"
              , U = "Firefox"
              , R = "Google"
              , T = "Huawei"
              , O = "LG"
              , I = "Microsoft"
              , P = "Motorola"
              , N = "Opera"
              , M = "Samsung"
              , z = "Sharp"
              , L = "Sony"
              , j = "Xiaomi"
              , D = "Zebra"
              , V = "Facebook"
              , q = "Chromium OS"
              , H = "Mac OS"
              , B = function(e) {
                for (var t = {}, n = 0; n < e.length; n++)
                    t[e[n].toUpperCase()] = e[n];
                return t
            }
              , F = function(e, t) {
                return typeof e === _ && -1 !== W(t).indexOf(W(e))
            }
              , W = function(e) {
                return e.toLowerCase()
            }
              , G = function(e, t) {
                if (typeof e === _)
                    return e = e.replace(/^\s\s*/, ""),
                    typeof t === a ? e : e.substring(0, 500)
            }
              , K = function(e, t) {
                for (var n, o, r, a, _, u, c = 0; c < t.length && !_; ) {
                    var p = t[c]
                      , m = t[c + 1];
                    for (n = o = 0; n < p.length && !_ && p[n]; )
                        if (_ = p[n++].exec(e))
                            for (r = 0; r < m.length; r++)
                                u = _[++o],
                                typeof (a = m[r]) === l && a.length > 0 ? 2 === a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, u) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = u ? u.replace(a[1], a[2]) : i : this[a[0]] = u ? a[1].call(this, u, a[2]) : i : 4 === a.length && (this[a[0]] = u ? a[3].call(this, u.replace(a[1], a[2])) : i) : this[a] = u || i;
                    c += 2
                }
            }
              , X = function(e, t) {
                for (var n in t)
                    if (typeof t[n] === l && t[n].length > 0) {
                        for (var o = 0; o < t[n].length; o++)
                            if (F(t[n][o], e))
                                return "?" === n ? i : n
                    } else if (F(t[n], e))
                        return "?" === n ? i : n;
                return e
            }
              , Y = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
              , J = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [h, [p, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [h, [p, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [p, h], [/opios[\/ ]+([\w\.]+)/i], [h, [p, N + " Mini"]], [/\bopr\/([\w\.]+)/i], [h, [p, N]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [h, [p, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [p, h], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [h, [p, "UC" + C]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [h, [p, "WeChat"]], [/konqueror\/([\w\.]+)/i], [h, [p, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [h, [p, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [h, [p, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [h, [p, "Smart Lenovo " + C]], [/(avast|avg)\/([\w\.]+)/i], [[p, /(.+)/, "$1 Secure " + C], h], [/\bfocus\/([\w\.]+)/i], [h, [p, U + " Focus"]], [/\bopt\/([\w\.]+)/i], [h, [p, N + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [h, [p, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [h, [p, "Dolphin"]], [/coast\/([\w\.]+)/i], [h, [p, N + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [h, [p, "MIUI " + C]], [/fxios\/([-\w\.]+)/i], [h, [p, U]], [/\bqihu|(qi?ho?o?|360)browser/i], [[p, "360 " + C]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[p, /(.+)/, "$1 " + C], h], [/samsungbrowser\/([\w\.]+)/i], [h, [p, M + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[p, /_/g, " "], h], [/metasr[\/ ]?([\d\.]+)/i], [h, [p, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[p, "Sogou Mobile"], h], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [p, h], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [p], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[p, V], h], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [p, h], [/\bgsa\/([\w\.]+) .*safari\//i], [h, [p, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [h, [p, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [h, [p, E + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[p, E + " WebView"], h], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [h, [p, "Android " + C]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [p, h], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [h, [p, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [h, p], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [p, [h, X, {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]], [/(webkit|khtml)\/([\w\.]+)/i], [p, h], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[p, "Netscape"], h], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [h, [p, U + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [p, h], [/(cobalt)\/([\w\.]+)/i], [p, [h, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[b, "amd64"]], [/(ia32(?=;))/i], [[b, W]], [/((?:i[346]|x)86)[;\)]/i], [[b, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[b, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[b, "armhf"]], [/windows (ce|mobile); ppc;/i], [[b, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[b, /ower/, "", W]], [/(sun4\w)[;\)]/i], [[b, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[b, W]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [d, M], [m, g]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [d, M], [m, f]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [d, A], [m, f]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [d, A], [m, g]], [/(macintosh);/i], [c, [d, A]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [d, z], [m, f]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [d, T], [m, g]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [d, T], [m, f]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [d, j], [m, f]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [d, j], [m, g]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [d, "OPPO"], [m, f]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [d, "Vivo"], [m, f]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [d, "Realme"], [m, f]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [d, P], [m, f]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [d, P], [m, g]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [d, O], [m, g]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [d, O], [m, f]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [d, "Lenovo"], [m, g]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [d, "Nokia"], [m, f]], [/(pixel c)\b/i], [c, [d, R], [m, g]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [d, R], [m, f]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [d, L], [m, f]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [d, L], [m, g]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [d, "OnePlus"], [m, f]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [d, x], [m, g]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [d, x], [m, f]], [/(playbook);[-\w\),; ]+(rim)/i], [c, d, [m, g]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [d, $], [m, f]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [d, S], [m, g]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [d, S], [m, f]], [/(nexus 9)/i], [c, [d, "HTC"], [m, g]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [d, [c, /_/g, " "], [m, f]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [d, "Acer"], [m, g]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [d, "Meizu"], [m, f]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [d, "Ulefone"], [m, f]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [d, c, [m, f]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [d, c, [m, g]], [/(surface duo)/i], [c, [d, I], [m, g]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [d, "Fairphone"], [m, f]], [/(u304aa)/i], [c, [d, "AT&T"], [m, f]], [/\bsie-(\w*)/i], [c, [d, "Siemens"], [m, f]], [/\b(rct\w+) b/i], [c, [d, "RCA"], [m, g]], [/\b(venue[\d ]{2,7}) b/i], [c, [d, "Dell"], [m, g]], [/\b(q(?:mv|ta)\w+) b/i], [c, [d, "Verizon"], [m, g]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [d, "Barnes & Noble"], [m, g]], [/\b(tm\d{3}\w+) b/i], [c, [d, "NuVision"], [m, g]], [/\b(k88) b/i], [c, [d, "ZTE"], [m, g]], [/\b(nx\d{3}j) b/i], [c, [d, "ZTE"], [m, f]], [/\b(gen\d{3}) b.+49h/i], [c, [d, "Swiss"], [m, f]], [/\b(zur\d{3}) b/i], [c, [d, "Swiss"], [m, g]], [/\b((zeki)?tb.*\b) b/i], [c, [d, "Zeki"], [m, g]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[d, "Dragon Touch"], c, [m, g]], [/\b(ns-?\w{0,9}) b/i], [c, [d, "Insignia"], [m, g]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [d, "NextBook"], [m, g]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[d, "Voice"], c, [m, f]], [/\b(lvtel\-)?(v1[12]) b/i], [[d, "LvTel"], c, [m, f]], [/\b(ph-1) /i], [c, [d, "Essential"], [m, f]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [d, "Envizen"], [m, g]], [/\b(trio[-\w\. ]+) b/i], [c, [d, "MachSpeed"], [m, g]], [/\btu_(1491) b/i], [c, [d, "Rotor"], [m, g]], [/(shield[\w ]+) b/i], [c, [d, "Nvidia"], [m, g]], [/(sprint) (\w+)/i], [d, c, [m, f]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [d, I], [m, f]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [d, D], [m, g]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [d, D], [m, f]], [/smart-tv.+(samsung)/i], [d, [m, k]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [d, M], [m, k]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[d, O], [m, k]], [/(apple) ?tv/i], [d, [c, A + " TV"], [m, k]], [/crkey/i], [[c, E + "cast"], [d, R], [m, k]], [/droid.+aft(\w+)( bui|\))/i], [c, [d, x], [m, k]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [d, z], [m, k]], [/(bravia[\w ]+)( bui|\))/i], [c, [d, L], [m, k]], [/(mitv-\w{5}) bui/i], [c, [d, j], [m, k]], [/Hbbtv.*(technisat) (.*);/i], [d, c, [m, k]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[d, G], [c, G], [m, k]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[m, k]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [d, c, [m, y]], [/droid.+; (shield) bui/i], [c, [d, "Nvidia"], [m, y]], [/(playstation [345portablevi]+)/i], [c, [d, L], [m, y]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [d, I], [m, y]], [/((pebble))app/i], [d, c, [m, w]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [d, A], [m, w]], [/droid.+; (glass) \d/i], [c, [d, R], [m, w]], [/droid.+; (wt63?0{2,3})\)/i], [c, [d, D], [m, w]], [/(quest( 2| pro)?)/i], [c, [d, V], [m, w]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [d, [m, v]], [/(aeobc)\b/i], [c, [d, x], [m, v]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [m, f]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [m, g]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[m, g]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[m, f]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [d, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [h, [p, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [h, [p, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [p, h], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [h, p]],
                os: [[/microsoft (windows) (vista|xp)/i], [p, h], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [p, [h, X, Y]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[h, X, Y], [p, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[h, /_/g, "."], [p, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[p, H], [h, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [h, p], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [p, h], [/\(bb(10);/i], [h, [p, $]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [h, [p, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [h, [p, U + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [h, [p, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [h, [p, "watchOS"]], [/crkey\/([\d\.]+)/i], [h, [p, E + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[p, q], h], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [p, h], [/(sunos) ?([\w\.\d]*)/i], [[p, "Solaris"], h], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [p, h]]
            }
              , Z = function(e, t) {
                if (typeof e === l && (t = e,
                e = i),
                !(this instanceof Z))
                    return new Z(e,t).getResult();
                var n = typeof r !== a && r.navigator ? r.navigator : i
                  , o = e || (n && n.userAgent ? n.userAgent : "")
                  , y = n && n.userAgentData ? n.userAgentData : i
                  , k = t ? function(e, t) {
                    var n = {};
                    for (var o in e)
                        t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                    return n
                }(J, t) : J
                  , w = n && n.userAgent == o;
                return this.getBrowser = function() {
                    var e, t = {};
                    return t[p] = i,
                    t[h] = i,
                    K.call(t, o, k.browser),
                    t[u] = typeof (e = t[h]) === _ ? e.replace(/[^\d\.]/g, "").split(".")[0] : i,
                    w && n && n.brave && typeof n.brave.isBrave == s && (t[p] = "Brave"),
                    t
                }
                ,
                this.getCPU = function() {
                    var e = {};
                    return e[b] = i,
                    K.call(e, o, k.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {};
                    return e[d] = i,
                    e[c] = i,
                    e[m] = i,
                    K.call(e, o, k.device),
                    w && !e[m] && y && y.mobile && (e[m] = f),
                    w && "Macintosh" == e[c] && n && typeof n.standalone !== a && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[c] = "iPad",
                    e[m] = g),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {};
                    return e[p] = i,
                    e[h] = i,
                    K.call(e, o, k.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {};
                    return e[p] = i,
                    e[h] = i,
                    K.call(e, o, k.os),
                    w && !e[p] && y && "Unknown" != y.platform && (e[p] = y.platform.replace(/chrome os/i, q).replace(/macos/i, H)),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return o
                }
                ,
                this.setUA = function(e) {
                    return o = typeof e === _ && e.length > 500 ? G(e, 500) : e,
                    this
                }
                ,
                this.setUA(o),
                this
            };
            Z.VERSION = "1.0.37",
            Z.BROWSER = B([p, h, u]),
            Z.CPU = B([b]),
            Z.DEVICE = B([c, d, m, y, f, k, g, w, v]),
            Z.ENGINE = Z.OS = B([p, h]),
            typeof t !== a ? (e.exports && (t = e.exports = Z),
            t.UAParser = Z) : n.amdO ? (o = function() {
                return Z
            }
            .call(t, n, t, e)) === i || (e.exports = o) : typeof r !== a && (r.UAParser = Z);
            var Q = typeof r !== a && (r.jQuery || r.Zepto);
            if (Q && !Q.ua) {
                var ee = new Z;
                Q.ua = ee.getResult(),
                Q.ua.get = function() {
                    return ee.getUA()
                }
                ,
                Q.ua.set = function(e) {
                    ee.setUA(e);
                    var t = ee.getResult();
                    for (var n in t)
                        Q.ua[n] = t[n]
                }
            }
        }("object" == typeof window ? window : this)
    }
}]);
//# sourceMappingURL=3142.js.map
