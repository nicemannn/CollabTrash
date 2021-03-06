if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function(t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function() {
    function t(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function e(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = function(t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function i(t) {
                return (t[0] || t).nodeType
            }

            function n() {
                return {
                    bindType: a.end,
                    delegateType: a.end,
                    handle: function(e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function o() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in h)
                    if (void 0 !== t.style[e]) return {
                        end: h[e]
                    };
                return !1
            }

            function r(e) {
                var i = this,
                    n = !1;
                return t(this).one(c.TRANSITION_END, function() {
                    n = !0
                }), setTimeout(function() {
                    n || c.triggerTransitionEnd(i)
                }, e), this
            }

            function s() {
                a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = n())
            }
            var a = !1,
                l = 1e6,
                h = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                c = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        do t += ~~(Math.random() * l); while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        t(e).trigger(a.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(a)
                    },
                    typeCheckConfig: function(t, n, o) {
                        for (var r in o)
                            if (o.hasOwnProperty(r)) {
                                var s = o[r],
                                    a = n[r],
                                    l = a && i(a) ? "element" : e(a);
                                if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                            }
                    }
                };
            return s(), c
        }(jQuery),
        s = (function(t) {
            var e = "alert",
                n = "4.0.0-alpha.6",
                s = "bs.alert",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 150,
                u = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                f = {
                    CLOSE: "close" + a,
                    CLOSED: "closed" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                d = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                _ = function() {
                    function e(t) {
                        i(this, e), this._element = t
                    }
                    return e.prototype.close = function(t) {
                        t = t || this._element;
                        var e = this._getRootElement(t),
                            i = this._triggerCloseEvent(e);
                        i.isDefaultPrevented() || this._removeElement(e)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, s), this._element = null
                    }, e.prototype._getRootElement = function(e) {
                        var i = r.getSelectorFromElement(e),
                            n = !1;
                        return i && (n = t(i)[0]), n || (n = t(e).closest("." + d.ALERT)[0]), n
                    }, e.prototype._triggerCloseEvent = function(e) {
                        var i = t.Event(f.CLOSE);
                        return t(e).trigger(i), i
                    }, e.prototype._removeElement = function(e) {
                        var i = this;
                        return t(e).removeClass(d.SHOW), r.supportsTransitionEnd() && t(e).hasClass(d.FADE) ? void t(e).one(r.TRANSITION_END, function(t) {
                            return i._destroyElement(e, t)
                        }).emulateTransitionEnd(c) : void this._destroyElement(e)
                    }, e.prototype._destroyElement = function(e) {
                        t(e).detach().trigger(f.CLOSED).remove()
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var n = t(this),
                                o = n.data(s);
                            o || (o = new e(this), n.data(s, o)), "close" === i && o[i](this)
                        })
                    }, e._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return n
                        }
                    }]), e
                }();
            return t(document).on(f.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _)), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
                return t.fn[e] = h, _._jQueryInterface
            }, _
        }(jQuery), function(t) {
            var e = "button",
                n = "4.0.0-alpha.6",
                r = "bs.button",
                s = "." + r,
                a = ".data-api",
                l = t.fn[e],
                h = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                c = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                u = {
                    CLICK_DATA_API: "click" + s + a,
                    FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)
                },
                f = function() {
                    function e(t) {
                        i(this, e), this._element = t
                    }
                    return e.prototype.toggle = function() {
                        var e = !0,
                            i = t(this._element).closest(c.DATA_TOGGLE)[0];
                        if (i) {
                            var n = t(this._element).find(c.INPUT)[0];
                            if (n) {
                                if ("radio" === n.type)
                                    if (n.checked && t(this._element).hasClass(h.ACTIVE)) e = !1;
                                    else {
                                        var o = t(i).find(c.ACTIVE)[0];
                                        o && t(o).removeClass(h.ACTIVE)
                                    }
                                e && (n.checked = !t(this._element).hasClass(h.ACTIVE), t(n).trigger("change")), n.focus()
                            }
                        }
                        this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, r), this._element = null
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var n = t(this).data(r);
                            n || (n = new e(this), t(this).data(r, n)), "toggle" === i && n[i]()
                        })
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return n
                        }
                    }]), e
                }();
            return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                e.preventDefault();
                var i = e.target;
                t(i).hasClass(h.BUTTON) || (i = t(i).closest(c.BUTTON)), f._jQueryInterface.call(t(i), "toggle")
            }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                var i = t(e.target).closest(c.BUTTON)[0];
                t(i).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type))
            }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() {
                return t.fn[e] = l, f._jQueryInterface
            }, f
        }(jQuery), function(t) {
            var e = "carousel",
                s = "4.0.0-alpha.6",
                a = "bs.carousel",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 600,
                f = 37,
                d = 39,
                _ = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                g = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                p = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                m = {
                    SLIDE: "slide" + l,
                    SLID: "slid" + l,
                    KEYDOWN: "keydown" + l,
                    MOUSEENTER: "mouseenter" + l,
                    MOUSELEAVE: "mouseleave" + l,
                    LOAD_DATA_API: "load" + l + h,
                    CLICK_DATA_API: "click" + l + h
                },
                E = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                },
                v = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                T = function() {
                    function h(e, n) {
                        i(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners()
                    }
                    return h.prototype.next = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(p.NEXT)
                    }, h.prototype.nextWhenVisible = function() {
                        document.hidden || this.next()
                    }, h.prototype.prev = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(p.PREVIOUS)
                    }, h.prototype.pause = function(e) {
                        e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, h.prototype.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, h.prototype.to = function(e) {
                        var i = this;
                        this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0)) {
                            if (this._isSliding) return void t(this._element).one(m.SLID, function() {
                                return i.to(e)
                            });
                            if (n === e) return this.pause(), void this.cycle();
                            var o = e > n ? p.NEXT : p.PREVIOUS;
                            this._slide(o, this._items[e])
                        }
                    }, h.prototype.dispose = function() {
                        t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, h.prototype._getConfig = function(i) {
                        return i = t.extend({}, _, i), r.typeCheckConfig(e, i, g), i
                    }, h.prototype._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(m.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(m.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        })
                    }, h.prototype._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case f:
                                t.preventDefault(), this.prev();
                                break;
                            case d:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, h.prototype._getItemIndex = function(e) {
                        return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e)
                    }, h.prototype._getItemByDirection = function(t, e) {
                        var i = t === p.NEXT,
                            n = t === p.PREVIOUS,
                            o = this._getItemIndex(e),
                            r = this._items.length - 1,
                            s = n && 0 === o || i && o === r;
                        if (s && !this._config.wrap) return e;
                        var a = t === p.PREVIOUS ? -1 : 1,
                            l = (o + a) % this._items.length;
                        return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                    }, h.prototype._triggerSlideEvent = function(e, i) {
                        var n = t.Event(m.SLIDE, {
                            relatedTarget: e,
                            direction: i
                        });
                        return t(this._element).trigger(n), n
                    }, h.prototype._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && t(i).addClass(E.ACTIVE)
                        }
                    }, h.prototype._slide = function(e, i) {
                        var n = this,
                            o = t(this._element).find(v.ACTIVE_ITEM)[0],
                            s = i || o && this._getItemByDirection(e, o),
                            a = Boolean(this._interval),
                            l = void 0,
                            h = void 0,
                            c = void 0;
                        if (e === p.NEXT ? (l = E.LEFT, h = E.NEXT, c = p.LEFT) : (l = E.RIGHT, h = E.PREV, c = p.RIGHT), s && t(s).hasClass(E.ACTIVE)) return void(this._isSliding = !1);
                        var f = this._triggerSlideEvent(s, c);
                        if (!f.isDefaultPrevented() && o && s) {
                            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                            var d = t.Event(m.SLID, {
                                relatedTarget: s,
                                direction: c
                            });
                            r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function() {
                                t(s).removeClass(l + " " + h).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE + " " + h + " " + l), n._isSliding = !1, setTimeout(function() {
                                    return t(n._element).trigger(d)
                                }, 0)
                            }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(d)), a && this.cycle()
                        }
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(a),
                                o = t.extend({}, _, t(this).data());
                            "object" === ("undefined" == typeof e ? "undefined" : n(e)) && t.extend(o, e);
                            var r = "string" == typeof e ? e : o.slide;
                            if (i || (i = new h(this, o), t(this).data(a, i)), "number" == typeof e) i.to(e);
                            else if ("string" == typeof r) {
                                if (void 0 === i[r]) throw new Error('No method named "' + r + '"');
                                i[r]()
                            } else o.interval && (i.pause(), i.cycle())
                        })
                    }, h._dataApiClickHandler = function(e) {
                        var i = r.getSelectorFromElement(this);
                        if (i) {
                            var n = t(i)[0];
                            if (n && t(n).hasClass(E.CAROUSEL)) {
                                var o = t.extend({}, t(n).data(), t(this).data()),
                                    s = this.getAttribute("data-slide-to");
                                s && (o.interval = !1), h._jQueryInterface.call(t(n), o), s && t(n).data(a).to(s), e.preventDefault()
                            }
                        }
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return _
                        }
                    }]), h
                }();
            return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function() {
                t(v.DATA_RIDE).each(function() {
                    var e = t(this);
                    T._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function() {
                return t.fn[e] = c, T._jQueryInterface
            }, T
        }(jQuery), function(t) {
            var e = "collapse",
                s = "4.0.0-alpha.6",
                a = "bs.collapse",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 600,
                f = {
                    toggle: !0,
                    parent: ""
                },
                d = {
                    toggle: "boolean",
                    parent: "string"
                },
                _ = {
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    CLICK_DATA_API: "click" + l + h
                },
                g = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                p = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                m = {
                    ACTIVES: ".card > .show, .card > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                E = function() {
                    function l(e, n) {
                        i(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return l.prototype.toggle = function() {
                        t(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
                    }, l.prototype.show = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (!t(this._element).hasClass(g.SHOW)) {
                            var i = void 0,
                                n = void 0;
                            if (this._parent && (i = t.makeArray(t(this._parent).find(m.ACTIVES)), i.length || (i = null)), !(i && (n = t(i).data(a), n && n._isTransitioning))) {
                                var o = t.Event(_.SHOW);
                                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                    i && (l._jQueryInterface.call(t(i), "hide"), n || t(i).data(a, null));
                                    var s = this._getDimension();
                                    t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var h = function() {
                                        t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[s] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN)
                                    };
                                    if (!r.supportsTransitionEnd()) return void h();
                                    var c = s[0].toUpperCase() + s.slice(1),
                                        f = "scroll" + c;
                                    t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(u), this._element.style[s] = this._element[f] + "px"
                                }
                            }
                        }
                    }, l.prototype.hide = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (t(this._element).hasClass(g.SHOW)) {
                            var i = t.Event(_.HIDE);
                            if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                                var n = this._getDimension(),
                                    o = n === p.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[n] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var s = function() {
                                    e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)
                                };
                                return this._element.style[n] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s()
                            }
                        }
                    }, l.prototype.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, l.prototype.dispose = function() {
                        t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, l.prototype._getConfig = function(i) {
                        return i = t.extend({}, f, i), i.toggle = Boolean(i.toggle), r.typeCheckConfig(e, i, d), i
                    }, l.prototype._getDimension = function() {
                        var e = t(this._element).hasClass(p.WIDTH);
                        return e ? p.WIDTH : p.HEIGHT
                    }, l.prototype._getParent = function() {
                        var e = this,
                            i = t(this._config.parent)[0],
                            n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(i).find(n).each(function(t, i) {
                            e._addAriaAndCollapsedClass(l._getTargetFromElement(i), [i])
                        }), i
                    }, l.prototype._addAriaAndCollapsedClass = function(e, i) {
                        if (e) {
                            var n = t(e).hasClass(g.SHOW);
                            e.setAttribute("aria-expanded", n), i.length && t(i).toggleClass(g.COLLAPSED, !n).attr("aria-expanded", n)
                        }
                    }, l._getTargetFromElement = function(e) {
                        var i = r.getSelectorFromElement(e);
                        return i ? t(i)[0] : null
                    }, l._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this),
                                o = i.data(a),
                                r = t.extend({}, f, i.data(), "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e);
                            if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), i.data(a, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e]()
                            }
                        })
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }]), l
                }();
            return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
                e.preventDefault();
                var i = E._getTargetFromElement(this),
                    n = t(i).data(a),
                    o = n ? "toggle" : t(this).data();
                E._jQueryInterface.call(t(i), o)
            }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function() {
                return t.fn[e] = c, E._jQueryInterface
            }, E
        }(jQuery), function(t) {
            var e = "dropdown",
                n = "4.0.0-alpha.6",
                s = "bs.dropdown",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 27,
                u = 38,
                f = 40,
                d = 3,
                _ = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK: "click" + a,
                    CLICK_DATA_API: "click" + a + l,
                    FOCUSIN_DATA_API: "focusin" + a + l,
                    KEYDOWN_DATA_API: "keydown" + a + l
                },
                g = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    SHOW: "show"
                },
                p = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                m = function() {
                    function e(t) {
                        i(this, e), this._element = t, this._addEventListeners()
                    }
                    return e.prototype.toggle = function() {
                        if (this.disabled || t(this).hasClass(g.DISABLED)) return !1;
                        var i = e._getParentFromElement(this),
                            n = t(i).hasClass(g.SHOW);
                        if (e._clearMenus(), n) return !1;
                        if ("ontouchstart" in document.documentElement && !t(i).closest(p.NAVBAR_NAV).length) {
                            var o = document.createElement("div");
                            o.className = g.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                        }
                        var r = {
                                relatedTarget: this
                            },
                            s = t.Event(_.SHOW, r);
                        return t(i).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(i).toggleClass(g.SHOW), t(i).trigger(t.Event(_.SHOWN, r)), !1)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, s), t(this._element).off(a), this._element = null
                    }, e.prototype._addEventListeners = function() {
                        t(this._element).on(_.CLICK, this.toggle)
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var n = t(this).data(s);
                            if (n || (n = new e(this), t(this).data(s, n)), "string" == typeof i) {
                                if (void 0 === n[i]) throw new Error('No method named "' + i + '"');
                                n[i].call(this)
                            }
                        })
                    }, e._clearMenus = function(i) {
                        if (!i || i.which !== d) {
                            var n = t(p.BACKDROP)[0];
                            n && n.parentNode.removeChild(n);
                            for (var o = t.makeArray(t(p.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                                var s = e._getParentFromElement(o[r]),
                                    a = {
                                        relatedTarget: o[r]
                                    };
                                if (t(s).hasClass(g.SHOW) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "focusin" === i.type) && t.contains(s, i.target))) {
                                    var l = t.Event(_.HIDE, a);
                                    t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN, a)))
                                }
                            }
                        }
                    }, e._getParentFromElement = function(e) {
                        var i = void 0,
                            n = r.getSelectorFromElement(e);
                        return n && (i = t(n)[0]), i || e.parentNode
                    }, e._dataApiKeydownHandler = function(i) {
                        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !t(this).hasClass(g.DISABLED))) {
                            var n = e._getParentFromElement(this),
                                o = t(n).hasClass(g.SHOW);
                            if (!o && i.which !== c || o && i.which === c) {
                                if (i.which === c) {
                                    var r = t(n).find(p.DATA_TOGGLE)[0];
                                    t(r).trigger("focus")
                                }
                                return void t(this).trigger("click")
                            }
                            var s = t(n).find(p.VISIBLE_ITEMS).get();
                            if (s.length) {
                                var a = s.indexOf(i.target);
                                i.which === u && a > 0 && a--, i.which === f && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                            }
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return n
                        }
                    }]), e
                }();
            return t(document).on(_.KEYDOWN_DATA_API, p.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.FOCUSIN_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, p.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, p.FORM_CHILD, function(t) {
                t.stopPropagation()
            }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                return t.fn[e] = h, m._jQueryInterface
            }, m
        }(jQuery), function(t) {
            var e = "modal",
                s = "4.0.0-alpha.6",
                a = "bs.modal",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 300,
                f = 150,
                d = 27,
                _ = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                g = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                p = {
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    FOCUSIN: "focusin" + l,
                    RESIZE: "resize" + l,
                    CLICK_DISMISS: "click.dismiss" + l,
                    KEYDOWN_DISMISS: "keydown.dismiss" + l,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + l,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
                    CLICK_DATA_API: "click" + l + h
                },
                m = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                },
                E = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                },
                v = function() {
                    function h(e, n) {
                        i(this, h), this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return h.prototype.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, h.prototype.show = function(e) {
                        var i = this;
                        if (this._isTransitioning) throw new Error("Modal is transitioning");
                        r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) && (this._isTransitioning = !0);
                        var n = t.Event(p.SHOW, {
                            relatedTarget: e
                        });
                        t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function(t) {
                            return i.hide(t)
                        }), t(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                            t(i._element).one(p.MOUSEUP_DISMISS, function(e) {
                                t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return i._showElement(e)
                        }))
                    }, h.prototype.hide = function(e) {
                        var i = this;
                        if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                        var n = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                        n && (this._isTransitioning = !0);
                        var o = t.Event(p.HIDE);
                        t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(p.FOCUSIN), t(this._element).removeClass(m.SHOW), t(this._element).off(p.CLICK_DISMISS), t(this._dialog).off(p.MOUSEDOWN_DISMISS), n ? t(this._element).one(r.TRANSITION_END, function(t) {
                            return i._hideModal(t)
                        }).emulateTransitionEnd(u) : this._hideModal())
                    }, h.prototype.dispose = function() {
                        t.removeData(this._element, a), t(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, h.prototype._getConfig = function(i) {
                        return i = t.extend({}, _, i), r.typeCheckConfig(e, i, g), i
                    }, h.prototype._showElement = function(e) {
                        var i = this,
                            n = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && r.reflow(this._element), t(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();
                        var o = t.Event(p.SHOWN, {
                                relatedTarget: e
                            }),
                            s = function() {
                                i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(o)
                            };
                        n ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s()
                    }, h.prototype._enforceFocus = function() {
                        var e = this;
                        t(document).off(p.FOCUSIN).on(p.FOCUSIN, function(i) {
                            document === i.target || e._element === i.target || t(e._element).has(i.target).length || e._element.focus()
                        })
                    }, h.prototype._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(p.KEYDOWN_DISMISS, function(t) {
                            t.which === d && e.hide()
                        }) : this._isShown || t(this._element).off(p.KEYDOWN_DISMISS)
                    }, h.prototype._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(p.RESIZE, function(t) {
                            return e._handleUpdate(t)
                        }) : t(window).off(p.RESIZE)
                    }, h.prototype._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() {
                            t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(p.HIDDEN)
                        })
                    }, h.prototype._removeBackdrop = function() {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, h.prototype._showBackdrop = function(e) {
                        var i = this,
                            n = t(this._element).hasClass(m.FADE) ? m.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var o = r.supportsTransitionEnd() && n;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, n && t(this._backdrop).addClass(n), t(this._backdrop).appendTo(document.body), t(this._element).on(p.CLICK_DISMISS, function(t) {
                                    return i._ignoreBackdropClick ? void(i._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
                                }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.SHOW), !e) return;
                            if (!o) return void e();
                            t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(f)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(m.SHOW);
                            var s = function() {
                                i._removeBackdrop(), e && e()
                            };
                            r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(f) : s()
                        } else e && e()
                    }, h.prototype._handleUpdate = function() {
                        this._adjustDialog()
                    }, h.prototype._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, h.prototype._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, h.prototype._checkScrollbar = function() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, h.prototype._setScrollbar = function() {
                        var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                    }, h.prototype._resetScrollbar = function() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, h.prototype._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, h._jQueryInterface = function(e, i) {
                        return this.each(function() {
                            var o = t(this).data(a),
                                r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e);
                            if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e](i)
                            } else r.show && o.show(i)
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return _
                        }
                    }]), h
                }();
            return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function(e) {
                var i = this,
                    n = void 0,
                    o = r.getSelectorFromElement(this);
                o && (n = t(o)[0]);
                var s = t(n).data(a) ? "toggle" : t.extend({}, t(n).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(n).one(p.SHOW, function(e) {
                    e.isDefaultPrevented() || l.one(p.HIDDEN, function() {
                        t(i).is(":visible") && i.focus()
                    })
                });
                v._jQueryInterface.call(t(n), s, this)
            }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
                return t.fn[e] = c, v._jQueryInterface
            }, v
        }(jQuery), function(t) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var e = "tooltip",
                s = "4.0.0-alpha.6",
                a = "bs.tooltip",
                l = "." + a,
                h = t.fn[e],
                c = 150,
                u = "bs-tether",
                f = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: [],
                    container: !1
                },
                d = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array",
                    container: "(string|element|boolean)"
                },
                _ = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                g = {
                    SHOW: "show",
                    OUT: "out"
                },
                p = {
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    INSERTED: "inserted" + l,
                    CLICK: "click" + l,
                    FOCUSIN: "focusin" + l,
                    FOCUSOUT: "focusout" + l,
                    MOUSEENTER: "mouseenter" + l,
                    MOUSELEAVE: "mouseleave" + l
                },
                m = {
                    FADE: "fade",
                    SHOW: "show"
                },
                E = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                v = {
                    element: !1,
                    enabled: !1
                },
                T = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                y = function() {
                    function h(t, e) {
                        i(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    return h.prototype.enable = function() {
                        this._isEnabled = !0
                    }, h.prototype.disable = function() {
                        this._isEnabled = !1
                    }, h.prototype.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, h.prototype.toggle = function(e) {
                        if (e) {
                            var i = this.constructor.DATA_KEY,
                                n = t(e.currentTarget).data(i);
                            n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (t(this.getTipElement()).hasClass(m.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, h.prototype.dispose = function() {
                        clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, h.prototype.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            t(this.element).trigger(i);
                            var n = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !n) return;
                            var o = this.getTipElement(),
                                s = r.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);
                            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                l = this._getAttachment(a),
                                c = this.config.container === !1 ? document.body : t(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: l,
                                element: o,
                                target: this.element,
                                classes: v,
                                classPrefix: u,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), r.reflow(o), this._tether.position(), t(o).addClass(m.SHOW);
                            var f = function() {
                                var i = e._hoverState;
                                e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), i === g.OUT && e._leave(null, e);
                            };
                            if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, f).emulateTransitionEnd(h._TRANSITION_DURATION);
                            f()
                        }
                    }, h.prototype.hide = function(e) {
                        var i = this,
                            n = this.getTipElement(),
                            o = t.Event(this.constructor.Event.HIDE);
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        var s = function() {
                            i._hoverState !== g.SHOW && n.parentNode && n.parentNode.removeChild(n), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), i._isTransitioning = !1, i.cleanupTether(), e && e()
                        };
                        t(this.element).trigger(o), o.isDefaultPrevented() || (t(n).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = !1, this._activeTrigger[T.FOCUS] = !1, this._activeTrigger[T.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? (this._isTransitioning = !0, t(n).one(r.TRANSITION_END, s).emulateTransitionEnd(c)) : s(), this._hoverState = "")
                    }, h.prototype.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, h.prototype.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0]
                    }, h.prototype.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether()
                    }, h.prototype.setElementContent = function(e, i) {
                        var o = this.config.html;
                        "object" === ("undefined" == typeof i ? "undefined" : n(i)) && (i.nodeType || i.jquery) ? o ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()): e[o ? "html" : "text"](i)
                    }, h.prototype.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, h.prototype.cleanupTether = function() {
                        this._tether && this._tether.destroy()
                    }, h.prototype._getAttachment = function(t) {
                        return _[t.toUpperCase()]
                    }, h.prototype._setListeners = function() {
                        var e = this,
                            i = this.config.trigger.split(" ");
                        i.forEach(function(i) {
                            if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                            else if (i !== T.MANUAL) {
                                var n = i === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    o = i === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(n, e.config.selector, function(t) {
                                    return e._enter(t)
                                }).on(o, e.config.selector, function(t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = t.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, h.prototype._fixTitle = function() {
                        var t = n(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, h.prototype._enter = function(e, i) {
                        var n = this.constructor.DATA_KEY;
                        return i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(i.getTipElement()).hasClass(m.SHOW) || i._hoverState === g.SHOW ? void(i._hoverState = g.SHOW) : (clearTimeout(i._timeout), i._hoverState = g.SHOW, i.config.delay && i.config.delay.show ? void(i._timeout = setTimeout(function() {
                            i._hoverState === g.SHOW && i.show()
                        }, i.config.delay.show)) : void i.show())
                    }, h.prototype._leave = function(e, i) {
                        var n = this.constructor.DATA_KEY;
                        if (i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), !i._isWithActiveTrigger()) return clearTimeout(i._timeout), i._hoverState = g.OUT, i.config.delay && i.config.delay.hide ? void(i._timeout = setTimeout(function() {
                            i._hoverState === g.OUT && i.hide()
                        }, i.config.delay.hide)) : void i.hide()
                    }, h.prototype._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, h.prototype._getConfig = function(i) {
                        return i = t.extend({}, this.constructor.Default, t(this.element).data(), i), i.delay && "number" == typeof i.delay && (i.delay = {
                            show: i.delay,
                            hide: i.delay
                        }), r.typeCheckConfig(e, i, this.constructor.DefaultType), i
                    }, h.prototype._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(a),
                                o = "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e;
                            if ((i || !/dispose|hide/.test(e)) && (i || (i = new h(this, o), t(this).data(a, i)), "string" == typeof e)) {
                                if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return d
                        }
                    }]), h
                }();
            return t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function() {
                return t.fn[e] = h, y._jQueryInterface
            }, y
        }(jQuery));
    (function(r) {
        var a = "popover",
            l = "4.0.0-alpha.6",
            h = "bs.popover",
            c = "." + h,
            u = r.fn[a],
            f = r.extend({}, s.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            d = r.extend({}, s.DefaultType, {
                content: "(string|element|function)"
            }),
            _ = {
                FADE: "fade",
                SHOW: "show"
            },
            g = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            },
            p = {
                HIDE: "hide" + c,
                HIDDEN: "hidden" + c,
                SHOW: "show" + c,
                SHOWN: "shown" + c,
                INSERTED: "inserted" + c,
                CLICK: "click" + c,
                FOCUSIN: "focusin" + c,
                FOCUSOUT: "focusout" + c,
                MOUSEENTER: "mouseenter" + c,
                MOUSELEAVE: "mouseleave" + c
            },
            m = function(s) {
                function u() {
                    return i(this, u), t(this, s.apply(this, arguments))
                }
                return e(u, s), u.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, u.prototype.getTipElement = function() {
                    return this.tip = this.tip || r(this.config.template)[0]
                }, u.prototype.setContent = function() {
                    var t = r(this.getTipElement());
                    this.setElementContent(t.find(g.TITLE), this.getTitle()), this.setElementContent(t.find(g.CONTENT), this._getContent()), t.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether()
                }, u.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, u._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = r(this).data(h),
                            i = "object" === ("undefined" == typeof t ? "undefined" : n(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, i), r(this).data(h, e)), "string" == typeof t)) {
                            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, o(u, null, [{
                    key: "VERSION",
                    get: function() {
                        return l
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return f
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return h
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return c
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return d
                    }
                }]), u
            }(s);
        return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function() {
            return r.fn[a] = u, m._jQueryInterface
        }, m
    })(jQuery),
    function(t) {
        var e = "scrollspy",
            s = "4.0.0-alpha.6",
            a = "bs.scrollspy",
            l = "." + a,
            h = ".data-api",
            c = t.fn[e],
            u = {
                offset: 10,
                method: "auto",
                target: ""
            },
            f = {
                offset: "number",
                method: "string",
                target: "(string|element)",
                children: "string"
            },
            d = {
                ACTIVATE: "activate" + l,
                SCROLL: "scroll" + l,
                LOAD_DATA_API: "load" + l + h
            },
            _ = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                NAV_LINK: "nav-link",
                NAV: "nav",
                ACTIVE: "active"
            },
            g = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                LIST_ITEM: ".list-item",
                LI: "li",
                LI_DROPDOWN: "li.dropdown",
                NAV_LINKS: ".nav-link",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            p = {
                OFFSET: "offset",
                POSITION: "position"
            },
            m = function() {
                function h(e, n) {
                    var o = this;
                    i(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.children ? this._config.target + " " + this._config.children : this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(d.SCROLL, function(t) {
                        return o._process(t)
                    }), this.refresh(), this._process()
                }
                return h.prototype.refresh = function() {
                    var e = this,
                        i = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
                        n = "auto" === this._config.method ? i : this._config.method,
                        o = n === p.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    var s = t.makeArray(t(this._selector));
                    s.map(function(e) {
                        var i = void 0,
                            s = r.getSelectorFromElement(e);
                        return s && (i = t(s)[0]), i && (i.offsetWidth || i.offsetHeight) ? [t(i)[n]().top + o, s] : null
                    }).filter(function(t) {
                        return t
                    }).sort(function(t, e) {
                        return t[0] - e[0]
                    }).forEach(function(t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, h.prototype.dispose = function() {
                    t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, h.prototype._getConfig = function(i) {
                    if (i = t.extend({}, u, i), "string" != typeof i.target) {
                        var n = t(i.target).attr("id");
                        n || (n = r.getUID(e), t(i.target).attr("id", n)), i.target = "#" + n
                    }
                    return r.typeCheckConfig(e, i, f), i
                }, h.prototype._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, h.prototype._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, h.prototype._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                }, h.prototype._process = function() {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        i = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= i) {
                        var n = this._targets[this._targets.length - 1];
                        return void(this._activeTarget !== n && this._activate(n))
                    }
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
                        r && this._activate(this._targets[o])
                    }
                }, h.prototype._activate = function(e) {
                    this._activeTarget = e, this._clear();
                    var i = this._selector.split(",");
                    i = i.map(function(t) {
                        return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
                    });
                    var n = t(i.join(","));
                    if (n.hasClass(_.DROPDOWN_ITEM)) n.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), n.addClass(_.ACTIVE);
                    else {
                        var o = n.parents(g.LI);
                        o.each(function() {
                            t(this).find("> .nav-link").addClass(_.ACTIVE)
                        })
                    }
                    t(this._scrollElement).trigger(d.ACTIVATE, {
                        relatedTarget: e
                    })
                }, h.prototype._clear = function() {
                    t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)
                }, h._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(a),
                            o = "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e;
                        if (i || (i = new h(this, o), t(this).data(a, i)), "string" == typeof e) {
                            if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }, o(h, null, [{
                    key: "VERSION",
                    get: function() {
                        return s
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return u
                    }
                }]), h
            }();
        return t(window).on(d.LOAD_DATA_API, function() {
            for (var e = t.makeArray(t(g.DATA_SPY)), i = e.length; i--;) {
                var n = t(e[i]);
                m._jQueryInterface.call(n, n.data())
            }
        }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
            return t.fn[e] = c, m._jQueryInterface
        }, m
    }(jQuery),
    function(t) {
        var e = "tab",
            n = "4.0.0-alpha.6",
            s = "bs.tab",
            a = "." + s,
            l = ".data-api",
            h = t.fn[e],
            c = 150,
            u = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                CLICK_DATA_API: "click" + a + l
            },
            f = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                DISABLED: "disabled",
                FADE: "fade",
                SHOW: "show"
            },
            d = {
                A: "a",
                LI: "li",
                DROPDOWN: ".dropdown",
                LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                FADE_CHILD: "> .nav-item .fade, > .fade",
                ACTIVE: ".active",
                ACTIVE_CHILD: "> .nav-item > .active, > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            },
            _ = function() {
                function e(t) {
                    i(this, e), this._element = t
                }
                return e.prototype.show = function() {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(f.ACTIVE) || t(this._element).hasClass(f.DISABLED))) {
                        var i = void 0,
                            n = void 0,
                            o = t(this._element).closest(d.LIST)[0],
                            s = r.getSelectorFromElement(this._element);
                        o && (n = t.makeArray(t(o).find(d.ACTIVE)), n = n[n.length - 1]);
                        var a = t.Event(u.HIDE, {
                                relatedTarget: this._element
                            }),
                            l = t.Event(u.SHOW, {
                                relatedTarget: n
                            });
                        if (n && t(n).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            s && (i = t(s)[0]), this._activate(this._element, o);
                            var h = function() {
                                var i = t.Event(u.HIDDEN, {
                                        relatedTarget: e._element
                                    }),
                                    o = t.Event(u.SHOWN, {
                                        relatedTarget: n
                                    });
                                t(n).trigger(i), t(e._element).trigger(o)
                            };
                            i ? this._activate(i, i.parentNode, h) : h()
                        }
                    }
                }, e.prototype.dispose = function() {
                    t.removeClass(this._element, s), this._element = null
                }, e.prototype._activate = function(e, i, n) {
                    var o = this,
                        s = t(i).find(d.ACTIVE_CHILD)[0],
                        a = n && r.supportsTransitionEnd() && (s && t(s).hasClass(f.FADE) || Boolean(t(i).find(d.FADE_CHILD)[0])),
                        l = function() {
                            return o._transitionComplete(e, s, a, n)
                        };
                    s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(c) : l(), s && t(s).removeClass(f.SHOW)
                }, e.prototype._transitionComplete = function(e, i, n, o) {
                    if (i) {
                        t(i).removeClass(f.ACTIVE);
                        var s = t(i.parentNode).find(d.DROPDOWN_ACTIVE_CHILD)[0];
                        s && t(s).removeClass(f.ACTIVE), i.setAttribute("aria-expanded", !1)
                    }
                    if (t(e).addClass(f.ACTIVE), e.setAttribute("aria-expanded", !0), n ? (r.reflow(e), t(e).addClass(f.SHOW)) : t(e).removeClass(f.FADE), e.parentNode && t(e.parentNode).hasClass(f.DROPDOWN_MENU)) {
                        var a = t(e).closest(d.DROPDOWN)[0];
                        a && t(a).find(d.DROPDOWN_TOGGLE).addClass(f.ACTIVE), e.setAttribute("aria-expanded", !0)
                    }
                    o && o()
                }, e._jQueryInterface = function(i) {
                    return this.each(function() {
                        var n = t(this),
                            o = n.data(s);
                        if (o || (o = new e(this), n.data(s, o)), "string" == typeof i) {
                            if (void 0 === o[i]) throw new Error('No method named "' + i + '"');
                            o[i]()
                        }
                    })
                }, o(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return n
                    }
                }]), e
            }();
        return t(document).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function(e) {
            e.preventDefault(), _._jQueryInterface.call(t(this), "show")
        }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
            return t.fn[e] = h, _._jQueryInterface
        }, _
    }(jQuery) + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var o = t(this),
                    r = o.data("bs.affix"),
                    s = "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e;
                r || o.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]()
            })
        }
        var i = function r(e, i) {
            this.options = t.extend({}, r.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function(t, e, i, n) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                s = this.$target.height();
            if (null != i && "top" == this.affixed) return o < i && "top";
            if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
            var a = null == this.affixed,
                l = a ? o : r.top,
                h = a ? s : e;
            return null != i && o <= i ? "top" : null != n && l + h >= t - n && "bottom"
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    o = this.options.offset,
                    r = o.top,
                    s = o.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != ("undefined" == typeof o ? "undefined" : n(o)) && (s = r = o), "function" == typeof r && (r = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
                var l = this.getState(a, e, r, s);
                if (this.affixed != l) {
                    null != this.unpin && this.$element.css("top", "");
                    var h = "affix" + (l ? "-" + l : ""),
                        c = t.Event(h + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == l && this.$element.offset({
                    top: a - e - s
                })
            }
        };
        var o = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = o, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery),
    function(t) {
        var e = "imageGrid",
            o = "bs.image-grid",
            r = '[data-grid="images"]',
            s = "." + o,
            a = t.fn[e],
            l = {
                padding: 10,
                targetHeight: 300,
                display: "inline-block"
            },
            h = {
                RESIZE: "resize" + s
            },
            c = function() {
                function e(n, o) {
                    i(this, e), this._cleanWhitespace(n), this._row = 0, this._rownum = 1, this._elements = [], this._element = n, this._albumWidth = t(n).width(), this._images = t(n).children(), this._config = t.extend({}, l, o), t(window).on(h.RESIZE, t.proxy(this._handleResize, this)), this._processImages()
                }
                return e.prototype.dispose = function() {
                    t(window).off(s), t.removeData(this._element, o), this._row = null, this._rownum = null, this._elements = null, this._element = null, this._albumWidth = null, this._images = null, this._config = null
                }, e.prototype._handleResize = function() {
                    this._row = 0, this._rownum = 1, this._elements = [], this._albumWidth = t(this._element).width(), this._images = t(this._element).children(), this._processImages()
                }, e.prototype._processImages = function() {
                    var e = this;
                    this._images.each(function(i) {
                        var n = t(this),
                            o = n.is("img") ? n : n.find("img"),
                            r = "undefined" != typeof o.data("width") ? o.data("width") : o.width(),
                            s = "undefined" != typeof o.data("height") ? o.data("height") : o.height();
                        o.data("width", r), o.data("height", s);
                        var a = Math.ceil(r / s * e._config.targetHeight),
                            l = Math.ceil(e._config.targetHeight);
                        e._elements.push([this, a, l]), e._row += a + e._config.padding, e._row > e._albumWidth && e._elements.length && (e._resizeRow(e._row - e._config.padding), e._row = 0, e._elements = [], e._rownum += 1), e._images.length - 1 == i && e._elements.length && (e._resizeRow(e._row), e._row = 0, e._elements = [], e._rownum += 1)
                    })
                }, e.prototype._resizeRow = function(e) {
                    for (var i = this._config.padding * (this._elements.length - 1), n = this._albumWidth - i, o = n / (e - i), r = i, s = (e < this._albumWidth, 0); s < this._elements.length; s++) {
                        var a = t(this._elements[s][0]),
                            l = Math.floor(this._elements[s][1] * o),
                            h = Math.floor(this._elements[s][2] * o),
                            c = s < this._elements.length - 1;
                        r += l, !c && r < this._albumWidth && (l += this._albumWidth - r), l--;
                        var u = a.is("img") ? a : a.find("img");
                        u.width(l), u.height(h), this._applyModifications(a, c)
                    }
                }, e.prototype._applyModifications = function(t, e) {
                    var i = {
                        "margin-bottom": this._config.padding + "px",
                        "margin-right": e ? this._config.padding + "px" : 0,
                        display: this._config.display,
                        "vertical-align": "bottom"
                    };
                    t.css(i)
                }, e.prototype._cleanWhitespace = function(e) {
                    t(e).contents().filter(function() {
                        return 3 == this.nodeType && !/\S/.test(this.nodeValue)
                    }).remove()
                }, e._jQueryInterface = function(i) {
                    return this.each(function() {
                        var i = t(this),
                            r = i.data(o),
                            s = t.extend({}, l, i.data(), "object" === ("undefined" == typeof s ? "undefined" : n(s)) && s);
                        r || i.data(o, r = new e(this, s)), "string" == typeof s && r[s].call(i)
                    })
                }, e
            }();
        return t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function() {
            return t.fn[e] = a, Enter._jQueryInterface
        }, t(function() {
            t(r).imageGrid()
        }), c
    }(jQuery),
    function(t) {
        var e = "zoom",
            n = "bs.zoom",
            s = "v4.0.0-alpha.6",
            a = '[data-action="zoom"]',
            l = "." + n,
            h = (t.fn[e], 80),
            c = {
                CLICK: "click" + l,
                SCROLL: "scroll" + l,
                KEYUP: "keyup" + l,
                TOUCHSTART: "touchstart" + l,
                TOUCHMOVE: "touchmove" + l
            },
            u = {
                ZOOM_OVERLAY_OPEN: "zoom-overlay-open",
                ZOOM_OVERLAY_TRANSITIONING: "zoom-overlay-transitioning",
                ZOOM_OVERLAY: "zoom-overlay",
                ZOOM_IMG_WRAP: "zoom-img-wrap",
                ZOOM_IMG: "zoom-img"
            },
            f = {
                ZOOM: "zoom",
                ZOOM_OUT: "zoom-out"
            },
            d = function() {
                function e(n, o) {
                    i(this, e), this._activeZoom = null, this._initialScrollPosition = null, this._initialTouchPosition = null, this._touchMoveListener = null, this._$document = t(document), this._$window = t(window), this._$body = t(document.body), this._boundClick = t.proxy(this._clickHandler, this)
                }
                return e.prototype._zoom = function(e) {
                    var i = e.target;
                    if (i && "IMG" === i.tagName && !this._$body.hasClass(u.ZOOM_OVERLAY_OPEN)) return e.metaKey || e.ctrlKey ? window.open(e.target.getAttribute("data-original") || e.target.src, "_blank") : void(i.width >= t(window).width() - h || (this._activeZoomClose(!0), this._activeZoom = new _(i), this._activeZoom.zoomImage(), this._$window.on(c.SCROLL, t.proxy(this._scrollHandler, this)), this._$document.on(c.KEYUP, t.proxy(this._keyHandler, this)), this._$document.on(c.TOUCHSTART, t.proxy(this._touchStart, this)), document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0), "bubbles" in e ? e.bubbles && e.stopPropagation() : e.cancelBubble = !0))
                }, e.prototype._activeZoomClose = function(t) {
                    this._activeZoom && (t ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(l), this._$document.off(l), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null)
                }, e.prototype._scrollHandler = function(e) {
                    null === this._initialScrollPosition && (this._initialScrollPosition = t(window).scrollTop());
                    var i = this._initialScrollPosition - t(window).scrollTop();
                    Math.abs(i) >= 40 && this._activeZoomClose()
                }, e.prototype._keyHandler = function(t) {
                    27 === t.keyCode && this._activeZoomClose()
                }, e.prototype._clickHandler = function(t) {
                    t.preventDefault ? t.preventDefault() : event.returnValue = !1, "bubbles" in t ? t.bubbles && t.stopPropagation() : t.cancelBubble = !0, this._activeZoomClose()
                }, e.prototype._touchStart = function(e) {
                    this._initialTouchPosition = e.touches[0].pageY, t(e.target).on(c.TOUCHMOVE, t.proxy(this._touchMove, this))
                }, e.prototype._touchMove = function(e) {
                    Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10 && (this._activeZoomClose(), t(e.target).off(c.TOUCHMOVE))
                }, e.prototype.listen = function() {
                    this._$body.on(c.CLICK, a, t.proxy(this._zoom, this))
                }, o(e, null, [{
                    key: "VERSION",
                    get: function() {
                        return s
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Default
                    }
                }]), e
            }(),
            _ = function() {
                function e(n) {
                    i(this, e), this._fullHeight = null, this._fullWidth = null, this._overlay = null, this._targetImageWrap = null, this._targetImage = n, this._$body = t(document.body)
                }
                return e.prototype.zoomImage = function() {
                    var e = document.createElement("img");
                    e.onload = t.proxy(function() {
                        this._fullHeight = Number(e.height), this._fullWidth = Number(e.width), this._zoomOriginal()
                    }, this), e.src = this._targetImage.src
                }, e.prototype._zoomOriginal = function() {
                    this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = u.ZOOM_IMG_WRAP, this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), t(this._targetImage).addClass(u.ZOOM_IMG).attr("data-action", f.ZOOM_OUT), this._overlay = document.createElement("div"), this._overlay.className = u.ZOOM_OVERLAY, document.body.appendChild(this._overlay), this._calculateZoom(), this._triggerAnimation()
                }, e.prototype._calculateZoom = function() {
                    this._targetImage.offsetWidth;
                    var e = this._fullWidth,
                        i = this._fullHeight,
                        n = (t(window).scrollTop(), e / this._targetImage.width),
                        o = t(window).height() - h,
                        r = t(window).width() - h,
                        s = e / i,
                        a = r / o;
                    e < r && i < o ? this._imgScaleFactor = n : s < a ? this._imgScaleFactor = o / i * n : this._imgScaleFactor = r / e * n
                }, e.prototype._triggerAnimation = function() {
                    this._targetImage.offsetWidth;
                    var e = t(this._targetImage).offset(),
                        i = t(window).scrollTop(),
                        n = i + t(window).height() / 2,
                        o = t(window).width() / 2,
                        s = e.top + this._targetImage.height / 2,
                        a = e.left + this._targetImage.width / 2;
                    this._translateY = n - s, this._translateX = o - a;
                    var l = "scale(" + this._imgScaleFactor + ")",
                        h = "translate(" + this._translateX + "px, " + this._translateY + "px)";
                    r.supportsTransitionEnd() || (h += " translateZ(0)"), t(this._targetImage).css({
                        "-webkit-transform": l,
                        "-ms-transform": l,
                        transform: l
                    }), t(this._targetImageWrap).css({
                        "-webkit-transform": h,
                        "-ms-transform": h,
                        transform: h
                    }), this._$body.addClass(u.ZOOM_OVERLAY_OPEN)
                }, e.prototype.close = function() {
                    return this._$body.removeClass(u.ZOOM_OVERLAY_OPEN).addClass(u.ZOOM_OVERLAY_TRANSITIONING), t(this._targetImage).css({
                        "-webkit-transform": "",
                        "-ms-transform": "",
                        transform: ""
                    }), t(this._targetImageWrap).css({
                        "-webkit-transform": "",
                        "-ms-transform": "",
                        transform: ""
                    }), r.supportsTransitionEnd() ? void t(this._targetImage).one(r.TRANSITION_END, t.proxy(this.dispose, this)).emulateTransitionEnd(300) : this.dispose()
                }, e.prototype.dispose = function() {
                    this._targetImageWrap && this._targetImageWrap.parentNode && (t(this._targetImage).removeClass(u.ZOOM_IMG).attr("data-action", f.ZOOM), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._overlay.parentNode.removeChild(this._overlay), this._$body.removeClass(u.ZOOM_OVERLAY_TRANSITIONING))
                }, e
            }();
        t(function() {
            (new d).listen()
        })
    }(jQuery)
}();