function initSlickSlider() {
    jQuery(".beans-slider3").each(function() {
        var a = jQuery(this),
            b = a.find(".btn-prev"),
            c = a.find(".btn-next"),
            d = a.find(".beans-slideset"),
            e = a.find(".beans-pagination");
        d.slick({
            arrows: b.length > 0 && c.length > 0,
            dots: e.length > 0,
            pauseOnHover: !1,
            autoplay: !0,
            speed: 800
        }), e.remove(), b.remove(), c.remove()
    })
}

function initNavRemoveClass() {
    jQuery("#nav .smoothanchor").click(function() {
        jQuery("body").hasClass("mainnav-active") && setTimeout(function() {
            jQuery("body").removeClass("mainnav-active")
        }, 1e3)
    })
}

function initStickyHeader() {
    var a = jQuery(window),
        b = "fixed-position";
    jQuery(".header_fixed #header").each(function() {
        function f() {
            a.scrollTop() > d ? e && (e = !1, c.addClass(b)) : e || (e = !0, c.removeClass(b)), ResponsiveHelper.addRange({
                "..767": {
                    on: function() {
                        c.removeClass(b)
                    }
                }
            })
        }
        var c = jQuery(this),
            d = c.offset().top || 0,
            e = !0;
        f(), a.on("scroll resize orientationchange", f)
    })
}

function initInstagramPics(a, b) {
    var c = jQuery(".instagram-photos");
    jQuery.fn.spectragram.accessData = {
        accessToken: a,
        clientID: b
    }, c.each(function() {
        var a = jQuery(this);
        a.attr("data-user"), a.attr("data-count") ? Number(a.attr("data-count")) : 8;
        a.spectragram("getPopular")
    })
}

function initJqureyAnimation() {
    var a = jQuery("[data-animate]");
    jQuery("body");
    a.each(function() {
        var a = jQuery(this),
            b = a.attr("data-delay") ? Number(a.attr("data-delay")) + 500 : 500,
            c = a.attr("data-animate");
        a.hasClass("animated") || (a.addClass("not-animated"), a.appear(function() {
            setTimeout(function() {
                a.removeClass("not-animated").addClass(c + " animated")
            }, b)
        }, {
            accX: 0,
            accY: -120
        }, "easeInCubic"))
    })
}

function initFlickrPhotos() {
    var a = jQuery(".flickr-feed");
    a.each(function() {
        var a = jQuery(this),
            b = a.attr("data-type");
        a.jflickrfeed({
            feedapi: "group" === b ? "groups_pool.gne" : b,
            limit: Number(a.attr("data-count")) || 8,
            qstrings: {
                id: a.attr("data-id")
            },
            itemTemplate: '<a href="{{image_b}}" title="{{title}}" rel="lightbox"><img src="{{image_s}}" alt="{{title}}" /></a>'
        })
    })
}

function initPieCharts() {
    "undefined" != typeof jQuery.fn.easyPieChart && jQuery(".pie-chart:in-viewport").each(function() {
        var a = jQuery(this),
            b = a.attr("data-barSize");
        a.css({
            height: b,
            width: b,
            "line-height": b + "px"
        }), a.easyPieChart({
            animate: 2e3,
            lineCap: "square",
            lineWidth: a.attr("data-lineWidth"),
            size: b,
            barColor: a.attr("data-barColor"),
            trackColor: a.attr("data-trackColor"),
            scaleColor: "transparent",
            onStep: function(a, b, c) {
                jQuery(this.el).find(".pie-chart-percent span").text(Math.round(a))
            }
        })
    })
}

function initAnimatedProgressbars() {
    jQuery(".progress-bar .progress-bar-outer:in-viewport").each(function() {
        var a = jQuery(this),
            b = a.attr("data-width"),
            c = 2500,
            d = !1;
        d || (a.animate({
            width: b + "%"
        }, c), d = !0)
    })
}

function initNumCounter() {
    var a = jQuery(".counter");
    jQuery("body");
    a.each(function() {
        var a = jQuery(this),
            b = a.find("span").attr("data-comma");
        a.appear(function() {
            b ? a.find("span").countTo({
                formatter: function(a, b) {
                    return a = a.toFixed(b.decimals), a = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
            }) : a.find("span").countTo()
        })
    })
}

function initGoToTop() {
    var a = jQuery("#gotoTop"),
        b = 600;
    a.click(function(a) {
        a.preventDefault(), jQuery("body,html").stop(!0).animate({
            scrollTop: 0
        }, b)
    })
}

function initGoToTopScroll() {
    var a = jQuery("#gotoTop"),
        b = jQuery(window);
    b.scrollTop() > 0 ? a.fadeIn() : a.fadeOut()
}

function initPreLoader() {
    jQuery("#pre-loader").delay(1200).fadeOut()
}

function initVimeoPlayer() {
    var a = jQuery(".vimeo-area");
    a.each(function(a, b) {
        var c = jQuery(b),
            d = c.find(".vimeo"),
            e = jQuery("#player1")[0],
            f = $f(e),
            g = c.find(".btn-play"),
            h = "playing";
        window.setTimeout(function() {
            d.css({
                visibility: "visible"
            })
        }, 2e3), f.addEvent("ready", function() {
            f.api("setVolume", 0), g.on("click", function(a) {
                a.preventDefault(), g.hasClass(h) ? (f.api("pause"), g.removeClass(h)) : (f.api("play"), g.addClass(h))
            })
        })
    })
}

function initVideoPlayer() {
    jQuery(".video-area").each(function() {
        var a = jQuery(this),
            b = a.find("video").mediaelementplayer().get(0),
            c = a.find(".btn-play"),
            d = "playing";
        a.hasClass("mute") && b.setVolume(0), c.on("click", function(a) {
            a.preventDefault(), c.hasClass(d) ? (b.pause(), c.removeClass(d)) : (b.play(), c.addClass(d))
        })
    })
}

function initGoogleMap() {
    jQuery(".mf_map_api").length && jQuery(".mf_map_api").each(function() {
        var a = jQuery(this).find(".map-info").attr("data-image"),
            b = jQuery(this).find(".map-info");
        jQuery(this).find(".map").googleMapAPI({
            marker: a,
            mapInfoContent: b,
            streetViewControl: !0,
            mapTypeControl: !0,
            scrollwheel: !0,
            panControl: !0,
            zoomControl: !0
        })
    })
}

function initIsotopControl() {
    var a = jQuery("#work"),
        b = jQuery(window);
    a.isotope({
        transitionDuration: "0.75s"
    }), setTimeout(function() {
        a.isotope("layout")
    }, 100), jQuery("#work-filter a").click(function(b) {
        b.preventDefault(), jQuery("#work-filter li").removeClass("active"), jQuery(this).parent("li").addClass("active");
        var c = jQuery(this).attr("data-filter");
        a.isotope({
            filter: c
        })
    }), jQuery("#work-shuffle").click(function() {
        a.isotope("updateSortData").isotope({
            sortBy: "random"
        })
    }), b.resize(function() {
        a.isotope("layout")
    })
}

function initStyleChanger() {
    var a = jQuery("#style-changer");
    if (a) {
        jQuery("body").mobileNav({
            hideOnClickOutside: !1,
            menuActiveClass: "changer-active",
            menuOpener: ".changer-opener"
        }), jQuery("body").mobileNav({
            hideOnClickOutside: !1,
            menuActiveClass: "boxed-v",
            menuOpener: ".boxed-link, .btn2",
            onInit: function() {
                initIsotopControl(), initBackgroundResize()
            },
            onHide: function() {
                initIsotopControl(), initBackgroundResize()
            }
        });
        var d;
        jQuery(".list-color li").each(function() {
            var a = jQuery(this),
                b = a.find("a").eq(0);
            b.on("click", function(b) {
                b.preventDefault(), d = a.attr("class");
                var c = "mf_style_changer",
                    e = "&action=" + c + "&mf_style=" + d,
                    f = jQuery("link#mf-skin-css");
                jQuery.ajax({
                    url: mf_ajax_load_more.ajaxurl,
                    type: "post",
                    data: e,
                    success: function(a) {
                        f.attr("href", a)
                    }
                })
            })
        }), jQuery(".list-bg-color li").each(function() {
            var a = jQuery("body"),
                b = jQuery(this),
                c = b.find("a").eq(0);
            c.on("click", function(b) {
                b.preventDefault(), a.removeClass("dark"), c.hasClass("dark") && (a.hasClass("dark") || a.addClass("dark"))
            })
        })
    }
}

function initAnchors() {
    new SmoothScroll({
        anchorLinks: '#nav li.smoothanchor a[href^="#"]',
        extraOffset: 66,
        activeClasses: "parent"
    }), new SmoothScroll({
        anchorLinks: 'a[href^="#"].smoothanchor',
        extraOffset: 66,
        activeClasses: "parent"
    })
}

function initTabs() {
    jQuery("ul.beans-tabset").contentTabs({
        addToParent: !0,
        tabLinks: "a"
    }), jQuery("ul.tabset").contentTabs({
        addToParent: !0,
        tabLinks: "a"
    }), jQuery("ul.tabset-onepage").contentTabs({
        addToParent: !0,
        tabLinks: "a"
    })
}

function initIsotope() {
    jQuery("#masonry-container").isotope({
        itemSelector: ".item",
        transitionDuration: "0.6s",
        masonry: {
            columnWidth: 2,
            gutter: 0,
            isResizable: !1
        }
    })
}

function initYoutubePlayer() {
    jQuery(".youtube_bg_video").each(function() {
        var a = jQuery(this),
            b = a.closest(".video-section").find(".play-icon"),
            c = !1;
        a.YTPlayer(), b.on("click", function(d) {
            d.preventDefault(), c ? (a.pauseYTP(), b.removeClass("video-playing").addClass("video-pause"), c = !1) : (a.playYTP(), b.removeClass("video-pause").addClass("video-playing"), c = !0)
        })
    })
}

function initSameHeight() {
    setSameHeight({
        holder: ".same-block",
        elements: ".same-column",
        flexible: !0,
        multiLine: !0,
        biggestHeight: !0
    })
}

function initAjaxLoad() {
    jQuery(".ajax-area").ajaxPopup({
        button: ".btn-load",
        ajaxHold: "#ajax-holder",
        appendToBody: !1,
        attr: "href",
        animSpeed: 500,
        onChange: function() {
            initCycleCarousel(), initBackgroundResize()
        }
    })
}

function initCarousel() {
    jQuery(".beans-stepslider").scrollGallery({
        mask: ".beans-mask",
        slider: ".beans-slideset",
        slides: ".beans-slide",
        btnPrev: "a.btn-prev",
        btnNext: "a.btn-next",
        generatePagination: ".beans-pagination",
        stretchSlideToMask: !0,
        maskAutoSize: !0,
        autoRotation: !0,
        switchTime: 3e3,
        animSpeed: 1e3,
        step: 1
    })
}

function initCycleCarousel() {
    jQuery(".beans-slider").scrollAbsoluteGallery({
        mask: ".beans-mask",
        slider: ".beans-slideset",
        slides: ".beans-slide",
        btnPrev: "a.btn-prev",
        btnNext: "a.btn-next",
        generatePagination: ".beans-pagination",
        stretchSlideToMask: !0,
        pauseOnHover: !1,
        maskAutoSize: !0,
        autoRotation: !1,
        switchTime: 3e3,
        animSpeed: 1e3,
        onChange: function() {
            initBackgroundResize()
        }
    }), jQuery(".beans-stepslider2").scrollAbsoluteGallery({
        mask: ".beans-mask",
        slider: ".beans-slideset",
        slides: ".beans-slide",
        btnPrev: "a.btn-prev",
        btnNext: "a.btn-next",
        pagerLinks: ".beans-pagination ul li",
        stretchSlideToMask: !0,
        pauseOnHover: !1,
        maskAutoSize: !0,
        autoRotation: !1,
        switchTime: 3e3,
        animSpeed: 1e3
    })
}

function initSlideShow() {
    jQuery(".beans-fadeslider").fadeGallery({
        slides: ".slide",
        btnPrev: "a.btn-prev",
        btnNext: "a.btn-next",
        generatePagination: ".beans-pagination",
        event: "click",
        useSwipe: !0,
        autoRotation: !0,
        autoHeight: !0,
        switchTime: 3e3,
        animSpeed: 1e3
    })
}

function initMobileNav() {
    jQuery("body").mobileNav({
        hideOnClickOutside: !0,
        menuActiveClass: "sidenav-active",
        menuOpener: ".menu-opener , .btn-close",
        menuDrop: ".menu-nav"
    }), jQuery("body").mobileNav({
        hideOnClickOutside: !1,
        menuActiveClass: "search-active",
        menuOpener: ".search-opener , .close-btn"
    }), jQuery("body").mobileNav({
        hideOnClickOutside: !0,
        menuActiveClass: "mainnav-active",
        menuOpener: ".nav-opener",
        menuDrop: ".sidemenu-photo, .nav-holder"
    }), jQuery("body").mobileNav({
        hideOnClickOutside: !0,
        menuActiveClass: "mainnav-active",
        menuOpener: ".main-navopener2",
        menuDrop: ".main-menu"
    }), jQuery("body").mobileNav({
        hideOnClickOutside: !0,
        menuActiveClass: "nav-active",
        menuOpener: ".portfolio-nav-opener",
        menuDrop: ".sidenav-port"
    })
}

function initHasDropClasses() {
    var a = "has-drop",
        b = "has-mega-drop";
    jQuery("#nav li").each(function(c, d) {
        var e = jQuery(d);
        e.find("a"), e.hasClass("megamenu"), e.hasClass("no_megamenu");
        e.hasClass("no_megamenu") && (e.find("ul").addClass("list-unstyled"), e.find("ul").wrap("<div class='drop'></div>")), e.hasClass("megamenu") && (e.find("ul").addClass("list-unstyled"), e.find(">ul >li:last-child").addClass("end_column"), e.find(">ul").wrap('<div class="mega-drop"><div class="drop-holder"></div></div>'), e.addClass(b), e.removeClass(a)), e.hasClass("start_column") && e.prev() && e.prev().addClass("end_column")
    }), jQuery(".start_column").each(function() {
        jQuery(this).nextUntil(".start_column").andSelf().wrapAll("<div class='coll'><ul class='list-unstyled'></ul></div>")
    }), jQuery(".mf_menu_title").each(function() {
        var a = jQuery(this).find("a").html();
        jQuery(this).html('<strong class="title">' + a + "</strong>")
    })
}

function initParallaxBg() {
    jQuery(".parallax-holder").parallaxBG({
        parent: ".parallax-frame",
        image: "img",
        parallaxOffset: 100,
        fallbackFunc: initBgStretch
    })
}

function initBackgroundResize() {
    jQuery(".stretch").each(function() {
        ImageStretcher.add({
            container: this,
            image: "img"
        })
    })
}

function initMarquee() {
    jQuery(".line-box").marquee({
        line: ".line",
        animSpeed: 50
    })
}

function initCustomForms() {
    jcf.replaceAll()
}

function initAccordion() {
    jQuery(".blog-accordion").slideAccordion({
        opener: "a.opener",
        slider: ".blog-slide",
        animSpeed: 300
    }), jQuery(".beans-accordion").slideAccordion({
        opener: "a.opener",
        slider: ".beans-slide",
        animSpeed: 300
    })
}

function initFormValidation() {
    jQuery("#submit,#submit2").click(function() {
        var a = $("input[name=name]"),
            b = $("input[name=email]"),
            c = $("input[name=website]"),
            d = $("textarea[name=comment]"),
            e = !1;
        if ("" == a.val() ? (a.addClass("error"), e = !0) : a.removeClass("error"), "" == b.val() ? (b.addClass("error"), e = !0) : b.removeClass("error"), "" == d.val() ? (d.addClass("error"), e = !0) : d.removeClass("error"), 1 == e) return !1;
        var f = "name=" + a.val() + "&email=" + b.val() + "&website=" + c.val() + "&comment=" + encodeURIComponent(d.val());
        return $(".text").attr("disabled", "true"), $(".loading").show(), $.ajax({
            url: "inc/process.php",
            type: "GET",
            data: f,
            cache: !1,
            success: function(a) {
                1 == a ? ($(".email-form").fadeOut("slow"), $(".done-massage").fadeIn("slow")) : alert("Sorry, unexpected error. Please try again later.")
            }
        }), !1
    }), jQuery("#form-submit").click(function() {
        var a = jQuery("input[name=name]"),
            b = jQuery("input[name=email]"),
            c = jQuery("input[name=purchase]"),
            d = jQuery("input[name=profile]"),
            e = jQuery("textarea[name=comment]"),
            f = !1;
        if ("" == a.val() ? (a.addClass("error"), f = !0) : a.removeClass("error"), "" == b.val() ? (b.addClass("error"), f = !0) : b.removeClass("error"), "" == c.val() ? (c.addClass("error"), f = !0) : c.removeClass("error"), "" == d.val() ? (d.addClass("error"), f = !0) : d.removeClass("error"), "" == e.val() ? (e.addClass("error"), f = !0) : e.removeClass("error"), 1 == f) return !1;
        var g = "name=" + a.val() + "&email=" + b.val() + "&purchase=" + c.val() + "&profile=" + d.val() + "&website=" + website.val() + "&comment=" + encodeURIComponent(e.val());
        return $(".form-control").attr("disabled", "true"), $(".loading").show(), $.ajax({
            url: "inc/process2.php",
            type: "GET",
            data: g,
            cache: !1,
            success: function(a) {
                1 == a ? ($(".email-form").fadeOut("slow"), $(".done-massage").fadeIn("slow")) : alert("Sorry, unexpected error. Please try again later.")
            }
        }), !1
    })
}

function initBgStretch() {
    function a(a) {
        var b = a.ratio || a.elementWidth / a.elementHeight,
            c = a.maskWidth,
            d = c / b;
        return d < a.maskHeight && (d = a.maskHeight, c = d * b), {
            width: c,
            height: d,
            top: (a.maskHeight - d) / 2,
            left: (a.maskWidth - c) / 2
        }
    }

    function b(a, b) {
        return a.css({
            height: "",
            left: "",
            top: "",
            width: ""
        }), {
            ratio: a.width() / a.height(),
            maskWidth: b.width(),
            maskHeight: b.outerHeight(!0)
        }
    }

    function c(a, b) {
        a.css({
            height: b.height,
            left: b.left,
            top: b.top,
            width: b.width
        })
    }
    jQuery(".bg-frame").each(function() {
        var d = jQuery(this),
            e = d.find("img");
        jQuery(window).bind("load resize", function() {
            var f = a(b(e, d));
            c(e, f)
        })
    })
}

function setSameHeight(a) {
    function e(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    var b = {
        holder: null,
        skipClass: "same-height-ignore",
        leftEdgeClass: "same-height-left",
        rightEdgeClass: "same-height-right",
        elements: ">*",
        flexible: !1,
        multiLine: !1,
        useMinHeight: !1,
        biggestHeight: !1
    };
    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
    if (b.holder) {
        var d = lib.queryElementsBySelector(b.holder);
        lib.each(d, function(a, c) {
            function j() {
                for (var a = 0; a < d.length; a++) d[a].style[b.useMinHeight && SameHeight.supportMinHeight ? "minHeight" : "height"] = "";
                b.multiLine ? SameHeight.resizeElementsByRows(d, b) : SameHeight.setSize(d, c, b)
            }

            function k() {
                clearTimeout(f), f = setTimeout(function() {
                    j(), clearTimeout(g), g = setTimeout(j, 100)
                }, 1)
            }
            for (var f, g, d = [], h = lib.queryElementsBySelector(b.elements, c), i = 0; i < h.length; i++) lib.hasClass(h[i], b.skipClass) || d.push(h[i]);
            d.length && (j(), b.flexible && (e(window, "resize", k), e(window, "orientationchange", k), FontResizeEvent.onChange(k)), e(window, "load", k))
        })
    }
}

function bindReady(a) {
    var b = !1,
        c = function() {
            b || (b = !0, a())
        };
    if (document.addEventListener) document.addEventListener("DOMContentLoaded", c, !1);
    else if (document.attachEvent) {
        if (document.documentElement.doScroll && window == window.top) {
            var d = function() {
                if (!b && document.body) try {
                    document.documentElement.doScroll("left"), c()
                } catch (a) {
                    setTimeout(d, 0)
                }
            };
            d()
        }
        document.attachEvent("onreadystatechange", function() {
            "complete" === document.readyState && c()
        })
    }
    window.addEventListener ? window.addEventListener("load", c, !1) : window.attachEvent && window.attachEvent("onload", c)
}
jQuery(function() {
        "use strict";
        initVideoPlayer(), initNumCounter(), initCarousel(), initSlideShow(), initAccordion(), initFlickrPhotos(), initVimeoPlayer(), initCustomForms(), initAnimatedProgressbars(), initYoutubePlayer(), initCycleCarousel(), initFormValidation(), initGoToTop(), initJqureyAnimation(), initGoToTopScroll(), initSlickSlider(), initPieCharts(), initInstagramPics("2311561473.1677ed0.4e364b1ee1664889b061b4bb21612abe", "e37e5979509b44cb811a8be2b1067f11"), initNavRemoveClass()
    }), jQuery(window).on("load", function() {
        "use strict";
        initPreLoader(), initTabs(), initMarquee(), initIsotope(), initAjaxLoad(), initGoogleMap(), initMobileNav(), initSameHeight(), initParallaxBg(), initStyleChanger(), initHasDropClasses(), initStickyHeader(), initIsotopControl(), initBackgroundResize(), jQuery("input, textarea").placeholder(), initAnchors()
    }), jQuery(window).scroll(function() {
        initPieCharts(), initGoToTopScroll(), initAnimatedProgressbars()
    }),
    function(a) {
        function b(b) {
            this.options = a.extend({
                mask: "div.mask",
                slider: ">*",
                slides: ">*",
                activeClass: "active",
                disabledClass: "disabled",
                btnPrev: "a.btn-prev",
                btnNext: "a.btn-next",
                generatePagination: !1,
                pagerList: "<ul>",
                pagerListItem: '<li><a href="#"></a></li>',
                pagerListItemText: "a",
                pagerLinks: ".pagination li",
                currentNumber: "span.current-num",
                totalNumber: "span.total-num",
                btnPlay: ".btn-play",
                btnPause: ".btn-pause",
                btnPlayPause: ".btn-play-pause",
                galleryReadyClass: "gallery-js-ready",
                autorotationActiveClass: "autorotation-active",
                autorotationDisabledClass: "autorotation-disabled",
                stretchSlideToMask: !1,
                circularRotation: !0,
                disableWhileAnimating: !1,
                autoRotation: !1,
                pauseOnHover: !1,
                maskAutoSize: !1,
                switchTime: 4e3,
                animSpeed: 600,
                event: "click",
                swipeThreshold: 15,
                handleTouch: !0,
                vertical: !1,
                useTranslate3D: !1,
                step: !1
            }, b), this.init()
        }
        b.prototype = {
            init: function() {
                this.options.holder && (this.findElements(), this.attachEvents(), this.refreshPosition(), this.refreshState(!0), this.resumeRotation(), this.makeCallback("onInit", this))
            },
            findElements: function() {
                if (this.fullSizeFunction = this.options.vertical ? "outerHeight" : "outerWidth", this.innerSizeFunction = this.options.vertical ? "height" : "width", this.slideSizeFunction = "outerHeight", this.maskSizeProperty = "height", this.animProperty = this.options.vertical ? "marginTop" : "marginLeft", this.gallery = a(this.options.holder).addClass(this.options.galleryReadyClass), this.mask = this.gallery.find(this.options.mask), this.slider = this.mask.find(this.options.slider), this.slides = this.slider.find(this.options.slides), this.btnPrev = this.gallery.find(this.options.btnPrev), this.btnNext = this.gallery.find(this.options.btnNext), this.currentStep = 0, this.stepsCount = 0, this.options.step === !1) {
                    var b = this.slides.filter("." + this.options.activeClass);
                    b.length && (this.currentStep = this.slides.index(b))
                }
                this.calculateOffsets(), "string" == typeof this.options.generatePagination ? (this.pagerLinks = a(), this.buildPagination()) : (this.pagerLinks = this.gallery.find(this.options.pagerLinks), this.attachPaginationEvents()), this.btnPlay = this.gallery.find(this.options.btnPlay), this.btnPause = this.gallery.find(this.options.btnPause), this.btnPlayPause = this.gallery.find(this.options.btnPlayPause), this.curNum = this.gallery.find(this.options.currentNumber), this.allNum = this.gallery.find(this.options.totalNumber)
            },
            attachEvents: function() {
                var b = this;
                this.bindHandlers(["onWindowResize"]), a(window).bind("load resize orientationchange", this.onWindowResize), this.btnPrev.length && (this.prevSlideHandler = function(a) {
                    a.preventDefault(), b.prevSlide()
                }, this.btnPrev.bind(this.options.event, this.prevSlideHandler)), this.btnNext.length && (this.nextSlideHandler = function(a) {
                    a.preventDefault(), b.nextSlide()
                }, this.btnNext.bind(this.options.event, this.nextSlideHandler)), this.options.pauseOnHover && !c && (this.hoverHandler = function() {
                    b.options.autoRotation && (b.galleryHover = !0, b.pauseRotation())
                }, this.leaveHandler = function() {
                    b.options.autoRotation && (b.galleryHover = !1, b.resumeRotation())
                }, this.gallery.bind({
                    mouseenter: this.hoverHandler,
                    mouseleave: this.leaveHandler
                })), this.btnPlay.length && (this.btnPlayHandler = function(a) {
                    a.preventDefault(), b.startRotation()
                }, this.btnPlay.bind(this.options.event, this.btnPlayHandler)), this.btnPause.length && (this.btnPauseHandler = function(a) {
                    a.preventDefault(), b.stopRotation()
                }, this.btnPause.bind(this.options.event, this.btnPauseHandler)), this.btnPlayPause.length && (this.btnPlayPauseHandler = function(a) {
                    a.preventDefault(), b.gallery.hasClass(b.options.autorotationActiveClass) ? b.stopRotation() : b.startRotation()
                }, this.btnPlayPause.bind(this.options.event, this.btnPlayPauseHandler)), c && this.options.useTranslate3D && this.slider.css({
                    "-webkit-transform": "translate3d(0px, 0px, 0px)"
                }), c && this.options.handleTouch && window.Hammer && this.mask.length && (this.swipeHandler = new Hammer.Manager(this.mask[0]), this.swipeHandler.add(new Hammer.Pan({
                    direction: b.options.vertical ? Hammer.DIRECTION_VERTICAL : Hammer.DIRECTION_HORIZONTAL,
                    threshold: b.options.swipeThreshold
                })), this.swipeHandler.on("panstart", function() {
                    b.galleryAnimating ? b.swipeHandler.stop() : (b.pauseRotation(), b.originalOffset = parseFloat(b.slider.css(b.animProperty)))
                }).on("panmove", function(a) {
                    var c = b.originalOffset + a[b.options.vertical ? "deltaY" : "deltaX"];
                    c = Math.max(Math.min(0, c), b.maxOffset), b.slider.css(b.animProperty, c)
                }).on("panend", function(a) {
                    b.resumeRotation(), a.distance > b.options.swipeThreshold ? a.offsetDirection === Hammer.DIRECTION_RIGHT || a.offsetDirection === Hammer.DIRECTION_DOWN ? b.nextSlide() : b.prevSlide() : b.switchSlide()
                }))
            },
            onWindowResize: function() {
                this.galleryAnimating ? this.resizeQueue = !0 : (this.calculateOffsets(), this.refreshPosition(), this.buildPagination(), this.refreshState(), this.resizeQueue = !1)
            },
            refreshPosition: function() {
                this.currentStep = Math.min(this.currentStep, this.stepsCount - 1), this.tmpProps = {}, this.tmpProps[this.animProperty] = this.getStepOffset(), this.slider.stop().css(this.tmpProps)
            },
            calculateOffsets: function() {
                var c, d, b = this;
                if (this.options.stretchSlideToMask) {
                    var e = {};
                    e[this.innerSizeFunction] = this.mask[this.innerSizeFunction](), this.slides.css(e)
                }
                if (this.maskSize = this.mask[this.innerSizeFunction](), this.sumSize = this.getSumSize(), this.maxOffset = this.maskSize - this.sumSize, this.options.vertical && this.options.maskAutoSize) {
                    this.options.step = 1, this.stepsCount = this.slides.length, this.stepOffsets = [0], c = 0;
                    for (var f = 0; f < this.slides.length; f++) c -= a(this.slides[f])[this.fullSizeFunction](!0), this.stepOffsets.push(c);
                    return void(this.maxOffset = c)
                }
                if ("number" == typeof this.options.step && this.options.step > 0)
                    for (this.slideDimensions = [], this.slides.each(a.proxy(function(c, d) {
                            b.slideDimensions.push(a(d)[b.fullSizeFunction](!0))
                        }, this)), this.stepOffsets = [0], this.stepsCount = 1, c = d = 0; c > this.maxOffset;) c -= this.getSlideSize(d, d + this.options.step), d += this.options.step, this.stepOffsets.push(Math.max(c, this.maxOffset)), this.stepsCount++;
                else
                    for (this.stepSize = this.maskSize, this.stepsCount = 1, c = 0; c > this.maxOffset;) c -= this.stepSize, this.stepsCount++
            },
            getSumSize: function() {
                var b = 0;
                return this.slides.each(a.proxy(function(c, d) {
                    b += a(d)[this.fullSizeFunction](!0)
                }, this)), this.slider.css(this.innerSizeFunction, b), b
            },
            getStepOffset: function(a) {
                return a = a || this.currentStep, "number" == typeof this.options.step ? this.stepOffsets[this.currentStep] : Math.min(0, Math.max(-this.currentStep * this.stepSize, this.maxOffset))
            },
            getSlideSize: function(a, b) {
                for (var c = 0, d = a; d < Math.min(b, this.slideDimensions.length); d++) c += this.slideDimensions[d];
                return c
            },
            buildPagination: function() {
                if ("string" == typeof this.options.generatePagination && (this.pagerHolder || (this.pagerHolder = this.gallery.find(this.options.generatePagination)), this.pagerHolder.length && this.oldStepsCount != this.stepsCount)) {
                    this.oldStepsCount = this.stepsCount, this.pagerHolder.empty(), this.pagerList = a(this.options.pagerList).appendTo(this.pagerHolder);
                    for (var b = 0; b < this.stepsCount; b++) a(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(b + 1);
                    this.pagerLinks = this.pagerList.children(), this.attachPaginationEvents()
                }
            },
            attachPaginationEvents: function() {
                var a = this;
                this.pagerLinksHandler = function(b) {
                    b.preventDefault(), a.numSlide(a.pagerLinks.index(b.currentTarget))
                }, this.pagerLinks.bind(this.options.event, this.pagerLinksHandler)
            },
            prevSlide: function() {
                this.options.disableWhileAnimating && this.galleryAnimating || (this.currentStep > 0 ? (this.currentStep--, this.switchSlide()) : this.options.circularRotation && (this.currentStep = this.stepsCount - 1, this.switchSlide()))
            },
            nextSlide: function(a) {
                this.options.disableWhileAnimating && this.galleryAnimating || (this.currentStep < this.stepsCount - 1 ? (this.currentStep++, this.switchSlide()) : (this.options.circularRotation || a === !0) && (this.currentStep = 0, this.switchSlide()))
            },
            numSlide: function(a) {
                this.currentStep != a && (this.currentStep = a, this.switchSlide())
            },
            switchSlide: function() {
                var a = this;
                this.galleryAnimating = !0, this.tmpProps = {}, this.tmpProps[this.animProperty] = this.getStepOffset(), this.slider.stop().animate(this.tmpProps, {
                    duration: this.options.animSpeed,
                    complete: function() {
                        a.galleryAnimating = !1, a.resizeQueue && a.onWindowResize(), a.makeCallback("onChange", a), a.autoRotate()
                    }
                }), this.refreshState(), this.makeCallback("onBeforeChange", this)
            },
            refreshState: function(a) {
                1 !== this.options.step && this.stepsCount !== this.slides.length || this.slides.removeClass(this.options.activeClass).eq(this.currentStep).addClass(this.options.activeClass), this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentStep).addClass(this.options.activeClass), this.curNum.html(this.currentStep + 1), this.allNum.html(this.stepsCount), this.options.maskAutoSize && "number" == typeof this.options.step && (this.tmpProps = {}, this.tmpProps[this.maskSizeProperty] = this.slides.eq(Math.min(this.currentStep, this.slides.length - 1))[this.slideSizeFunction](!0), this.mask.stop()[a ? "css" : "animate"](this.tmpProps)), this.options.circularRotation || (this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass), 0 === this.currentStep && this.btnPrev.addClass(this.options.disabledClass), this.currentStep === this.stepsCount - 1 && this.btnNext.addClass(this.options.disabledClass)), this.gallery.toggleClass("not-enough-slides", this.sumSize <= this.maskSize)
            },
            startRotation: function() {
                this.options.autoRotation = !0, this.galleryHover = !1, this.autoRotationStopped = !1, this.resumeRotation()
            },
            stopRotation: function() {
                this.galleryHover = !0, this.autoRotationStopped = !0, this.pauseRotation()
            },
            pauseRotation: function() {
                this.gallery.addClass(this.options.autorotationDisabledClass), this.gallery.removeClass(this.options.autorotationActiveClass), clearTimeout(this.timer)
            },
            resumeRotation: function() {
                this.autoRotationStopped || (this.gallery.addClass(this.options.autorotationActiveClass), this.gallery.removeClass(this.options.autorotationDisabledClass), this.autoRotate())
            },
            autoRotate: function() {
                var a = this;
                clearTimeout(this.timer), !this.options.autoRotation || this.galleryHover || this.autoRotationStopped ? this.pauseRotation() : this.timer = setTimeout(function() {
                    a.nextSlide(!0)
                }, this.options.switchTime)
            },
            bindHandlers: function(b) {
                var c = this;
                a.each(b, function(a, b) {
                    var d = c[b];
                    c[b] = function() {
                        return d.apply(c, arguments)
                    }
                })
            },
            makeCallback: function(a) {
                if ("function" == typeof this.options[a]) {
                    var b = Array.prototype.slice.call(arguments);
                    b.shift(), this.options[a].apply(this, b)
                }
            }
        };
        var c = /Windows Phone/.test(navigator.userAgent) || "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
        a.fn.scrollGallery = function(c) {
            return this.each(function() {
                a(this).data("ScrollGallery", new b(a.extend(c, {
                    holder: this
                })))
            })
        }
    }(jQuery),
    function(a) {
        function b(b) {
            this.options = a.extend({
                activeClass: "active",
                mask: "div.slides-mask",
                slider: ">ul",
                slides: ">li",
                btnPrev: ".btn-prev",
                btnNext: ".btn-next",
                pagerLinks: "ul.pager > li",
                generatePagination: !1,
                pagerList: "<ul>",
                pagerListItem: '<li><a href="#"></a></li>',
                pagerListItemText: "a",
                galleryReadyClass: "gallery-js-ready",
                currentNumber: "span.current-num",
                totalNumber: "span.total-num",
                maskAutoSize: !1,
                autoRotation: !1,
                pauseOnHover: !1,
                stretchSlideToMask: !1,
                switchTime: 3e3,
                animSpeed: 500,
                handleTouch: !0,
                swipeThreshold: 15,
                vertical: !1
            }, b), this.init()
        }
        b.prototype = {
            init: function() {
                this.options.holder && (this.findElements(), this.attachEvents(), this.makeCallback("onInit", this))
            },
            findElements: function() {
                this.holder = a(this.options.holder).addClass(this.options.galleryReadyClass), this.mask = this.holder.find(this.options.mask), this.slider = this.mask.find(this.options.slider), this.slides = this.slider.find(this.options.slides), this.btnPrev = this.holder.find(this.options.btnPrev), this.btnNext = this.holder.find(this.options.btnNext), this.currentNumber = this.holder.find(this.options.currentNumber), this.totalNumber = this.holder.find(this.options.totalNumber), this.updateAttributes(), "string" == typeof this.options.generatePagination ? this.pagerLinks = this.buildPagination() : this.pagerLinks = this.holder.find(this.options.pagerLinks), this.sizeProperty = this.options.vertical ? "height" : "width", this.positionProperty = this.options.vertical ? "top" : "left", this.animProperty = this.options.vertical ? "marginTop" : "marginLeft", this.slideSize = this.slides[this.sizeProperty](), this.currentIndex = 0, this.prevIndex = 0, this.options.maskAutoSize = !this.options.vertical && this.options.maskAutoSize, this.options.vertical && this.mask.css({
                    height: this.slides.innerHeight()
                }), this.options.maskAutoSize && this.mask.css({
                    height: this.slider.height()
                }), this.slider.css({
                    position: "relative",
                    height: this.options.vertical ? this.slideSize * this.slides.length : "100%"
                }), this.slides.css({
                    position: "absolute"
                }).css(this.positionProperty, -9999).eq(this.currentIndex).css(this.positionProperty, 0), this.refreshState()
            },
            updateAttributes: function() {
                "true" === this.holder.attr("data-rotate") && (this.options.autoRotation = !0), "vertical" === this.holder.attr("data-direction") && (this.options.vertical = !0), "true" === this.holder.attr("data-pause-hover") && (this.options.pauseOnHover = !0), this.holder.attr("data-speed") && (this.options.animSpeed = parseFloat(this.holder.attr("data-speed")))
            },
            buildPagination: function() {
                var b = a();
                if (this.pagerHolder || (this.pagerHolder = this.holder.find(this.options.generatePagination)), this.pagerHolder.length) {
                    this.pagerHolder.empty(), this.pagerList = a(this.options.pagerList).appendTo(this.pagerHolder);
                    for (var c = 0; c < this.slides.length; c++) a(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(c + 1);
                    b = this.pagerList.children()
                }
                return b
            },
            updateAttributes: function() {
                "true" === this.holder.attr("data-rotate") && (this.options.autoRotation = !0), "vertical" === this.holder.attr("data-direction") && (this.options.vertical = !0), "true" === this.holder.attr("data-pause-hover") && (this.options.pauseOnHover = !0), this.holder.attr("data-speed") && (this.options.animSpeed = parseFloat(this.holder.attr("data-speed")))
            },
            attachEvents: function() {
                var b = this;
                this.btnPrev.length && (this.btnPrevHandler = function(a) {
                    a.preventDefault(), b.prevSlide()
                }, this.btnPrev.click(this.btnPrevHandler)), this.btnNext.length && (this.btnNextHandler = function(a) {
                    a.preventDefault(), b.nextSlide()
                }, this.btnNext.click(this.btnNextHandler)), this.pagerLinks.length && (this.pagerLinksHandler = function(a) {
                    a.preventDefault(), b.numSlide(b.pagerLinks.index(a.currentTarget))
                }, this.pagerLinks.click(this.pagerLinksHandler)), this.options.pauseOnHover && (this.hoverHandler = function() {
                    clearTimeout(b.timer)
                }, this.leaveHandler = function() {
                    b.autoRotate()
                }, this.holder.bind({
                    mouseenter: this.hoverHandler,
                    mouseleave: this.leaveHandler
                })), this.resizeHandler = function() {
                    b.animating || (b.options.stretchSlideToMask && b.resizeSlides(), b.resizeHolder(), b.setSlidesPosition(b.currentIndex))
                }, a(window).bind("load resize orientationchange", this.resizeHandler), b.options.stretchSlideToMask && b.resizeSlides(), this.options.handleTouch && window.Hammer && this.mask.length && this.slides.length > 1 && c && (this.swipeHandler = new Hammer.Manager(this.mask[0]), this.swipeHandler.add(new Hammer.Pan({
                    direction: b.options.vertical ? Hammer.DIRECTION_VERTICAL : Hammer.DIRECTION_HORIZONTAL,
                    threshold: b.options.swipeThreshold
                })), this.swipeHandler.on("panstart", function() {
                    b.animating ? b.swipeHandler.stop() : clearTimeout(b.timer)
                }).on("panmove", function(a) {
                    b.swipeOffset = -b.slideSize + a[b.options.vertical ? "deltaY" : "deltaX"], b.slider.css(b.animProperty, b.swipeOffset), clearTimeout(b.timer)
                }).on("panend", function(a) {
                    if (a.distance > b.options.swipeThreshold) a.offsetDirection === Hammer.DIRECTION_RIGHT || a.offsetDirection === Hammer.DIRECTION_DOWN ? b.nextSlide() : b.prevSlide();
                    else {
                        var c = {};
                        c[b.animProperty] = -b.slideSize, b.slider.animate(c, {
                            duration: b.options.animSpeed
                        }), b.autoRotate()
                    }
                    b.swipeOffset = 0
                })), this.autoRotate(), this.resizeHolder(), this.setSlidesPosition(this.currentIndex)
            },
            resizeSlides: function() {
                this.slideSize = this.mask[this.options.vertical ? "height" : "width"](), this.slides.css(this.sizeProperty, this.slideSize)
            },
            resizeHolder: function() {
                this.options.maskAutoSize && this.mask.css({
                    height: this.slides.eq(this.currentIndex).outerHeight(!0)
                })
            },
            prevSlide: function() {
                !this.animating && this.slides.length > 1 && (this.direction = -1, this.prevIndex = this.currentIndex, this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = this.slides.length - 1, this.switchSlide())
            },
            nextSlide: function(a) {
                !this.animating && this.slides.length > 1 && (this.direction = 1, this.prevIndex = this.currentIndex, this.currentIndex < this.slides.length - 1 ? this.currentIndex++ : this.currentIndex = 0, this.switchSlide())
            },
            numSlide: function(a) {
                !this.animating && this.currentIndex !== a && this.slides.length > 1 && (this.direction = a > this.currentIndex ? 1 : -1, this.prevIndex = this.currentIndex, this.currentIndex = a, this.switchSlide())
            },
            preparePosition: function() {
                this.setSlidesPosition(this.prevIndex, this.direction < 0 ? this.currentIndex : null, this.direction > 0 ? this.currentIndex : null, this.direction)
            },
            setSlidesPosition: function(a, b, c, d) {
                if (this.slides.length > 1) {
                    var e = "number" == typeof b ? b : a > 0 ? a - 1 : this.slides.length - 1,
                        f = "number" == typeof c ? c : a < this.slides.length - 1 ? a + 1 : 0;
                    if (this.slider.css(this.animProperty, this.swipeOffset ? this.swipeOffset : -this.slideSize), this.slides.css(this.positionProperty, -9999).eq(a).css(this.positionProperty, this.slideSize), e === f && "number" == typeof d) {
                        var g = d > 0 ? 2 * this.slideSize : 0;
                        this.slides.eq(f).css(this.positionProperty, g)
                    } else this.slides.eq(e).css(this.positionProperty, 0), this.slides.eq(f).css(this.positionProperty, 2 * this.slideSize)
                }
            },
            switchSlide: function() {
                var a = this,
                    c = (this.slides.eq(this.prevIndex), this.slides.eq(this.currentIndex));
                a.hideContent(), this.animating = !0, this.options.maskAutoSize && this.mask.animate({
                    height: c.outerHeight(!0)
                }, {
                    duration: this.options.animSpeed
                });
                var d = {};
                d[this.animProperty] = this.direction > 0 ? 2 * -this.slideSize : 0, this.preparePosition(), this.slider.animate(d, {
                    duration: this.options.animSpeed,
                    complete: function() {
                        a.showContent(), a.setSlidesPosition(a.currentIndex), a.animating = !1, a.autoRotate(), a.makeCallback("onChange", a)
                    }
                }), this.refreshState(), this.makeCallback("onBeforeChange", this)
            },
            hideContent: function() {
                a(this.slides.eq(this.currentIndex)).find(".heading2, anim-heading").css({
                    position: "relative"
                }).animate({
                    bottom: -50,
                    opacity: 0
                }, 500), a(this.slides.eq(this.currentIndex)).find(".btn-box").css({
                    position: "relative"
                }).animate({
                    bottom: -50,
                    opacity: 0
                }, 500), a(this.slides.eq(this.currentIndex)).find(".title2").css({
                    position: "relative"
                }).animate({
                    bottom: -50,
                    opacity: 0
                }, 500)
            },
            showContent: function() {
                a(this.slides.eq(this.currentIndex)).find(".heading2, anim-heading").animate({
                    bottom: 0,
                    opacity: 1
                }, 700), a(this.slides.eq(this.currentIndex)).find(".btn-box").animate({
                    bottom: 0,
                    opacity: 1
                }, 700), a(this.slides.eq(this.currentIndex)).find(".title2").animate({
                    bottom: 0,
                    opacity: 1
                }, 700)
            },
            refreshState: function(a) {
                this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass), this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass), this.currentNumber.html(this.currentIndex + 1), this.totalNumber.html(this.slides.length), this.holder.toggleClass("not-enough-slides", 1 === this.slides.length)
            },
            autoRotate: function() {
                var a = this;
                clearTimeout(this.timer), this.options.autoRotation && (this.timer = setTimeout(function() {
                    a.nextSlide()
                }, this.options.switchTime))
            },
            makeCallback: function(a) {
                if ("function" == typeof this.options[a]) {
                    var b = Array.prototype.slice.call(arguments);
                    b.shift(), this.options[a].apply(this, b)
                }
            }
        };
        var c = /Windows Phone/.test(navigator.userAgent) || "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
        a.fn.scrollAbsoluteGallery = function(c) {
            return this.each(function() {
                a(this).data("ScrollAbsoluteGallery", new b(a.extend(c, {
                    holder: this
                })))
            })
        }
    }(jQuery),
    function(a) {
        function b(b) {
            this.options = a.extend({
                container: null,
                hideOnClickOutside: !1,
                menuActiveClass: "nav-active",
                menuOpener: ".nav-opener",
                menuDrop: ".nav-drop",
                toggleEvent: "click",
                outsideClickEvent: "click touchstart pointerdown MSPointerDown"
            }, b), this.initStructure(), this.attachEvents()
        }
        b.prototype = {
            initStructure: function() {
                this.page = a("html"), this.container = a(this.options.container), this.opener = this.container.find(this.options.menuOpener), this.drop = this.container.find(this.options.menuDrop)
            },
            attachEvents: function() {
                var b = this;
                c && (c(), c = null), this.outsideClickHandler = function(c) {
                    if (b.isOpened()) {
                        var d = a(c.target);
                        d.closest(b.opener).length || d.closest(b.drop).length || b.hide()
                    }
                }, this.openerClickHandler = function(a) {
                    a.preventDefault(), b.toggle()
                }, this.opener.on(this.options.toggleEvent, this.openerClickHandler)
            },
            isOpened: function() {
                return this.container.hasClass(this.options.menuActiveClass)
            },
            show: function() {
                this.container.addClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.on(this.options.outsideClickEvent, this.outsideClickHandler), this.makeCallback("onInit", this)
            },
            hide: function() {
                this.container.removeClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.off(this.options.outsideClickEvent, this.outsideClickHandler), this.makeCallback("onHide", this)
            },
            toggle: function() {
                this.isOpened() ? this.hide() : this.show()
            },
            makeCallback: function(a) {
                if ("function" == typeof this.options[a]) {
                    var b = Array.prototype.slice.call(arguments);
                    b.shift(), this.options[a].apply(this, b)
                }
            },
            destroy: function() {
                this.container.removeClass(this.options.menuActiveClass), this.opener.off(this.options.toggleEvent, this.clickHandler), this.page.off(this.options.outsideClickEvent, this.outsideClickHandler)
            }
        };
        var c = function() {
            var e, f, b = a(window),
                c = a("html"),
                d = "resize-active",
                g = function() {
                    e = !1, c.removeClass(d)
                },
                h = function() {
                    e || (e = !0, c.addClass(d)), clearTimeout(f), f = setTimeout(g, 500)
                };
            b.on("resize orientationchange", h)
        };
        a.fn.mobileNav = function(c) {
            return this.each(function() {
                var d = a.extend({}, c, {
                        container: this
                    }),
                    e = new b(d);
                a.data(this, "MobileNav", e)
            })
        }
    }(jQuery),
    function(a, b, c) {
        function l(a) {
            var b = {},
                d = /^jQuery\d+$/;
            return c.each(a.attributes, function(a, c) {
                c.specified && !d.test(c.name) && (b[c.name] = c.value)
            }), b
        }

        function m(a, b) {
            var d = this,
                e = c(d);
            if (d.value == e.attr("placeholder") && e.hasClass("placeholder"))
                if (e.data("placeholder-password")) {
                    if (e = e.hide().next().show().attr("id", e.removeAttr("id").data("placeholder-id")), a === !0) return e[0].value = b;
                    e.focus()
                } else d.value = "", e.removeClass("placeholder"), d == o() && d.select()
        }

        function n() {
            var a, b = this,
                d = c(b),
                e = this.id;
            if ("" == b.value) {
                if ("password" == b.type) {
                    if (!d.data("placeholder-textinput")) {
                        try {
                            a = d.clone().attr({
                                type: "text"
                            })
                        } catch (b) {
                            a = c("<input>").attr(c.extend(l(this), {
                                type: "text"
                            }))
                        }
                        a.removeAttr("name").data({
                            "placeholder-password": d,
                            "placeholder-id": e
                        }).bind("focus.placeholder", m), d.data({
                            "placeholder-textinput": a,
                            "placeholder-id": e
                        }).before(a)
                    }
                    d = d.removeAttr("id").hide().prev().attr("id", e).show()
                }
                d.addClass("placeholder"), d[0].value = d.attr("placeholder")
            } else d.removeClass("placeholder")
        }

        function o() {
            try {
                return b.activeElement
            } catch (a) {}
        }
        var j, k, d = "[object OperaMini]" == Object.prototype.toString.call(a.operamini),
            e = "placeholder" in b.createElement("input") && !d,
            f = "placeholder" in b.createElement("textarea") && !d,
            g = c.fn,
            h = c.valHooks,
            i = c.propHooks;
        e && f ? (k = g.placeholder = function() {
            return this
        }, k.input = k.textarea = !0) : (k = g.placeholder = function() {
            var a = this;
            return a.filter((e ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": m,
                "blur.placeholder": n
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
        }, k.input = e, k.textarea = f, j = {
            get: function(a) {
                var b = c(a),
                    d = b.data("placeholder-password");
                return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
            },
            set: function(a, b) {
                var d = c(a),
                    e = d.data("placeholder-password");
                return e ? e[0].value = b : d.data("placeholder-enabled") ? ("" == b ? (a.value = b, a != o() && n.call(a)) : d.hasClass("placeholder") ? m.call(a, !0, b) || (a.value = b) : a.value = b, d) : a.value = b
            }
        }, e || (h.input = j, i.value = j), f || (h.textarea = j, i.value = j), c(function() {
            c(b).delegate("form", "submit.placeholder", function() {
                var a = c(".placeholder", this).each(m);
                setTimeout(function() {
                    a.each(n)
                }, 10)
            })
        }), c(a).bind("beforeunload.placeholder", function() {
            c(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery),
    function() {
        var a, b = function() {
                return window.innerHeight || document.documentElement.clientHeight
            },
            c = function() {
                var b = jQuery("<style>").appendTo("head");
                a = b.prop("sheet") || b.prop("styleSheet");
                var c = function(b, c, d) {
                    a.insertRule ? a.insertRule(b + "{" + c + "}", d) : a.addRule(b, c, d)
                };
                c(".win-min-height", "min-height:0"), c(".win-height", "height:auto"), c(".win-max-height", "max-height:100%"), d()
            },
            d = function() {
                var c = b(),
                    d = a.cssRules || a.rules;
                jQuery.each(d, function(a, b) {
                    var d = b.selectorText.toLowerCase().replace(".win-", "").replace("-h", "H");
                    b.style[d] = c + "px"
                })
            };
        c(), jQuery(window).on("resize orientationchange", d)
    }(),
    function(a) {
        function b(b) {
            this.options = a.extend({
                parent: ".bg-frame",
                image: "img",
                parallaxOffset: 100,
                fallbackFunc: function() {}
            }, b), this.init()
        }
        b.prototype = {
            init: function() {
                if (this.options.holder) {
                    if ("function" == typeof this.options.fallbackFunc && (d || c)) return void this.options.fallbackFunc();
                    this.getStructure(), this.attachEvents()
                }
            },
            getStructure: function() {
                this.holder = a(this.options.holder), this.parent = this.holder.find(this.options.parent), this.holderHeight = this.holder.height(), this.holderOffset = this.holder.offset().top, this.image = this.parent.find(this.options.image).eq(0).css({
                    visibility: "hidden"
                }), this.imageRatio = this.image.attr("width") / this.image.attr("height") || this.image.width() / this.image.height(), this.parent.css({
                    backgroundImage: "url(" + this.image.attr("src") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                }), this.win = a(window), this.winHeight = this.win.height(), this.winWidth = this.win.width(), this.winScroll = this.win.scrollTop(), this.bgHeight = this.winHeight + this.options.parallaxOffset
            },
            attachEvents: function() {
                var a = this;
                this.bindHandlers(["scrollLayout"]), this.bindHandlers(["resizeLayout"]), this.win.bind("scroll", this.scrollLayout).bind("resize load", this.resizeLayout), setTimeout(function() {
                    a.resizeLayout(), a.win.trigger("scroll")
                }, 500)
            },
            resizeLayout: function() {
                this.winHeight = this.win.height(), this.winWidth = this.win.width(), this.holderHeight = this.holder.height(), this.holderOffset = this.holder.offset().top, this.blockHeight = this.winHeight + this.options.parallaxOffset, this.currentTop = Math.max(0, this.blockHeight - this.holderHeight), this.parallaxRatio = this.win.width() / (this.winHeight + this.options.parallaxOffset), this.ratioState = this.imageRatio <= this.parallaxRatio, this.ratioState ? (this.bgWidth = this.winWidth, this.bgHeight = this.bgWidth / this.imageRatio) : (this.bgWidth = "auto", this.bgHeight = this.winHeight + this.options.parallaxOffset), this.parent.css({
                    paddingBottom: this.currentTop,
                    backgroundSize: "auto" != this.bgWidth ? this.bgWidth + "px " + this.bgHeight + "px" : this.bgWidth + " " + this.bgHeight + "px"
                }), this.scrollLayout()
            },
            scrollLayout: function() {
                if (this.winScroll = this.win.scrollTop(), this.offsetPercentage = Math.max(0, Math.min((this.winScroll + this.winHeight - this.holderOffset) / (this.winHeight + this.holderHeight), 1)).toFixed(4), this.ratioState) var a = "50% " + (-parseFloat(this.offsetPercentage) * this.options.parallaxOffset - (this.bgHeight - this.winHeight) / 2) + "px";
                else var a = "50% " + -parseFloat(this.offsetPercentage) * this.options.parallaxOffset + "px";
                this.parent.css({
                    backgroundPosition: a
                })
            },
            bindHandlers: function(b) {
                var c = this;
                a.each(b, function(a, b) {
                    var d = c[b];
                    c[b] = function() {
                        return d.apply(c, arguments)
                    }
                })
            }
        };
        var c = /MSIE 10.*Touch/.test(navigator.userAgent) || "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            d = window.attachEvent && !window.addEventListener;
        a.fn.parallaxBG = function(c) {
            return this.each(function() {
                new b(a.extend(c, {
                    holder: this
                }))
            })
        }
    }(jQuery);
var ImageStretcher = {
    getDimensions: function(a) {
        var b = a.imageRatio || a.imageWidth / a.imageHeight,
            c = a.maskWidth,
            d = c / b;
        return d < a.maskHeight && (d = a.maskHeight, c = d * b), {
            width: c,
            height: d,
            top: (a.maskHeight - d) / 2,
            left: (a.maskWidth - c) / 2
        }
    },
    getRatio: function(a) {
        if (a.prop("naturalWidth")) return a.prop("naturalWidth") / a.prop("naturalHeight");
        var b = new Image;
        return b.src = a.prop("src"), b.width / b.height
    },
    imageLoaded: function(a, b) {
        var c = this,
            d = function() {
                b.call(c)
            };
        a.prop("complete") ? d() : a.one("load", d)
    },
    resizeHandler: function() {
        var a = this;
        jQuery.each(this.imgList, function(b, c) {
            c.image.prop("complete") && a.resizeImage(c.image, c.container)
        })
    },
    resizeImage: function(a, b) {
        this.imageLoaded(a, function() {
            var c = this.getDimensions({
                imageRatio: this.getRatio(a),
                maskWidth: b.width(),
                maskHeight: b.height()
            });
            a.css({
                width: c.width,
                height: c.height,
                marginTop: c.top,
                marginLeft: c.left
            })
        })
    },
    add: function(a) {
        var b = jQuery(a.container ? a.container : window),
            c = "string" == typeof a.image ? b.find(a.image) : jQuery(a.image);
        this.resizeImage(c, b), this.win || (this.resizeHandler = jQuery.proxy(this.resizeHandler, this), this.imgList = [], this.win = jQuery(window), this.win.on("resize orientationchange", this.resizeHandler)), this.imgList.push({
            container: b,
            image: c
        })
    }
};
! function(a) {
    function b(b) {
        this.options = a.extend({
            slides: "ul.slideset > li",
            activeClass: "active",
            disabledClass: "disabled",
            btnPrev: "a.btn-prev",
            btnNext: "a.btn-next",
            generatePagination: !1,
            pagerList: "<ul>",
            pagerListItem: '<li><a href="#"></a></li>',
            pagerListItemText: "a",
            pagerLinks: ".pagination li",
            currentNumber: "span.current-num",
            totalNumber: "span.total-num",
            btnPlay: ".btn-play",
            btnPause: ".btn-pause",
            btnPlayPause: ".btn-play-pause",
            galleryReadyClass: "gallery-js-ready",
            autorotationActiveClass: "autorotation-active",
            autorotationDisabledClass: "autorotation-disabled",
            autorotationStopAfterClick: !1,
            circularRotation: !0,
            switchSimultaneously: !0,
            disableWhileAnimating: !1,
            disableFadeIE: !1,
            autoRotation: !1,
            pauseOnHover: !1,
            autoHeight: !1,
            useSwipe: !1,
            swipeThreshold: 15,
            switchTime: 4e3,
            animSpeed: 600,
            event: "click"
        }, b), this.init()
    }
    b.prototype = {
        init: function() {
            this.options.holder && (this.findElements(), this.attachEvents(), this.refreshState(!0), this.autoRotate(), this.makeCallback("onInit", this))
        },
        findElements: function() {
            if (this.gallery = a(this.options.holder).addClass(this.options.galleryReadyClass), this.slides = this.gallery.find(this.options.slides), this.slidesHolder = this.slides.eq(0).parent(), this.stepsCount = this.slides.length, this.btnPrev = this.gallery.find(this.options.btnPrev), this.btnNext = this.gallery.find(this.options.btnNext), this.currentIndex = 0, this.options.disableFadeIE && !a.support.opacity && (this.options.animSpeed = 0), "string" == typeof this.options.generatePagination) {
                this.pagerHolder = this.gallery.find(this.options.generatePagination).empty(), this.pagerList = a(this.options.pagerList).appendTo(this.pagerHolder);
                for (var b = 0; b < this.stepsCount; b++) a(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(b + 1);
                this.pagerLinks = this.pagerList.children()
            } else this.pagerLinks = this.gallery.find(this.options.pagerLinks);
            var c = this.slides.filter("." + this.options.activeClass);
            c.length && (this.currentIndex = this.slides.index(c)), this.prevIndex = this.currentIndex, this.btnPlay = this.gallery.find(this.options.btnPlay), this.btnPause = this.gallery.find(this.options.btnPause), this.btnPlayPause = this.gallery.find(this.options.btnPlayPause), this.curNum = this.gallery.find(this.options.currentNumber), this.allNum = this.gallery.find(this.options.totalNumber), this.slides.css({
                display: "block",
                opacity: 0
            }).eq(this.currentIndex).css({
                opacity: ""
            })
        },
        updateAttributes: function() {
            "true" === this.holder.attr("data-rotate") && (this.options.autoRotation = !0), "vertical" === this.holder.attr("data-direction") && (this.options.vertical = !0), "true" === this.holder.attr("data-pause-hover") && (this.options.pauseOnHover = !0), this.holder.attr("data-speed") && (this.options.animSpeed = parseFloat(this.holder.attr("data-speed")))
        },
        attachEvents: function() {
            var b = this;
            this.resizeHandler = function() {
                b.onWindowResize()
            }, a(window).bind("load resize orientationchange", this.resizeHandler), this.btnPrev.length && (this.btnPrevHandler = function(a) {
                a.preventDefault(), b.prevSlide(), b.options.autorotationStopAfterClick && b.stopRotation()
            }, this.btnPrev.bind(this.options.event, this.btnPrevHandler)), this.btnNext.length && (this.btnNextHandler = function(a) {
                a.preventDefault(), b.nextSlide(), b.options.autorotationStopAfterClick && b.stopRotation()
            }, this.btnNext.bind(this.options.event, this.btnNextHandler)), this.pagerLinks.length && (this.pagerLinksHandler = function(a) {
                a.preventDefault(), b.numSlide(b.pagerLinks.index(a.currentTarget)), b.options.autorotationStopAfterClick && b.stopRotation()
            }, this.pagerLinks.bind(b.options.event, this.pagerLinksHandler)), this.btnPlay.length && (this.btnPlayHandler = function(a) {
                a.preventDefault(), b.startRotation()
            }, this.btnPlay.bind(this.options.event, this.btnPlayHandler)), this.btnPause.length && (this.btnPauseHandler = function(a) {
                a.preventDefault(), b.stopRotation()
            }, this.btnPause.bind(this.options.event, this.btnPauseHandler)), this.btnPlayPause.length && (this.btnPlayPauseHandler = function(a) {
                a.preventDefault(), b.gallery.hasClass(b.options.autorotationActiveClass) ? b.stopRotation() : b.startRotation()
            }, this.btnPlayPause.bind(this.options.event, this.btnPlayPauseHandler)), this.options.useSwipe && window.Hammer && c && (this.swipeHandler = new Hammer.Manager(this.gallery[0]), this.swipeHandler.add(new Hammer.Swipe({
                direction: Hammer.DIRECTION_HORIZONTAL,
                threshold: b.options.swipeThreshold
            })), this.swipeHandler.on("swipeleft", function() {
                b.nextSlide()
            }).on("swiperight", function() {
                b.prevSlide()
            })), this.options.pauseOnHover && (this.hoverHandler = function() {
                b.options.autoRotation && (b.galleryHover = !0, b.pauseRotation())
            }, this.leaveHandler = function() {
                b.options.autoRotation && (b.galleryHover = !1, b.resumeRotation())
            }, this.gallery.bind({
                mouseenter: this.hoverHandler,
                mouseleave: this.leaveHandler
            }))
        },
        onWindowResize: function() {
            this.options.autoHeight && this.slidesHolder.css({
                height: this.slides.eq(this.currentIndex).outerHeight(!0)
            })
        },
        prevSlide: function() {
            this.options.disableWhileAnimating && this.galleryAnimating || (this.prevIndex = this.currentIndex, this.currentIndex > 0 ? (this.currentIndex--, this.switchSlide()) : this.options.circularRotation && (this.currentIndex = this.stepsCount - 1, this.switchSlide()))
        },
        nextSlide: function(a) {
            this.options.disableWhileAnimating && this.galleryAnimating || (this.prevIndex = this.currentIndex, this.currentIndex < this.stepsCount - 1 ? (this.currentIndex++, this.switchSlide()) : (this.options.circularRotation || a === !0) && (this.currentIndex = 0, this.switchSlide()))
        },
        numSlide: function(a) {
            this.currentIndex != a && (this.prevIndex = this.currentIndex, this.currentIndex = a, this.switchSlide())
        },
        switchSlide: function() {
            var a = this;
            this.slides.eq(this.prevIndex), this.slides.eq(this.currentIndex);
            a.hideContent(), this.animating = !0, this.slides.length > 1 && (this.galleryAnimating = !0, this.options.animSpeed ? this.slides.eq(this.prevIndex).stop().animate({
                opacity: 0
            }, {
                duration: this.options.animSpeed
            }) : this.slides.eq(this.prevIndex).css({
                opacity: 0
            }), this.switchNext = function() {
                a.options.animSpeed ? a.slides.eq(a.currentIndex).stop().animate({
                    opacity: 1
                }, {
                    duration: a.options.animSpeed
                }) : a.slides.eq(a.currentIndex).css({
                    opacity: ""
                }), clearTimeout(this.nextTimer), this.nextTimer = setTimeout(function() {
                    a.showContent(), a.slides.eq(a.currentIndex).css({
                        opacity: ""
                    }), a.galleryAnimating = !1, a.autoRotate(), a.makeCallback("onChange", a)
                }, a.options.animSpeed)
            }, this.options.switchSimultaneously ? a.switchNext() : (clearTimeout(this.switchTimer), this.switchTimer = setTimeout(function() {
                a.switchNext()
            }, this.options.animSpeed)), this.refreshState(), this.makeCallback("onBeforeChange", this))
        },
        hideContent: function() {
            a(this.slides.eq(this.currentIndex)).find(".heading").css({
                position: "relative"
            }).animate({
                bottom: -50,
                opacity: 0
            }, 500), a(this.slides.eq(this.currentIndex)).find(".btn-box").css({
                position: "relative"
            }).animate({
                bottom: -50,
                opacity: 0
            }, 500), a(this.slides.eq(this.currentIndex)).find(".txt").css({
                position: "relative"
            }).animate({
                bottom: -50,
                opacity: 0
            }, 500)
        },
        showContent: function() {
            a(this.slides.eq(this.currentIndex)).find(".heading").animate({
                bottom: 0,
                opacity: 1
            }, 700), a(this.slides.eq(this.currentIndex)).find(".btn-box").animate({
                bottom: 0,
                opacity: 1
            }, 700), a(this.slides.eq(this.currentIndex)).find(".txt").animate({
                bottom: 0,
                opacity: 1
            }, 700)
        },
        refreshState: function(a) {
            this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass), this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass), this.curNum.html(this.currentIndex + 1), this.allNum.html(this.stepsCount), this.options.autoHeight && (a ? this.slidesHolder.css({
                height: this.slides.eq(this.currentIndex).outerHeight(!0)
            }) : this.slidesHolder.stop().animate({
                height: this.slides.eq(this.currentIndex).outerHeight(!0)
            }, {
                duration: this.options.animSpeed
            })), this.options.circularRotation || (this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass), 0 === this.currentIndex && this.btnPrev.addClass(this.options.disabledClass), this.currentIndex === this.stepsCount - 1 && this.btnNext.addClass(this.options.disabledClass)), this.gallery.toggleClass("not-enough-slides", 1 === this.stepsCount)
        },
        startRotation: function() {
            this.options.autoRotation = !0, this.galleryHover = !1, this.autoRotationStopped = !1, this.resumeRotation()
        },
        stopRotation: function() {
            this.galleryHover = !0, this.autoRotationStopped = !0, this.pauseRotation()
        },
        pauseRotation: function() {
            this.gallery.addClass(this.options.autorotationDisabledClass), this.gallery.removeClass(this.options.autorotationActiveClass), clearTimeout(this.timer)
        },
        resumeRotation: function() {
            this.autoRotationStopped || (this.gallery.addClass(this.options.autorotationActiveClass), this.gallery.removeClass(this.options.autorotationDisabledClass), this.autoRotate())
        },
        autoRotate: function() {
            var a = this;
            clearTimeout(this.timer), !this.options.autoRotation || this.galleryHover || this.autoRotationStopped ? this.pauseRotation() : (this.gallery.addClass(this.options.autorotationActiveClass), this.timer = setTimeout(function() {
                a.nextSlide(!0)
            }, this.options.switchTime))
        },
        makeCallback: function(a) {
            if ("function" == typeof this.options[a]) {
                var b = Array.prototype.slice.call(arguments);
                b.shift(), this.options[a].apply(this, b)
            }
        }
    };
    var c = /Windows Phone/.test(navigator.userAgent) || "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
    a.fn.fadeGallery = function(c) {
        return this.each(function() {
            a(this).data("FadeGallery", new b(a.extend(c, {
                holder: this
            })))
        })
    }
}(jQuery),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.jcf = b(jQuery)
}(this, function(a) {
    "use strict";
    var b = "1.1.3",
        c = [],
        d = {
            optionsKey: "jcf",
            dataKey: "jcf-instance",
            rtlClass: "jcf-rtl",
            focusClass: "jcf-focus",
            pressedClass: "jcf-pressed",
            disabledClass: "jcf-disabled",
            hiddenClass: "jcf-hidden",
            resetAppearanceClass: "jcf-reset-appearance",
            unselectableClass: "jcf-unselectable"
        },
        e = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        f = /Windows Phone/.test(navigator.userAgent);
    d.isMobileDevice = !(!e && !f);
    var g = function() {
        var b = a("<style>").appendTo("head"),
            c = b.prop("sheet") || b.prop("styleSheet"),
            e = function(a, b, d) {
                c.insertRule ? c.insertRule(a + "{" + b + "}", d) : c.addRule(a, b, d)
            };
        e("." + d.hiddenClass, "position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none"), e("." + d.rtlClass + " ." + d.hiddenClass, "right:-9999px !important; left: auto !important"), e("." + d.unselectableClass, "-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"), e("." + d.resetAppearanceClass, "background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);");
        var f = a("html"),
            g = a("body");
        "rtl" !== f.css("direction") && "rtl" !== g.css("direction") || f.addClass(d.rtlClass), f.on("reset", function() {
            setTimeout(function() {
                i.refreshAll()
            }, 0)
        }), d.styleSheetCreated = !0
    };
    ! function() {
        var d, b = navigator.pointerEnabled || navigator.msPointerEnabled,
            c = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            e = {},
            f = "jcf-";
        d = b ? {
            pointerover: navigator.pointerEnabled ? "pointerover" : "MSPointerOver",
            pointerdown: navigator.pointerEnabled ? "pointerdown" : "MSPointerDown",
            pointermove: navigator.pointerEnabled ? "pointermove" : "MSPointerMove",
            pointerup: navigator.pointerEnabled ? "pointerup" : "MSPointerUp"
        } : {
            pointerover: "mouseover",
            pointerdown: "mousedown" + (c ? " touchstart" : ""),
            pointermove: "mousemove" + (c ? " touchmove" : ""),
            pointerup: "mouseup" + (c ? " touchend" : "")
        }, a.each(d, function(b, c) {
            a.each(c.split(" "), function(a, c) {
                e[c] = b
            })
        }), a.each(d, function(b, c) {
            c = c.split(" "), a.event.special[f + b] = {
                setup: function() {
                    var b = this;
                    a.each(c, function(a, c) {
                        b.addEventListener ? b.addEventListener(c, i, !1) : b["on" + c] = i
                    })
                },
                teardown: function() {
                    var b = this;
                    a.each(c, function(a, c) {
                        b.addEventListener ? b.removeEventListener(c, i, !1) : b["on" + c] = null
                    })
                }
            }
        });
        var g = null,
            h = function(a) {
                var b = Math.abs(a.pageX - g.x),
                    c = Math.abs(a.pageY - g.y),
                    d = 25;
                if (b <= d && c <= d) return !0
            },
            i = function(b) {
                var c = b || window.event,
                    d = null,
                    i = e[c.type];
                if (b = a.event.fix(c), b.type = f + i, c.pointerType) switch (c.pointerType) {
                    case 2:
                        b.pointerType = "touch";
                        break;
                    case 3:
                        b.pointerType = "pen";
                        break;
                    case 4:
                        b.pointerType = "mouse";
                        break;
                    default:
                        b.pointerType = c.pointerType
                } else b.pointerType = c.type.substr(0, 5);
                return b.pageX || b.pageY || (d = c.changedTouches ? c.changedTouches[0] : c, b.pageX = d.pageX, b.pageY = d.pageY), "touchend" === c.type && (g = {
                    x: b.pageX,
                    y: b.pageY
                }), "mouse" === b.pointerType && g && h(b) ? void 0 : (a.event.dispatch || a.event.handle).call(this, b)
            }
    }(),
    function() {
        var b = ("onwheel" in document || document.documentMode >= 9 ? "wheel" : "mousewheel DOMMouseScroll").split(" "),
            c = "jcf-mousewheel";
        a.event.special[c] = {
            setup: function() {
                var c = this;
                a.each(b, function(a, b) {
                    c.addEventListener ? c.addEventListener(b, d, !1) : c["on" + b] = d
                })
            },
            teardown: function() {
                var c = this;
                a.each(b, function(a, b) {
                    c.addEventListener ? c.removeEventListener(b, d, !1) : c["on" + b] = null
                })
            }
        };
        var d = function(b) {
            var d = b || window.event;
            if (b = a.event.fix(d), b.type = c, "detail" in d && (b.deltaY = -d.detail), "wheelDelta" in d && (b.deltaY = -d.wheelDelta), "wheelDeltaY" in d && (b.deltaY = -d.wheelDeltaY), "wheelDeltaX" in d && (b.deltaX = -d.wheelDeltaX), "deltaY" in d && (b.deltaY = d.deltaY), "deltaX" in d && (b.deltaX = d.deltaX), b.delta = b.deltaY || b.deltaX, 1 === d.deltaMode) {
                var e = 16;
                b.delta *= e, b.deltaY *= e, b.deltaX *= e
            }
            return (a.event.dispatch || a.event.handle).call(this, b)
        }
    }();
    var h = {
            fireNativeEvent: function(b, c) {
                a(b).each(function() {
                    var b, a = this;
                    a.dispatchEvent ? (b = document.createEvent("HTMLEvents"), b.initEvent(c, !0, !0), a.dispatchEvent(b)) : document.createEventObject && (b = document.createEventObject(), b.target = a, a.fireEvent("on" + c, b))
                })
            },
            bindHandlers: function() {
                var b = this;
                a.each(b, function(c, d) {
                    0 === c.indexOf("on") && a.isFunction(d) && (b[c] = function() {
                        return d.apply(b, arguments)
                    })
                })
            }
        },
        i = {
            version: b,
            modules: {},
            getOptions: function() {
                return a.extend({}, d)
            },
            setOptions: function(b, c) {
                arguments.length > 1 ? this.modules[b] && a.extend(this.modules[b].prototype.options, c) : a.extend(d, b)
            },
            addModule: function(b) {
                var e = function(b) {
                        b.element.data(d.dataKey) || b.element.data(d.dataKey, this), c.push(this), this.options = a.extend({}, d, this.options, f(b.element), b), this.bindHandlers(), this.init.apply(this, arguments)
                    },
                    f = function(b) {
                        var c = b.data(d.optionsKey),
                            e = b.attr(d.optionsKey);
                        if (c) return c;
                        if (e) try {
                            return a.parseJSON(e)
                        } catch (a) {}
                    };
                e.prototype = b, a.extend(b, h), b.plugins && a.each(b.plugins, function(b, c) {
                    a.extend(c.prototype, h)
                });
                var g = e.prototype.destroy;
                e.prototype.destroy = function() {
                    this.options.element.removeData(this.options.dataKey);
                    for (var a = c.length - 1; a >= 0; a--)
                        if (c[a] === this) {
                            c.splice(a, 1);
                            break
                        }
                    g && g.apply(this, arguments)
                }, this.modules[b.name] = e
            },
            getInstance: function(b) {
                return a(b).data(d.dataKey)
            },
            replace: function(b, c, e) {
                var h, f = this;
                return d.styleSheetCreated || g(), a(b).each(function() {
                    var b, g = a(this);
                    h = g.data(d.dataKey), h ? h.refresh() : (c || a.each(f.modules, function(a, b) {
                        if (b.prototype.matchElement.call(b.prototype, g)) return c = a, !1
                    }), c && (b = a.extend({
                        element: g
                    }, e), h = new f.modules[c](b)))
                }), h
            },
            refresh: function(b) {
                a(b).each(function() {
                    var b = a(this).data(d.dataKey);
                    b && b.refresh()
                })
            },
            destroy: function(b) {
                a(b).each(function() {
                    var b = a(this).data(d.dataKey);
                    b && b.destroy()
                })
            },
            replaceAll: function(b) {
                var c = this;
                a.each(this.modules, function(d, e) {
                    a(e.prototype.selector, b).each(function() {
                        this.className.indexOf("jcf-ignore") < 0 && c.replace(this, d)
                    })
                })
            },
            refreshAll: function(b) {
                if (b) a.each(this.modules, function(c, e) {
                    a(e.prototype.selector, b).each(function() {
                        var b = a(this).data(d.dataKey);
                        b && b.refresh()
                    })
                });
                else
                    for (var e = c.length - 1; e >= 0; e--) c[e].refresh()
            },
            destroyAll: function(b) {
                if (b) a.each(this.modules, function(c, e) {
                    a(e.prototype.selector, b).each(function(b, c) {
                        var e = a(c).data(d.dataKey);
                        e && e.destroy()
                    })
                });
                else
                    for (; c.length;) c[0].destroy()
            }
        };
    return window.jcf = i, i
}),
function(a, b) {
    "use strict";

    function c(b) {
        this.options = a.extend({
            holder: null,
            vertical: !0,
            inactiveClass: "jcf-inactive",
            verticalClass: "jcf-scrollbar-vertical",
            horizontalClass: "jcf-scrollbar-horizontal",
            scrollbarStructure: '<div class="jcf-scrollbar"><div class="jcf-scrollbar-dec"></div><div class="jcf-scrollbar-slider"><div class="jcf-scrollbar-handle"></div></div><div class="jcf-scrollbar-inc"></div></div>',
            btnDecSelector: ".jcf-scrollbar-dec",
            btnIncSelector: ".jcf-scrollbar-inc",
            sliderSelector: ".jcf-scrollbar-slider",
            handleSelector: ".jcf-scrollbar-handle",
            scrollInterval: 300,
            scrollStep: 400
        }, b), this.init()
    }
    jcf.addModule({
        name: "Scrollable",
        selector: ".jcf-scrollable",
        plugins: {
            ScrollBar: c
        },
        options: {
            mouseWheelStep: 150,
            handleResize: !0,
            alwaysShowScrollbars: !1,
            alwaysPreventMouseWheel: !1,
            scrollAreaStructure: '<div class="jcf-scrollable-wrapper"></div>'
        },
        matchElement: function(a) {
            return a.is(".jcf-scrollable")
        },
        init: function() {
            this.initStructure(), this.attachEvents(), this.rebuildScrollbars()
        },
        initStructure: function() {
            this.doc = a(document), this.win = a(b), this.realElement = a(this.options.element), this.scrollWrapper = a(this.options.scrollAreaStructure).insertAfter(this.realElement), this.scrollWrapper.css("position", "relative"), this.realElement.css("overflow", "hidden"), this.vBarEdge = 0
        },
        attachEvents: function() {
            var a = this;
            this.vBar = new c({
                holder: this.scrollWrapper,
                vertical: !0,
                onScroll: function(b) {
                    a.realElement.scrollTop(b)
                }
            }), this.hBar = new c({
                holder: this.scrollWrapper,
                vertical: !1,
                onScroll: function(b) {
                    a.realElement.scrollLeft(b)
                }
            }), this.realElement.on("scroll", this.onScroll), this.options.handleResize && this.win.on("resize orientationchange load", this.onResize), this.realElement.on("jcf-mousewheel", this.onMouseWheel), this.realElement.on("jcf-pointerdown", this.onTouchBody)
        },
        onScroll: function() {
            this.redrawScrollbars()
        },
        onResize: function() {
            a(document.activeElement).is(":input") || this.rebuildScrollbars()
        },
        onTouchBody: function(a) {
            "touch" === a.pointerType && (this.touchData = {
                scrollTop: this.realElement.scrollTop(),
                scrollLeft: this.realElement.scrollLeft(),
                left: a.pageX,
                top: a.pageY
            }, this.doc.on({
                "jcf-pointermove": this.onMoveBody,
                "jcf-pointerup": this.onReleaseBody
            }))
        },
        onMoveBody: function(a) {
            var b, c, d = this.verticalScrollActive,
                e = this.horizontalScrollActive;
            "touch" === a.pointerType && (b = this.touchData.scrollTop - a.pageY + this.touchData.top, c = this.touchData.scrollLeft - a.pageX + this.touchData.left, this.verticalScrollActive && (b < 0 || b > this.vBar.maxValue) && (d = !1), this.horizontalScrollActive && (c < 0 || c > this.hBar.maxValue) && (e = !1), this.realElement.scrollTop(b), this.realElement.scrollLeft(c), d || e ? a.preventDefault() : this.onReleaseBody(a))
        },
        onReleaseBody: function(a) {
            "touch" === a.pointerType && (delete this.touchData, this.doc.off({
                "jcf-pointermove": this.onMoveBody,
                "jcf-pointerup": this.onReleaseBody
            }))
        },
        onMouseWheel: function(a) {
            var f, g, h, b = this.realElement.scrollTop(),
                c = this.realElement.scrollLeft(),
                d = this.realElement.prop("scrollHeight") - this.embeddedDimensions.innerHeight,
                e = this.realElement.prop("scrollWidth") - this.embeddedDimensions.innerWidth;
            (this.options.alwaysPreventMouseWheel || (this.verticalScrollActive && a.deltaY && (b <= 0 && a.deltaY < 0 || b >= d && a.deltaY > 0 || (h = !0)), this.horizontalScrollActive && a.deltaX && (c <= 0 && a.deltaX < 0 || c >= e && a.deltaX > 0 || (h = !0)), this.verticalScrollActive || this.horizontalScrollActive)) && (h || this.options.alwaysPreventMouseWheel) && (a.preventDefault(), f = a.deltaX / 100 * this.options.mouseWheelStep, g = a.deltaY / 100 * this.options.mouseWheelStep, this.realElement.scrollTop(b + g), this.realElement.scrollLeft(c + f))
        },
        setScrollBarEdge: function(a) {
            this.vBarEdge = a || 0, this.redrawScrollbars()
        },
        saveElementDimensions: function() {
            return this.savedDimensions = {
                top: this.realElement.width(),
                left: this.realElement.height()
            }, this
        },
        restoreElementDimensions: function() {
            return this.savedDimensions && this.realElement.css({
                width: this.savedDimensions.width,
                height: this.savedDimensions.height
            }), this
        },
        saveScrollOffsets: function() {
            return this.savedOffsets = {
                top: this.realElement.scrollTop(),
                left: this.realElement.scrollLeft()
            }, this
        },
        restoreScrollOffsets: function() {
            return this.savedOffsets && (this.realElement.scrollTop(this.savedOffsets.top), this.realElement.scrollLeft(this.savedOffsets.left)), this
        },
        getContainerDimensions: function() {
            var a, b, c, d;
            return this.isModifiedStyles ? a = {
                width: this.realElement.innerWidth() + this.vBar.getThickness(),
                height: this.realElement.innerHeight() + this.hBar.getThickness()
            } : (this.saveElementDimensions().saveScrollOffsets(),
                this.realElement.insertAfter(this.scrollWrapper), this.scrollWrapper.detach(), b = this.realElement.prop("style"), d = parseFloat(b.width), c = parseFloat(b.height), this.embeddedDimensions && d && c && (this.isModifiedStyles |= d !== this.embeddedDimensions.width || c !== this.embeddedDimensions.height, this.realElement.css({
                    overflow: "",
                    width: "",
                    height: ""
                })), a = {
                    width: this.realElement.outerWidth(),
                    height: this.realElement.outerHeight()
                }, this.scrollWrapper.insertAfter(this.realElement), this.realElement.css("overflow", "hidden").prependTo(this.scrollWrapper), this.restoreElementDimensions().restoreScrollOffsets()), a
        },
        getEmbeddedDimensions: function(b) {
            var g, c = this.vBar.getThickness(),
                d = this.hBar.getThickness(),
                e = this.realElement.outerWidth() - this.realElement.width(),
                f = this.realElement.outerHeight() - this.realElement.height();
            return this.options.alwaysShowScrollbars ? (this.verticalScrollActive = !0, this.horizontalScrollActive = !0, g = {
                innerWidth: b.width - c,
                innerHeight: b.height - d
            }) : (this.saveElementDimensions(), this.verticalScrollActive = !1, this.horizontalScrollActive = !1, this.realElement.css({
                width: b.width - e,
                height: b.height - f
            }), this.horizontalScrollActive = this.realElement.prop("scrollWidth") > this.containerDimensions.width, this.verticalScrollActive = this.realElement.prop("scrollHeight") > this.containerDimensions.height, this.restoreElementDimensions(), g = {
                innerWidth: b.width - (this.verticalScrollActive ? c : 0),
                innerHeight: b.height - (this.horizontalScrollActive ? d : 0)
            }), a.extend(g, {
                width: g.innerWidth - e,
                height: g.innerHeight - f
            }), g
        },
        rebuildScrollbars: function() {
            this.containerDimensions = this.getContainerDimensions(), this.embeddedDimensions = this.getEmbeddedDimensions(this.containerDimensions), this.scrollWrapper.css({
                width: this.containerDimensions.width,
                height: this.containerDimensions.height
            }), this.realElement.css({
                overflow: "hidden",
                width: this.embeddedDimensions.width,
                height: this.embeddedDimensions.height
            }), this.redrawScrollbars()
        },
        redrawScrollbars: function() {
            var a, b;
            this.verticalScrollActive ? (a = this.vBarEdge ? this.containerDimensions.height - this.vBarEdge : this.embeddedDimensions.innerHeight, b = Math.max(this.realElement.prop("offsetHeight"), this.realElement.prop("scrollHeight")) - this.vBarEdge, this.vBar.show().setMaxValue(b - a).setRatio(a / b).setSize(a), this.vBar.setValue(this.realElement.scrollTop())) : this.vBar.hide(), this.horizontalScrollActive ? (a = this.embeddedDimensions.innerWidth, b = this.realElement.prop("scrollWidth"), b === a && (this.horizontalScrollActive = !1), this.hBar.show().setMaxValue(b - a).setRatio(a / b).setSize(a), this.hBar.setValue(this.realElement.scrollLeft())) : this.hBar.hide();
            var c = "";
            this.verticalScrollActive && this.horizontalScrollActive ? c = "none" : this.verticalScrollActive ? c = "pan-x" : this.horizontalScrollActive && (c = "pan-y"), this.realElement.css("touchAction", c)
        },
        refresh: function() {
            this.rebuildScrollbars()
        },
        destroy: function() {
            this.win.off("resize orientationchange load", this.onResize), this.realElement.off({
                "jcf-mousewheel": this.onMouseWheel,
                "jcf-pointerdown": this.onTouchBody
            }), this.doc.off({
                "jcf-pointermove": this.onMoveBody,
                "jcf-pointerup": this.onReleaseBody
            }), this.saveScrollOffsets(), this.vBar.destroy(), this.hBar.destroy(), this.realElement.insertAfter(this.scrollWrapper).css({
                touchAction: "",
                overflow: "",
                width: "",
                height: ""
            }), this.scrollWrapper.remove(), this.restoreScrollOffsets()
        }
    }), a.extend(c.prototype, {
        init: function() {
            this.initStructure(), this.attachEvents()
        },
        initStructure: function() {
            this.doc = a(document), this.isVertical = !!this.options.vertical, this.sizeProperty = this.isVertical ? "height" : "width", this.fullSizeProperty = this.isVertical ? "outerHeight" : "outerWidth", this.invertedSizeProperty = this.isVertical ? "width" : "height", this.thicknessMeasureMethod = "outer" + this.invertedSizeProperty.charAt(0).toUpperCase() + this.invertedSizeProperty.substr(1), this.offsetProperty = this.isVertical ? "top" : "left", this.offsetEventProperty = this.isVertical ? "pageY" : "pageX", this.value = this.options.value || 0, this.maxValue = this.options.maxValue || 0, this.currentSliderSize = 0, this.handleSize = 0, this.holder = a(this.options.holder), this.scrollbar = a(this.options.scrollbarStructure).appendTo(this.holder), this.btnDec = this.scrollbar.find(this.options.btnDecSelector), this.btnInc = this.scrollbar.find(this.options.btnIncSelector), this.slider = this.scrollbar.find(this.options.sliderSelector), this.handle = this.slider.find(this.options.handleSelector), this.scrollbar.addClass(this.isVertical ? this.options.verticalClass : this.options.horizontalClass).css({
                touchAction: this.isVertical ? "pan-x" : "pan-y",
                position: "absolute"
            }), this.slider.css({
                position: "relative"
            }), this.handle.css({
                touchAction: "none",
                position: "absolute"
            })
        },
        attachEvents: function() {
            this.bindHandlers(), this.handle.on("jcf-pointerdown", this.onHandlePress), this.slider.add(this.btnDec).add(this.btnInc).on("jcf-pointerdown", this.onButtonPress)
        },
        onHandlePress: function(a) {
            "mouse" === a.pointerType && a.button > 1 || (a.preventDefault(), this.handleDragActive = !0, this.sliderOffset = this.slider.offset()[this.offsetProperty], this.innerHandleOffset = a[this.offsetEventProperty] - this.handle.offset()[this.offsetProperty], this.doc.on("jcf-pointermove", this.onHandleDrag), this.doc.on("jcf-pointerup", this.onHandleRelease))
        },
        onHandleDrag: function(a) {
            a.preventDefault(), this.calcOffset = a[this.offsetEventProperty] - this.sliderOffset - this.innerHandleOffset, this.setValue(this.calcOffset / (this.currentSliderSize - this.handleSize) * this.maxValue), this.triggerScrollEvent(this.value)
        },
        onHandleRelease: function() {
            this.handleDragActive = !1, this.doc.off("jcf-pointermove", this.onHandleDrag), this.doc.off("jcf-pointerup", this.onHandleRelease)
        },
        onButtonPress: function(a) {
            var b, c;
            "mouse" === a.pointerType && a.button > 1 || (a.preventDefault(), this.handleDragActive || (this.slider.is(a.currentTarget) ? (b = this.handle.offset()[this.offsetProperty] > a[this.offsetEventProperty] ? -1 : 1, c = a[this.offsetEventProperty] - this.slider.offset()[this.offsetProperty], this.startPageScrolling(b, c)) : (b = this.btnDec.is(a.currentTarget) ? -1 : 1, this.startSmoothScrolling(b)), this.doc.on("jcf-pointerup", this.onButtonRelease)))
        },
        onButtonRelease: function() {
            this.stopPageScrolling(), this.stopSmoothScrolling(), this.doc.off("jcf-pointerup", this.onButtonRelease)
        },
        startPageScrolling: function(a, b) {
            var c = this,
                d = a * c.currentSize,
                e = function() {
                    var d = c.value / c.maxValue * (c.currentSliderSize - c.handleSize);
                    return a > 0 ? d + c.handleSize >= b : d <= b
                },
                f = function() {
                    c.value += d, c.setValue(c.value), c.triggerScrollEvent(c.value), e() && clearInterval(c.pageScrollTimer)
                };
            this.pageScrollTimer = setInterval(f, this.options.scrollInterval), f()
        },
        stopPageScrolling: function() {
            clearInterval(this.pageScrollTimer)
        },
        startSmoothScrolling: function(a) {
            var d, c = this;
            this.stopSmoothScrolling();
            var e = b.requestAnimationFrame || function(a) {
                    setTimeout(a, 16)
                },
                f = function() {
                    return Date.now ? Date.now() : (new Date).getTime()
                },
                g = function() {
                    return a > 0 ? c.value >= c.maxValue : c.value <= 0
                },
                h = function() {
                    var b = (f() - d) / 1e3 * c.options.scrollStep;
                    c.smoothScrollActive && (c.value += b * a, c.setValue(c.value), c.triggerScrollEvent(c.value), g() || (d = f(), e(h)))
                };
            c.smoothScrollActive = !0, d = f(), e(h)
        },
        stopSmoothScrolling: function() {
            this.smoothScrollActive = !1
        },
        triggerScrollEvent: function(a) {
            this.options.onScroll && this.options.onScroll(a)
        },
        getThickness: function() {
            return this.scrollbar[this.thicknessMeasureMethod]()
        },
        setSize: function(a) {
            var b = this.btnDec[this.fullSizeProperty](),
                c = this.btnInc[this.fullSizeProperty]();
            return this.currentSize = a, this.currentSliderSize = a - b - c, this.scrollbar.css(this.sizeProperty, a), this.slider.css(this.sizeProperty, this.currentSliderSize), this.currentSliderSize = this.slider[this.sizeProperty](), this.handleSize = Math.round(this.currentSliderSize * this.ratio), this.handle.css(this.sizeProperty, this.handleSize), this.handleSize = this.handle[this.fullSizeProperty](), this
        },
        setRatio: function(a) {
            return this.ratio = a, this
        },
        setMaxValue: function(a) {
            return this.maxValue = a, this.setValue(Math.min(this.value, this.maxValue)), this
        },
        setValue: function(a) {
            this.value = a, this.value < 0 ? this.value = 0 : this.value > this.maxValue && (this.value = this.maxValue), this.refresh()
        },
        setPosition: function(a) {
            return this.scrollbar.css(a), this
        },
        hide: function() {
            return this.scrollbar.detach(), this
        },
        show: function() {
            return this.scrollbar.appendTo(this.holder), this
        },
        refresh: function() {
            0 === this.value || 0 === this.maxValue ? this.calcOffset = 0 : this.calcOffset = this.value / this.maxValue * (this.currentSliderSize - this.handleSize), this.handle.css(this.offsetProperty, this.calcOffset), this.btnDec.toggleClass(this.options.inactiveClass, 0 === this.value), this.btnInc.toggleClass(this.options.inactiveClass, this.value === this.maxValue), this.scrollbar.toggleClass(this.options.inactiveClass, 0 === this.maxValue)
        },
        destroy: function() {
            this.btnDec.add(this.btnInc).off("jcf-pointerdown", this.onButtonPress), this.handle.off("jcf-pointerdown", this.onHandlePress), this.doc.off("jcf-pointermove", this.onHandleDrag), this.doc.off("jcf-pointerup", this.onHandleRelease), this.doc.off("jcf-pointerup", this.onButtonRelease), this.stopSmoothScrolling(), this.stopPageScrolling(), this.scrollbar.remove()
        }
    })
}(jQuery, this),
function(a) {
    "use strict";
    jcf.addModule({
        name: "Number",
        selector: 'input[type="number"]',
        options: {
            realElementClass: "jcf-real-element",
            fakeStructure: '<span class="jcf-number"><span class="jcf-btn-inc"></span><span class="jcf-btn-dec"></span></span>',
            btnIncSelector: ".jcf-btn-inc",
            btnDecSelector: ".jcf-btn-dec",
            pressInterval: 150
        },
        matchElement: function(a) {
            return a.is(this.selector)
        },
        init: function() {
            this.initStructure(), this.attachEvents(), this.refresh()
        },
        initStructure: function() {
            this.page = a("html"), this.realElement = a(this.options.element).addClass(this.options.realElementClass), this.fakeElement = a(this.options.fakeStructure).insertBefore(this.realElement).prepend(this.realElement), this.btnDec = this.fakeElement.find(this.options.btnDecSelector), this.btnInc = this.fakeElement.find(this.options.btnIncSelector), this.initialValue = parseFloat(this.realElement.val()) || 0, this.minValue = parseFloat(this.realElement.attr("min")), this.maxValue = parseFloat(this.realElement.attr("max")), this.stepValue = parseFloat(this.realElement.attr("step")) || 1, this.minValue = isNaN(this.minValue) ? -(1 / 0) : this.minValue, this.maxValue = isNaN(this.maxValue) ? 1 / 0 : this.maxValue, isFinite(this.maxValue) && (this.maxValue -= (this.maxValue - this.minValue) % this.stepValue)
        },
        attachEvents: function() {
            this.realElement.on({
                focus: this.onFocus
            }), this.btnDec.add(this.btnInc).on("jcf-pointerdown", this.onBtnPress)
        },
        onBtnPress: function(a) {
            var c, b = this;
            this.realElement.is(":disabled") || (c = this.btnInc.is(a.currentTarget), b.step(c), clearInterval(this.stepTimer), this.stepTimer = setInterval(function() {
                b.step(c)
            }, this.options.pressInterval), this.page.on("jcf-pointerup", this.onBtnRelease))
        },
        onBtnRelease: function() {
            clearInterval(this.stepTimer), this.page.off("jcf-pointerup", this.onBtnRelease)
        },
        onFocus: function() {
            this.fakeElement.addClass(this.options.focusClass), this.realElement.on({
                blur: this.onBlur,
                keydown: this.onKeyPress
            })
        },
        onBlur: function() {
            this.fakeElement.removeClass(this.options.focusClass), this.realElement.off({
                blur: this.onBlur,
                keydown: this.onKeyPress
            })
        },
        onKeyPress: function(a) {
            38 !== a.which && 40 !== a.which || (a.preventDefault(), this.step(38 === a.which))
        },
        step: function(a) {
            var b = parseFloat(this.realElement.val()),
                c = b || 0,
                d = this.stepValue * (a ? 1 : -1),
                e = isFinite(this.minValue) ? this.minValue : this.initialValue - Math.abs(c * this.stepValue),
                f = Math.abs(e - c) % this.stepValue;
            f ? a ? c += d - f : c -= f : c += d, c < this.minValue ? c = this.minValue : c > this.maxValue && (c = this.maxValue), c !== b && (this.realElement.val(c).trigger("change"), this.refresh())
        },
        refresh: function() {
            var a = this.realElement.is(":disabled"),
                b = parseFloat(this.realElement.val());
            this.fakeElement.toggleClass(this.options.disabledClass, a), this.btnDec.toggleClass(this.options.disabledClass, b === this.minValue), this.btnInc.toggleClass(this.options.disabledClass, b === this.maxValue)
        },
        destroy: function() {
            this.realElement.removeClass(this.options.realElementClass).insertBefore(this.fakeElement), this.fakeElement.remove(), clearInterval(this.stepTimer), this.page.off("jcf-pointerup", this.onBtnRelease), this.realElement.off({
                keydown: this.onKeyPress,
                focus: this.onFocus,
                blur: this.onBlur
            })
        }
    })
}(jQuery),
function(a) {
    "use strict";
    jcf.addModule({
        name: "Range",
        selector: 'input[type="range"]',
        options: {
            realElementClass: "jcf-real-element",
            fakeStructure: '<span class="jcf-range"><span class="jcf-range-wrapper"><span class="jcf-range-track"><span class="jcf-range-handle"></span></span></span></span>',
            dataListMark: '<span class="jcf-range-mark"></span>',
            rangeDisplayWrapper: '<span class="jcf-range-display-wrapper"></span>',
            rangeDisplay: '<span class="jcf-range-display"></span>',
            handleSelector: ".jcf-range-handle",
            trackSelector: ".jcf-range-track",
            activeHandleClass: "jcf-active-handle",
            verticalClass: "jcf-vertical",
            orientation: "horizontal",
            range: !1,
            dragHandleCenter: !0,
            snapToMarks: !0,
            snapRadius: 5
        },
        matchElement: function(a) {
            return a.is(this.selector)
        },
        init: function() {
            this.initStructure(), this.attachEvents(), this.refresh()
        },
        initStructure: function() {
            for (this.page = a("html"), this.realElement = a(this.options.element).addClass(this.options.hiddenClass), this.fakeElement = a(this.options.fakeStructure).insertBefore(this.realElement).prepend(this.realElement), this.track = this.fakeElement.find(this.options.trackSelector), this.trackHolder = this.track.parent(), this.handle = this.fakeElement.find(this.options.handleSelector), this.createdHandleCount = 0, this.activeDragHandleIndex = 0, this.isMultiple = this.realElement.prop("multiple") || "string" == typeof this.realElement.attr("multiple"), this.values = this.isMultiple ? this.realElement.attr("value").split(",") : [this.realElement.val()], this.handleCount = this.isMultiple ? this.values.length : 1, this.rangeDisplayWrapper = a(this.options.rangeDisplayWrapper).insertBefore(this.track), "min" !== this.options.range && "all" !== this.options.range || (this.rangeMin = a(this.options.rangeDisplay).addClass("jcf-range-min").prependTo(this.rangeDisplayWrapper)), "max" !== this.options.range && "all" !== this.options.range || (this.rangeMax = a(this.options.rangeDisplay).addClass("jcf-range-max").prependTo(this.rangeDisplayWrapper)); this.createdHandleCount < this.handleCount;) this.createdHandleCount++, this.handle.clone().addClass("jcf-index-" + this.createdHandleCount).insertBefore(this.handle), this.createdHandleCount > 1 && (this.rangeMid || (this.rangeMid = a()), this.rangeMid = this.rangeMid.add(a(this.options.rangeDisplay).addClass("jcf-range-mid").prependTo(this.rangeDisplayWrapper)));
            this.handle.detach(), this.handle = null, this.handles = this.fakeElement.find(this.options.handleSelector), this.handles.eq(0).addClass(this.options.activeHandleClass), this.isVertical = "vertical" === this.options.orientation, this.directionProperty = this.isVertical ? "top" : "left", this.offsetProperty = this.isVertical ? "bottom" : "left", this.eventProperty = this.isVertical ? "pageY" : "pageX", this.sizeProperty = this.isVertical ? "height" : "width", this.sizeMethod = this.isVertical ? "innerHeight" : "innerWidth", this.fakeElement.css("touchAction", this.isVertical ? "pan-x" : "pan-y"), this.isVertical && this.fakeElement.addClass(this.options.verticalClass), this.minValue = parseFloat(this.realElement.attr("min")), this.maxValue = parseFloat(this.realElement.attr("max")), this.stepValue = parseFloat(this.realElement.attr("step")) || 1, this.minValue = isNaN(this.minValue) ? 0 : this.minValue, this.maxValue = isNaN(this.maxValue) ? 100 : this.maxValue, 1 !== this.stepValue && (this.maxValue -= (this.maxValue - this.minValue) % this.stepValue), this.stepsCount = (this.maxValue - this.minValue) / this.stepValue, this.createDataList()
        },
        attachEvents: function() {
            this.realElement.on({
                focus: this.onFocus
            }), this.trackHolder.on("jcf-pointerdown", this.onTrackPress), this.handles.on("jcf-pointerdown", this.onHandlePress)
        },
        createDataList: function() {
            var b = this,
                c = [],
                d = this.realElement.attr("list");
            d && (a("#" + d).find("option").each(function() {
                var e, f, d = parseFloat(this.value || this.innerHTML);
                isNaN(d) || (f = b.valueToOffset(d), c.push({
                    value: d,
                    offset: f
                }), e = a(b.options.dataListMark).text(d).attr({
                    "data-mark-value": d
                }).css(b.offsetProperty, f + "%").appendTo(b.track))
            }), c.length && (b.dataValues = c))
        },
        getDragHandleRange: function(a) {
            var b = -(1 / 0),
                c = 1 / 0;
            return a > 0 && (b = this.valueToStepIndex(this.values[a - 1])), a < this.handleCount - 1 && (c = this.valueToStepIndex(this.values[a + 1])), {
                minStepIndex: b,
                maxStepIndex: c
            }
        },
        getNearestHandle: function(b) {
            this.isVertical && (b = 1 - b);
            var c = this.handles.eq(0),
                d = 1 / 0,
                e = this;
            return this.handleCount > 1 && this.handles.each(function() {
                var f = parseFloat(this.style[e.offsetProperty]) / 100,
                    g = Math.abs(f - b);
                g < d && (d = g, c = a(this))
            }), c
        },
        onTrackPress: function(a) {
            var b, c, d;
            a.preventDefault(), this.realElement.is(":disabled") || this.activeDragHandle || (b = this.track[this.sizeMethod](), c = this.track.offset()[this.directionProperty], this.activeDragHandle = this.getNearestHandle((a[this.eventProperty] - c) / this.trackHolder[this.sizeMethod]()), this.activeDragHandleIndex = this.handles.index(this.activeDragHandle), this.handles.removeClass(this.options.activeHandleClass).eq(this.activeDragHandleIndex).addClass(this.options.activeHandleClass), d = this.activeDragHandle[this.sizeMethod]() / 2, this.dragData = {
                trackSize: b,
                innerOffset: d,
                trackOffset: c,
                min: c,
                max: c + b
            }, this.page.on({
                "jcf-pointermove": this.onHandleMove,
                "jcf-pointerup": this.onHandleRelease
            }), "mouse" === a.pointerType && this.realElement.focus(), this.onHandleMove(a))
        },
        onHandlePress: function(b) {
            var c, d, e;
            b.preventDefault(), this.realElement.is(":disabled") || this.activeDragHandle || (this.activeDragHandle = a(b.currentTarget), this.activeDragHandleIndex = this.handles.index(this.activeDragHandle), this.handles.removeClass(this.options.activeHandleClass).eq(this.activeDragHandleIndex).addClass(this.options.activeHandleClass), c = this.track[this.sizeMethod](), d = this.track.offset()[this.directionProperty], e = this.options.dragHandleCenter ? this.activeDragHandle[this.sizeMethod]() / 2 : b[this.eventProperty] - this.handle.offset()[this.directionProperty], this.dragData = {
                trackSize: c,
                innerOffset: e,
                trackOffset: d,
                min: d,
                max: d + c
            }, this.page.on({
                "jcf-pointermove": this.onHandleMove,
                "jcf-pointerup": this.onHandleRelease
            }), "mouse" === b.pointerType && this.realElement.focus())
        },
        onHandleMove: function(b) {
            var d, e, f, g, h, c = this;
            if (d = this.isVertical ? this.dragData.max + (this.dragData.min - b[this.eventProperty]) - this.dragData.innerOffset : b[this.eventProperty] - this.dragData.innerOffset, d < this.dragData.min ? d = this.dragData.min : d > this.dragData.max && (d = this.dragData.max), b.preventDefault(), this.options.snapToMarks && this.dataValues) {
                var i = d - this.dragData.trackOffset;
                e = (d - this.dragData.trackOffset) / this.dragData.trackSize * 100, a.each(this.dataValues, function(a, b) {
                    var d = b.offset / 100 * c.dragData.trackSize,
                        f = d - c.options.snapRadius,
                        g = d + c.options.snapRadius;
                    if (i >= f && i <= g) return e = b.offset, !1
                })
            } else e = (d - this.dragData.trackOffset) / this.dragData.trackSize * 100;
            f = Math.round(e * this.stepsCount / 100), this.handleCount > 1 && (h = this.getDragHandleRange(this.activeDragHandleIndex), f < h.minStepIndex ? f = Math.max(h.minStepIndex, f) : f > h.maxStepIndex && (f = Math.min(h.maxStepIndex, f))), g = f * (100 / this.stepsCount), this.dragData.stepIndex !== f && (this.dragData.stepIndex = f, this.dragData.offset = g, this.activeDragHandle.css(this.offsetProperty, this.dragData.offset + "%"), this.values[this.activeDragHandleIndex] = "" + this.stepIndexToValue(f), this.updateValues(), this.realElement.trigger("input"))
        },
        onHandleRelease: function() {
            var a;
            "number" == typeof this.dragData.offset && (a = this.stepIndexToValue(this.dragData.stepIndex), this.realElement.val(a).trigger("change")), this.page.off({
                "jcf-pointermove": this.onHandleMove,
                "jcf-pointerup": this.onHandleRelease
            }), delete this.activeDragHandle, delete this.dragData
        },
        onFocus: function() {
            this.fakeElement.hasClass(this.options.focusClass) || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on({
                blur: this.onBlur,
                keydown: this.onKeyPress
            }))
        },
        onBlur: function() {
            this.fakeElement.removeClass(this.options.focusClass), this.realElement.off({
                blur: this.onBlur,
                keydown: this.onKeyPress
            })
        },
        onKeyPress: function(a) {
            var b = 38 === a.which || 39 === a.which,
                c = 37 === a.which || 40 === a.which;
            if (9 === a.which && this.handleCount > 1) {
                if (a.shiftKey && this.activeDragHandleIndex > 0) this.activeDragHandleIndex--;
                else {
                    if (a.shiftKey || !(this.activeDragHandleIndex < this.handleCount - 1)) return;
                    this.activeDragHandleIndex++
                }
                a.preventDefault(), this.handles.removeClass(this.options.activeHandleClass).eq(this.activeDragHandleIndex).addClass(this.options.activeHandleClass)
            }(c || b) && (a.preventDefault(), this.step(b ? this.stepValue : -this.stepValue))
        },
        updateValues: function() {
            var a = this.values.join(",");
            this.values.length > 1 ? (this.realElement.prop("valueLow", this.values[0]), this.realElement.prop("valueHigh", this.values[this.values.length - 1]), this.realElement.val(a), this.realElement.val() !== a && this.realElement.val(this.values[this.values.length - 1])) : this.realElement.val(a), this.updateRanges()
        },
        updateRanges: function() {
            var b, a = this;
            this.rangeMin && (b = this.handles[0], this.rangeMin.css(this.offsetProperty, 0).css(this.sizeProperty, b.style[this.offsetProperty])), this.rangeMax && (b = this.handles[this.handles.length - 1], this.rangeMax.css(this.offsetProperty, b.style[this.offsetProperty]).css(this.sizeProperty, 100 - parseFloat(b.style[this.offsetProperty]) + "%")), this.rangeMid && this.handles.each(function(b, c) {
                var d, e;
                b > 0 && (d = a.handles[b - 1], e = a.rangeMid[b - 1], e.style[a.offsetProperty] = d.style[a.offsetProperty], e.style[a.sizeProperty] = parseFloat(c.style[a.offsetProperty]) - parseFloat(d.style[a.offsetProperty]) + "%")
            })
        },
        step: function(a) {
            var b = parseFloat(this.values[this.activeDragHandleIndex || 0]),
                c = b,
                d = this.minValue,
                e = this.maxValue;
            isNaN(b) && (c = 0), c += a, this.handleCount > 1 && (this.activeDragHandleIndex > 0 && (d = parseFloat(this.values[this.activeDragHandleIndex - 1])), this.activeDragHandleIndex < this.handleCount - 1 && (e = parseFloat(this.values[this.activeDragHandleIndex + 1]))), c > e ? c = e : c < d && (c = d), c !== b && (this.values[this.activeDragHandleIndex || 0] = "" + c, this.updateValues(), this.realElement.trigger("input").trigger("change"), this.setSliderValue(this.values))
        },
        valueToStepIndex: function(a) {
            return (a - this.minValue) / this.stepValue
        },
        stepIndexToValue: function(a) {
            return this.minValue + this.stepValue * a
        },
        valueToOffset: function(a) {
            var b = this.maxValue - this.minValue,
                c = (a - this.minValue) / b;
            return 100 * c
        },
        getSliderValue: function() {
            return a.map(this.values, function(a) {
                return parseFloat(a) || 0
            })
        },
        setSliderValue: function(a) {
            var b = this;
            this.handles.each(function(c, d) {
                d.style[b.offsetProperty] = b.valueToOffset(a[c]) + "%"
            })
        },
        refresh: function() {
            var a = this.realElement.is(":disabled");
            this.fakeElement.toggleClass(this.options.disabledClass, a), this.setSliderValue(this.getSliderValue()), this.updateRanges()
        },
        destroy: function() {
            this.realElement.removeClass(this.options.hiddenClass).insertBefore(this.fakeElement), this.fakeElement.remove(), this.realElement.off({
                keydown: this.onKeyPress,
                focus: this.onFocus,
                blur: this.onBlur
            })
        }
    })
}(jQuery),
function(a) {
    function b(b) {
        this.options = a.extend({
            holder: null,
            button: ".btn-more",
            holderBox: "body",
            ajaxHold: "#ajax-holder",
            appendToBody: !1,
            attr: "href",
            animSpeed: 500
        }, b), this.init()
    }
    b.prototype = {
        init: function() {
            this.findElements(), this.makeCallback("onInit", this), this.attachEvents()
        },
        findElements: function() {
            this.holder = jQuery(this.options.holder), this.button = this.holder.find(this.options.button), this.ajaxHold = this.holder.find(this.options.ajaxHold)
        },
        attachEvents: function() {
            var a = this;
            this.clickHandler = function(b) {
                b.preventDefault();
                var c = a.button.attr(a.options.attr);
                "#" != c && (b.preventDefault(), a.ajaxLoad(c).done(function(b) {
                    var c = jQuery(b).filter(".blogs-block").css({
                            opacity: 0
                        }),
                        d = jQuery(b).filter(".btn-load");
                    a.options.appendToBody ? c.appendTo(jQuery(a.options.holderBox)) : c.appendTo(a.ajaxHold), d.length ? a.button.attr("href", d.attr("href")) : a.button.hide(), c.stop().animate({
                        opacity: 1
                    }, a.options.animSpeed), a.makeCallback("onChange", a)
                }))
            }, this.button.on("click", this.clickHandler)
        },
        ajaxLoad: function(a) {
            var b = jQuery.Deferred();
            return jQuery.ajax({
                url: a,
                type: "get",
                cache: !1,
                dataType: "html",
                success: function(a) {
                    b.resolve(a)
                },
                error: function(a, c, d) {
                    b.reject(a, c, d)
                }
            }), b
        },
        makeCallback: function(a) {
            if ("function" == typeof this.options[a]) {
                var b = Array.prototype.slice.call(arguments);
                b.shift(), this.options[a].apply(this, b)
            }
        }
    }, a.fn.ajaxPopup = function(c) {
        return this.each(function() {
            a(this).data("AjaxPopup", new b(a.extend(c, {
                holder: this
            })))
        })
    }
}(jQuery),
function(a) {
    a.fn.slideAccordion = function(d) {
        var e = a.extend({
            addClassBeforeAnimation: !1,
            allowClickWhenExpanded: !1,
            activeClass: "active",
            opener: ".opener",
            slider: ".slide",
            animSpeed: 300,
            collapsible: !0,
            event: "click"
        }, d);
        return this.each(function() {
            var d = a(this),
                f = d.find(":has(" + e.slider + ")");
            f.each(function() {
                var d = a(this),
                    f = d.find(e.opener),
                    g = d.find(e.slider);
                f.bind(e.event, function(a) {
                    if (!g.is(":animated"))
                        if (d.hasClass(e.activeClass)) {
                            if (e.allowClickWhenExpanded) return;
                            e.collapsible && g.slideUp(e.animSpeed, function() {
                                c(g), d.removeClass(e.activeClass)
                            })
                        } else {
                            var f = d.siblings("." + e.activeClass),
                                h = f.find(e.slider);
                            d.addClass(e.activeClass), b(g).hide().slideDown(e.animSpeed), h.slideUp(e.animSpeed, function() {
                                f.removeClass(e.activeClass), c(h)
                            })
                        }
                    a.preventDefault()
                }), d.hasClass(e.activeClass) ? b(g) : c(g)
            })
        })
    };
    var b = function(a) {
            return a.css({
                position: "",
                top: "",
                left: "",
                width: ""
            })
        },
        c = function(a) {
            return a.show().css({
                position: "absolute",
                top: -9999,
                left: -9999,
                width: a.width()
            })
        }
}(jQuery),
function(a) {
    function b(b) {
        this.options = a.extend({
            holder: null,
            handleFlexible: !0,
            pauseOnHover: !0,
            hoverClass: "hover",
            direction: "left",
            cloneClass: "cloned",
            mask: null,
            line: ">*",
            items: ">*",
            animSpeed: 10,
            initialDelay: 0
        }, b), this.init()
    }
    b.prototype = {
        init: function() {
            this.options.holder && (this.initStructure(), this.attachEvents())
        },
        initStructure: function() {
            this.holder = a(this.options.holder), this.mask = this.options.mask ? this.holder.find(this.options.mask) : this.holder, this.line = this.mask.find(this.options.line), this.items = this.line.find(this.options.items).css({
                float: "left"
            }), this.direction = "left" === this.options.direction ? -1 : 1, this.recalculateDimensions(), this.cloneItems = this.items.clone().addClass(this.options.cloneClass).appendTo(this.line), this.itemWidth >= this.maskWidth ? (this.activeLine = !0, this.offset = this.direction === -1 ? 0 : this.maxOffset) : (this.activeLine = !1, this.cloneItems.hide(), this.offset = 0), this.line.css({
                width: 2 * this.itemWidth,
                marginLeft: this.offset
            })
        },
        attachEvents: function() {
            var b = this;
            this.options.handleFlexible && (this.resizeHandler = function() {
                b.recalculateDimensions(), b.itemWidth < b.maskWidth ? (b.activeLine = !1, b.cloneItems.hide(), b.stopMoving(), b.offset = 0, b.line.css({
                    marginLeft: b.offset
                })) : (b.activeLine = !0, b.cloneItems.show(), b.startMoving())
            }, a(window).bind("resize orientationchange", this.resizeHandler)), this.options.pauseOnHover && (this.hoverHandler = function() {
                b.stopMoving(), b.holder.addClass(b.options.hoverClass)
            }, this.leaveHandler = function() {
                b.startMoving(), b.holder.removeClass(b.options.hoverClass)
            }, this.holder.bind({
                mouseenter: this.hoverHandler,
                mouseleave: this.leaveHandler
            })), setTimeout(function() {
                b.initialFlag = !0, b.startMoving()
            }, b.options.initialDelay || 1)
        },
        recalculateDimensions: function() {
            var b = this;
            this.maskWidth = this.mask.width(), this.itemWidth = 1, this.items.each(function() {
                b.itemWidth += a(this).outerWidth(!0)
            }), this.maxOffset = -this.itemWidth
        },
        startMoving: function() {
            var a = this;
            if (a.activeLine && a.initialFlag) {
                var b = a.direction < 0 ? a.maxOffset : 0;
                a.offset = parseInt(a.line.css("marginLeft"), 10) || 0, a.line.stop().animate({
                    marginLeft: b
                }, {
                    duration: Math.abs(1e3 * (a.offset - b) / a.options.animSpeed),
                    easing: "linear",
                    complete: function() {
                        a.offset = a.direction < 0 ? 0 : a.maxOffset, a.line.css({
                            marginLeft: a.offset
                        }), a.startMoving()
                    }
                })
            }
        },
        stopMoving: function() {
            this.line.stop()
        },
        destroy: function() {
            this.stopMoving(), this.cloneItems.remove(), this.items.css({
                float: ""
            }), this.line.css({
                marginLeft: "",
                width: ""
            }), this.holder.removeClass(this.options.hoverClass), this.holder.unbind("mouseenter", this.hoverHandler), this.holder.unbind("mouseleave", this.leaveHandler), a(window).unbind("resize orientationchange", this.resizeHandler)
        }
    }, a.fn.marquee = function(c) {
        return this.each(function() {
            jQuery(this).data("Marquee", new b(a.extend(c, {
                holder: this
            })))
        })
    }
}(jQuery), SameHeight = {
        supportMinHeight: "undefined" != typeof document.documentElement.style.maxHeight,
        setSize: function(a, b, c) {
            for (var d, e = "number" == typeof b ? b : this.getHeight(b), f = 0; f < a.length; f++) {
                var g = a[f],
                    h = 0,
                    i = this.isBorderBox(g);
                if (lib.removeClass(g, c.leftEdgeClass), lib.removeClass(g, c.rightEdgeClass), "number" != typeof b)
                    for (var j = g.parentNode; j != b;) h += this.getOuterHeight(j) - this.getHeight(j), j = j.parentNode;
                d = e - h, d -= i ? 0 : this.getOuterHeight(g) - this.getHeight(g), d > 0 && (g.style[c.useMinHeight && this.supportMinHeight ? "minHeight" : "height"] = d + "px")
            }
            return lib.addClass(a[0], c.leftEdgeClass), lib.addClass(a[a.length - 1], c.rightEdgeClass), d
        },
        getOffset: function(a) {
            if (a.getBoundingClientRect) {
                var b = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                    c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                    d = document.documentElement.clientLeft || document.body.clientLeft || 0,
                    e = document.documentElement.clientTop || document.body.clientTop || 0;
                return {
                    top: Math.round(a.getBoundingClientRect().top + c - e),
                    left: Math.round(a.getBoundingClientRect().left + b - d)
                }
            }
            for (var f = 0, g = 0; a.offsetParent;) f += a.offsetLeft, g += a.offsetTop, a = a.offsetParent;
            return {
                top: g,
                left: f
            }
        },
        getStyle: function(a, b) {
            return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(a, null)[b] : a.currentStyle ? a.currentStyle[b] : a.style[b]
        },
        getStylesTotal: function(a) {
            for (var b = 0, c = 1; c < arguments.length; c++) {
                var d = parseFloat(this.getStyle(a, arguments[c]));
                isNaN(d) || (b += d)
            }
            return b
        },
        getHeight: function(a) {
            return a.offsetHeight - this.getStylesTotal(a, "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom")
        },
        getOuterHeight: function(a) {
            return a.offsetHeight
        },
        isBorderBox: function(a) {
            var b = this.getStyle,
                c = b(a, "boxSizing") || b(a, "WebkitBoxSizing") || b(a, "MozBoxSizing");
            return "border-box" === c
        },
        resizeElementsByRows: function(a, b) {
            for (var d, c = [], e = 0, f = this.getOffset(a[0]).top, g = 0; g < a.length; g++) this.getOffset(a[g]).top === f ? c.push(a[g]) : (d = this.getMaxHeight(c), e = Math.max(e, this.setSize(c, d, b)), f = this.getOffset(a[g]).top, c = [a[g]]);
            if (c.length && (d = this.getMaxHeight(c), e = Math.max(e, this.setSize(c, d, b))), b.biggestHeight)
                for (g = 0; g < a.length; g++) a[g].style[b.useMinHeight && this.supportMinHeight ? "minHeight" : "height"] = e + "px"
        },
        getMaxHeight: function(a) {
            for (var b = 0, c = 0; c < a.length; c++) b = Math.max(b, this.getOuterHeight(a[c]));
            return b
        }
    }, FontResizeEvent = function(a, b) {
        function e() {
            if (b.body.appendChild(d), /MSIE (6|7|8)/.test(navigator.userAgent)) d.onresize = function() {
                a.FontResizeEvent.trigger(d.offsetWidth / 100)
            };
            else {
                var e = d.contentWindow.document;
                e.open(), e.write('<script>window.onload = function(){var em = parent.document.getElementById("' + c + '");window.onresize = function(){if(parent.FontResizeEvent){parent.FontResizeEvent.trigger(em.offsetWidth / 100);}}};</script>'), e.close()
            }
        }
        var c = "font-resize-frame-" + Math.floor(1e3 * Math.random()),
            d = b.createElement("iframe");
        d.id = c, d.className = "font-resize-helper", d.style.cssText = "position:absolute;width:100em;height:10px;top:-9999px;left:-9999px;border-width:0", a.addEventListener ? a.addEventListener("load", e, !1) : a.attachEvent && a.attachEvent("onload", e);
        var f = [];
        return {
            onChange: function(a) {
                "function" == typeof a && f.push(a)
            },
            trigger: function(a) {
                for (var b = 0; b < f.length; b++) f[b](a)
            }
        }
    }(this, document), lib = {
        hasClass: function(a, b) {
            return !(!a || !a.className) && a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"))
        },
        addClass: function(a, b) {
            a && !this.hasClass(a, b) && (a.className += " " + b)
        },
        removeClass: function(a, b) {
            a && this.hasClass(a, b) && (a.className = a.className.replace(new RegExp("(\\s|^)" + b + "(\\s|$)"), " "))
        },
        extend: function(a) {
            for (var b = 1; b < arguments.length; b++)
                for (var c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
            return a
        },
        each: function(a, b) {
            var c, d;
            if ("number" == typeof a.length)
                for (c = 0, d = a.length; c < d && b.call(a[c], c, a[c]) !== !1; c++);
            else
                for (c in a)
                    if (a.hasOwnProperty(c) && b.call(a[c], c, a[c]) === !1) break
        },
        event: function() {
            var a = function(a) {
                return a = a || window.event, a.isFixed ? a : (a.isFixed = !0, a.target || (a.target = a.srcElement), a.preventDefault = a.preventDefault || function() {
                    this.returnValue = !1
                }, a.stopPropagation = a.stopPropagation || function() {
                    this.cancelBubble = !0
                }, a)
            };
            return {
                add: function(b, c, d) {
                    b.events || (b.events = {},
                        b.handle = function(c) {
                            var d, e = b.events[c.type];
                            c = a(c);
                            for (var f = 0, g = e.length; f < g; f++) e[f] && (d = e[f].call(b, c), d === !1 && (c.preventDefault(), c.stopPropagation()))
                        }), b.events[c] || (b.events[c] = [], b.addEventListener ? b.addEventListener(c, b.handle, !1) : b.attachEvent && b.attachEvent("on" + c, b.handle)), b.events[c].push(d)
                },
                remove: function(a, b, c) {
                    for (var d = a.events[b], e = d.length - 1; e >= 0; e--) d[e] === c && d.splice(e, 1);
                    d.length || (delete a.events[b], a.removeEventListener ? a.removeEventListener(b, a.handle, !1) : a.detachEvent && a.detachEvent("on" + b, a.handle))
                }
            }
        }(),
        queryElementsBySelector: function(a, b) {
            if (b = b || document, !a) return [];
            if (">*" === a) return b.children;
            if ("function" == typeof document.querySelectorAll) return b.querySelectorAll(a);
            for (var c = a.split(","), d = [], e = 0; e < c.length; e++) {
                for (var f = [b || document], g = c[e].replace(/^\s+/, "").replace(/\s+$/, "").split(" "), h = 0; h < g.length; h++)
                    if (token = g[h].replace(/^\s+/, "").replace(/\s+$/, ""), token.indexOf("#") > -1) {
                        var i = token.split("#"),
                            j = i[0],
                            k = i[1],
                            l = document.getElementById(k);
                        if (l && j && l.nodeName.toLowerCase() != j) return [];
                        f = l ? [l] : []
                    } else if (token.indexOf(".") > -1) {
                    for (var i = token.split("."), j = i[0] || "*", m = i[1], n = [], o = 0, p = 0; p < f.length; p++) {
                        var q;
                        q = "*" == j ? f[p].getElementsByTagName("*") : f[p].getElementsByTagName(j);
                        for (var r = 0; r < q.length; r++) n[o++] = q[r]
                    }
                    f = [];
                    for (var s = 0, t = 0; t < n.length; t++) n[t].className && n[t].className.match(new RegExp("(\\s|^)" + m + "(\\s|$)")) && (f[s++] = n[t])
                } else if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
                    var j = RegExp.$1 || "*",
                        u = RegExp.$2,
                        v = RegExp.$3,
                        w = RegExp.$4;
                    "for" == u.toLowerCase() && this.browser.msie && this.browser.version < 8 && (u = "htmlFor");
                    for (var n = [], o = 0, p = 0; p < f.length; p++) {
                        var q;
                        q = "*" == j ? f[p].getElementsByTagName("*") : f[p].getElementsByTagName(j);
                        for (var r = 0; q[r]; r++) n[o++] = q[r]
                    }
                    f = [];
                    var x, s = 0;
                    switch (v) {
                        case "=":
                            x = function(a) {
                                return a.getAttribute(u) == w
                            };
                            break;
                        case "~":
                            x = function(a) {
                                return a.getAttribute(u).match(new RegExp("(\\s|^)" + w + "(\\s|$)"))
                            };
                            break;
                        case "|":
                            x = function(a) {
                                return a.getAttribute(u).match(new RegExp("^" + w + "-?"))
                            };
                            break;
                        case "^":
                            x = function(a) {
                                return 0 == a.getAttribute(u).indexOf(w)
                            };
                            break;
                        case "$":
                            x = function(a) {
                                return a.getAttribute(u).lastIndexOf(w) == a.getAttribute(u).length - w.length
                            };
                            break;
                        case "*":
                            x = function(a) {
                                return a.getAttribute(u).indexOf(w) > -1
                            };
                            break;
                        default:
                            x = function(a) {
                                return a.getAttribute(u)
                            }
                    }
                    f = [];
                    for (var s = 0, t = 0; t < n.length; t++) x(n[t]) && (f[s++] = n[t])
                } else {
                    j = token;
                    for (var n = [], o = 0, p = 0; p < f.length; p++)
                        for (var q = f[p].getElementsByTagName(j), r = 0; r < q.length; r++) n[o++] = q[r];
                    f = n
                }
                d = [].concat(d, f)
            }
            return d
        },
        trim: function(a) {
            return a.replace(/^\s+/, "").replace(/\s+$/, "")
        },
        bind: function(a, b, c) {
            return function() {
                return a.apply(b, "undefined" != typeof c ? [c] : arguments)
            }
        }
    },
    function(a) {
        a.fn.contentTabs = function(d) {
            var e = a.extend({
                activeClass: "active",
                addToParent: !1,
                autoHeight: !1,
                autoRotate: !1,
                checkHash: !1,
                animSpeed: 400,
                switchTime: 3e3,
                effect: "none",
                tabLinks: "a",
                attrib: "href",
                event: "click"
            }, d);
            return this.each(function() {
                function m(d, f) {
                    k = !0;
                    var l = d.data("ctab"),
                        m = f.data("ctab");
                    i = f, j = m, (e.addToParent ? h : g).removeClass(e.activeClass), (e.addToParent ? f.data("cparent") : f).addClass(e.activeClass), n(l, !0), c[e.effect].hide({
                        speed: e.animSpeed,
                        tab: l,
                        complete: function() {
                            n(m.removeClass(b).width("")), c[e.effect].show({
                                speed: e.animSpeed,
                                tab: m,
                                complete: function() {
                                    l.is(m) || l.width(l.width()).addClass(b), k = !1, n(m, !1), q(), a(window).trigger("resize")
                                }
                            })
                        }
                    })
                }

                function n(a, b) {
                    var c = a && a.length ? a : j;
                    if (e.autoHeight && c)
                        if (l.stop(), b === !1) l.css({
                            height: ""
                        });
                        else {
                            var d = c.attr("style");
                            c.show().css({
                                width: c.width()
                            });
                            var f = c.outerHeight(!0);
                            d ? c.attr("style", d) : c.removeAttr("style"), b === !0 ? l.css({
                                height: f
                            }) : l.animate({
                                height: f
                            }, {
                                duration: e.animSpeed
                            })
                        }
                }

                function p() {
                    var a = (e.addToParent ? h : g).filter("." + e.activeClass),
                        b = (e.addToParent ? h : g).index(a),
                        c = g.eq(b < g.length - 1 ? b + 1 : 0);
                    i = g.eq(b), m(i, c)
                }

                function q() {
                    e.autoRotate && g.length > 1 && (clearTimeout(o), o = setTimeout(function() {
                        k ? q() : p()
                    }, e.switchTime))
                }
                var j, k, l, d = a(this),
                    f = a(),
                    g = d.find(e.tabLinks),
                    h = g.parent(),
                    i = g.eq(0);
                e.checkHash && g.filter("[" + e.attrib + '="' + location.hash + '"]').length && ((e.addToParent ? h : g).removeClass(e.activeClass), setTimeout(function() {
                    window.scrollTo(0, 0)
                }, 1)), g.each(function() {
                    var d = a(this),
                        g = d.attr(e.attrib),
                        h = d.parent();
                    g = g.substr(g.lastIndexOf("#"));
                    var n = a(g).hide().addClass(b);
                    f = f.add(n), d.data("cparent", h), d.data("ctab", n), !l && n.length && (l = n.parent());
                    var o = e.addToParent ? h : d;
                    if (o.hasClass(e.activeClass) || e.checkHash && location.hash === g) o.addClass(e.activeClass), i = d, j = n, n.removeClass(b).width(""), c[e.effect].show({
                        tab: n,
                        fast: !0
                    });
                    else {
                        var p = n.width();
                        p && n.width(p), n.addClass(b)
                    }
                    d.bind(e.event, function(a) {
                        d == i || k || (m(i, d), i = d)
                    }), "href" === e.attrib && d.bind("click", function(a) {
                        a.preventDefault()
                    })
                }), e.autoHeight && a(window).bind("resize orientationchange", function() {
                    f.not(j).removeClass(b).show().each(function() {
                        var a = jQuery(this),
                            b = a.css({
                                width: ""
                            }).width();
                        b && a.width(b)
                    }).hide().addClass(b), n(j, !1)
                });
                var o;
                q()
            })
        };
        var b = "js-tab-hidden";
        ! function() {
            var c = a('<style type="text/css">')[0],
                d = "." + b;
            d += "{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}", c.styleSheet ? c.styleSheet.cssText = d : c.appendChild(document.createTextNode(d)), a("head").append(c)
        }();
        var c = {
            none: {
                show: function(a) {
                    a.tab.css({
                        display: "block"
                    }), a.complete && a.complete()
                },
                hide: function(a) {
                    a.tab.css({
                        display: "none"
                    }), a.complete && a.complete()
                }
            },
            fade: {
                show: function(a) {
                    a.fast && (a.speed = 1), a.tab.fadeIn(a.speed), a.complete && setTimeout(a.complete, a.speed)
                },
                hide: function(a) {
                    a.fast && (a.speed = 1), a.tab.fadeOut(a.speed), a.complete && setTimeout(a.complete, a.speed)
                }
            },
            slide: {
                show: function(b) {
                    var c = b.tab.show().css({
                            width: b.tab.width()
                        }).outerHeight(!0),
                        d = a('<div class="effect-div">').insertBefore(b.tab).append(b.tab);
                    d.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), b.tab.css({
                        marginTop: -c,
                        display: "block"
                    }), b.fast && (b.speed = 1), b.tab.animate({
                        marginTop: 0
                    }, {
                        duration: b.speed,
                        complete: function() {
                            b.tab.css({
                                marginTop: "",
                                width: ""
                            }).insertBefore(d), d.remove(), b.complete && b.complete()
                        }
                    })
                },
                hide: function(b) {
                    var c = b.tab.show().css({
                            width: b.tab.width()
                        }).outerHeight(!0),
                        d = a('<div class="effect-div">').insertBefore(b.tab).append(b.tab);
                    d.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), b.fast && (b.speed = 1), b.tab.animate({
                        marginTop: -c
                    }, {
                        duration: b.speed,
                        complete: function() {
                            b.tab.css({
                                display: "none",
                                marginTop: "",
                                width: ""
                            }).insertBefore(d), d.remove(), b.complete && b.complete()
                        }
                    })
                }
            }
        }
    }(jQuery),
    function(a, b) {
        "use strict";

        function c(b) {
            this.options = a.extend({
                wrapNative: !0,
                wrapNativeOnMobile: !0,
                fakeDropInBody: !0,
                useCustomScroll: !0,
                flipDropToFit: !0,
                maxVisibleItems: 10,
                fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
                fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
                optionClassPrefix: "jcf-option-",
                selectClassPrefix: "jcf-select-",
                dropContentSelector: ".jcf-select-drop-content",
                selectTextSelector: ".jcf-select-text",
                dropActiveClass: "jcf-drop-active",
                flipDropClass: "jcf-drop-flipped"
            }, b), this.init()
        }

        function d(b) {
            this.options = a.extend({
                wrapNative: !0,
                useCustomScroll: !0,
                fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
                selectClassPrefix: "jcf-select-",
                listHolder: ".jcf-list-wrapper"
            }, b), this.init()
        }

        function e(b) {
            this.options = a.extend({
                holder: null,
                maxVisibleItems: 10,
                selectOnClick: !0,
                useHoverClass: !1,
                useCustomScroll: !1,
                handleResize: !0,
                alwaysPreventMouseWheel: !1,
                indexAttribute: "data-index",
                cloneClassPrefix: "jcf-option-",
                containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
                containerSelector: ".jcf-list-content",
                captionClass: "jcf-optgroup-caption",
                disabledClass: "jcf-disabled",
                optionClass: "jcf-option",
                groupClass: "jcf-optgroup",
                hoverClass: "jcf-hover",
                selectedClass: "jcf-selected",
                scrollClass: "jcf-scroll-active"
            }, b), this.init()
        }
        jcf.addModule({
            name: "Select",
            selector: "select",
            options: {
                element: null
            },
            plugins: {
                ListBox: d,
                ComboBox: c,
                SelectList: e
            },
            matchElement: function(a) {
                return a.is("select")
            },
            init: function() {
                this.element = a(this.options.element), this.createInstance()
            },
            isListBox: function() {
                return this.element.is("[size]:not([jcf-size]), [multiple]")
            },
            createInstance: function() {
                this.instance && this.instance.destroy(), this.isListBox() ? this.instance = new d(this.options) : this.instance = new c(this.options)
            },
            refresh: function() {
                var a = this.isListBox() && this.instance instanceof c || !this.isListBox() && this.instance instanceof d;
                a ? this.createInstance() : this.instance.refresh()
            },
            destroy: function() {
                this.instance.destroy()
            }
        }), a.extend(c.prototype, {
            init: function(a) {
                this.initStructure(), this.bindHandlers(), this.attachEvents(), this.refresh()
            },
            initStructure: function() {
                this.win = a(b), this.doc = a(document), this.realElement = a(this.options.element), this.fakeElement = a(this.options.fakeAreaStructure).insertAfter(this.realElement), this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector), this.selectText = a("<span></span>").appendTo(this.selectTextContainer), g(this.fakeElement), this.fakeElement.addClass(f(this.realElement.prop("className"), this.options.selectClassPrefix)), this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative && (this.options.wrapNative = !0), this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
                    position: "absolute",
                    height: "100%",
                    width: "100%"
                }).addClass(this.options.resetAppearanceClass) : (this.realElement.addClass(this.options.hiddenClass), this.fakeElement.attr("title", this.realElement.attr("title")), this.fakeDropTarget = this.options.fakeDropInBody ? a("body") : this.fakeElement)
            },
            attachEvents: function() {
                var a = this;
                this.delayedRefresh = function() {
                    setTimeout(function() {
                        a.refresh(), a.list && a.list.refresh()
                    }, 1)
                }, this.options.wrapNative ? this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    click: this.onChange,
                    keydown: this.onChange
                }) : (this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    keydown: this.onKeyDown
                }), this.fakeElement.on({
                    "jcf-pointerdown": this.onSelectAreaPress
                }))
            },
            onKeyDown: function(a) {
                13 === a.which ? this.toggleDropdown() : this.delayedRefresh()
            },
            onChange: function() {
                this.refresh()
            },
            onFocus: function() {
                this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.toggleListMode(!0), this.focusedFlag = !0)
            },
            onBlur: function() {
                this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.toggleListMode(!1), this.focusedFlag = !1)
            },
            onResize: function() {
                this.dropActive && this.hideDropdown()
            },
            onSelectDropPress: function() {
                this.pressedFlag = !0
            },
            onSelectDropRelease: function(a, b) {
                this.pressedFlag = !1, "mouse" === b.pointerType && this.realElement.focus()
            },
            onSelectAreaPress: function(b) {
                var c = !this.options.fakeDropInBody && a(b.target).closest(this.dropdown).length;
                c || b.button > 1 || this.realElement.is(":disabled") || (this.toggleDropdown(), this.focusedFlag || ("mouse" === b.pointerType ? this.realElement.focus() : this.onFocus(b)), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onSelectAreaRelease))
            },
            onSelectAreaRelease: function(a) {
                this.focusedFlag && "mouse" === a.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onSelectAreaRelease)
            },
            onOutsideClick: function(b) {
                var c = a(b.target),
                    d = c.closest(this.fakeElement).length || c.closest(this.dropdown).length;
                d || this.hideDropdown()
            },
            onSelect: function() {
                this.hideDropdown(), this.refresh(), this.fireNativeEvent(this.realElement, "change")
            },
            toggleListMode: function(a) {
                this.options.wrapNative || (a ? this.realElement.attr({
                    size: 4,
                    "jcf-size": ""
                }) : this.options.wrapNative || this.realElement.removeAttr("size jcf-size"))
            },
            createDropdown: function() {
                this.dropdown && (this.list.destroy(), this.dropdown.remove()), this.dropdown = a(this.options.fakeDropStructure).appendTo(this.fakeDropTarget), this.dropdown.addClass(f(this.realElement.prop("className"), this.options.selectClassPrefix)), g(this.dropdown), this.options.fakeDropInBody && this.dropdown.css({
                    position: "absolute",
                    top: -9999
                }), this.list = new e({
                    useHoverClass: !0,
                    handleResize: !1,
                    alwaysPreventMouseWheel: !0,
                    maxVisibleItems: this.options.maxVisibleItems,
                    useCustomScroll: this.options.useCustomScroll,
                    holder: this.dropdown.find(this.options.dropContentSelector),
                    element: this.realElement
                }), a(this.list).on({
                    select: this.onSelect,
                    press: this.onSelectDropPress,
                    release: this.onSelectDropRelease
                })
            },
            repositionDropdown: function() {
                var g, h, i, a = this.fakeElement.offset(),
                    b = this.fakeElement.outerWidth(),
                    c = this.fakeElement.outerHeight(),
                    d = this.dropdown.outerHeight(),
                    e = this.win.scrollTop(),
                    f = this.win.height(),
                    j = !1;
                a.top + c + d > e + f && a.top - d > e && (j = !0), this.options.fakeDropInBody && (i = "static" !== this.fakeDropTarget.css("position") ? this.fakeDropTarget.offset().top : 0, this.options.flipDropToFit && j ? (h = a.left, g = a.top - d - i) : (h = a.left, g = a.top + c - i), this.dropdown.css({
                    width: b,
                    left: h,
                    top: g
                })), this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && j)
            },
            showDropdown: function() {
                this.dropdown || this.createDropdown(), this.dropActive = !0, this.dropdown.appendTo(this.fakeDropTarget), this.fakeElement.addClass(this.options.dropActiveClass), this.refreshSelectedText(), this.repositionDropdown(), this.list.setScrollTop(this.savedScrollTop), this.list.refresh(), this.win.on("resize", this.onResize), this.doc.on("jcf-pointerdown", this.onOutsideClick)
            },
            hideDropdown: function() {
                this.dropdown && (this.savedScrollTop = this.list.getScrollTop(), this.fakeElement.removeClass(this.options.dropActiveClass + " " + this.options.flipDropClass), this.dropdown.removeClass(this.options.flipDropClass).detach(), this.doc.off("jcf-pointerdown", this.onOutsideClick), this.win.off("resize", this.onResize), this.dropActive = !1)
            },
            toggleDropdown: function() {
                this.dropActive ? this.hideDropdown() : this.showDropdown()
            },
            refreshSelectedText: function() {
                var e, b = this.realElement.prop("selectedIndex"),
                    c = this.realElement.prop("options")[b],
                    d = c.getAttribute("data-image");
                this.currentSelectedText === c.innerHTML && this.currentSelectedImage === d || (e = f(c.className, this.options.optionClassPrefix), this.selectText.attr("class", e).html(c.innerHTML), d ? (this.selectImage || (this.selectImage = a("<img>").prependTo(this.selectTextContainer).hide()), this.selectImage.attr("src", d).show()) : this.selectImage && this.selectImage.hide(), this.currentSelectedText = c.innerHTML, this.currentSelectedImage = d)
            },
            refresh: function() {
                "none" === this.realElement.prop("style").display ? this.fakeElement.hide() : this.fakeElement.show(), this.refreshSelectedText(), this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled"))
            },
            destroy: function() {
                this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
                    position: "",
                    height: "",
                    width: ""
                }).removeClass(this.options.resetAppearanceClass) : (this.realElement.removeClass(this.options.hiddenClass), this.realElement.is("[jcf-size]") && this.realElement.removeAttr("size jcf-size")), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onSelectAreaRelease), this.realElement.off({
                    focus: this.onFocus
                })
            }
        }), a.extend(d.prototype, {
            init: function(a) {
                this.bindHandlers(), this.initStructure(), this.attachEvents()
            },
            initStructure: function() {
                this.realElement = a(this.options.element), this.fakeElement = a(this.options.fakeStructure).insertAfter(this.realElement), this.listHolder = this.fakeElement.find(this.options.listHolder), g(this.fakeElement), this.fakeElement.addClass(f(this.realElement.prop("className"), this.options.selectClassPrefix)), this.realElement.addClass(this.options.hiddenClass), this.list = new e({
                    useCustomScroll: this.options.useCustomScroll,
                    holder: this.listHolder,
                    selectOnClick: !1,
                    element: this.realElement
                })
            },
            attachEvents: function() {
                var b = this;
                this.delayedRefresh = function() {
                    clearTimeout(b.refreshTimer), b.refreshTimer = setTimeout(function() {
                        b.refresh()
                    }, 1)
                }, this.realElement.on({
                    focus: this.onFocus,
                    click: this.delayedRefresh,
                    keydown: this.delayedRefresh
                }), a(this.list).on({
                    select: this.onSelect,
                    press: this.onFakeOptionsPress,
                    release: this.onFakeOptionsRelease
                })
            },
            onFakeOptionsPress: function(a, b) {
                this.pressedFlag = !0, "mouse" === b.pointerType && this.realElement.focus()
            },
            onFakeOptionsRelease: function(a, b) {
                this.pressedFlag = !1, "mouse" === b.pointerType && this.realElement.focus()
            },
            onSelect: function() {
                this.fireNativeEvent(this.realElement, "change"), this.fireNativeEvent(this.realElement, "click")
            },
            onFocus: function() {
                this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.focusedFlag = !0)
            },
            onBlur: function() {
                this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.focusedFlag = !1)
            },
            refresh: function() {
                this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled")), this.list.refresh()
            },
            destroy: function() {
                this.list.destroy(), this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass), this.fakeElement.remove()
            }
        }), a.extend(e.prototype, {
            init: function() {
                this.initStructure(), this.refreshSelectedClass(), this.attachEvents()
            },
            initStructure: function() {
                this.element = a(this.options.element), this.indexSelector = "[" + this.options.indexAttribute + "]", this.container = a(this.options.containerStructure).appendTo(this.options.holder), this.listHolder = this.container.find(this.options.containerSelector), this.lastClickedIndex = this.element.prop("selectedIndex"), this.rebuildList()
            },
            attachEvents: function() {
                this.bindHandlers(), this.listHolder.on("jcf-pointerdown", this.indexSelector, this.onItemPress), this.listHolder.on("jcf-pointerdown", this.onPress), this.options.useHoverClass && this.listHolder.on("jcf-pointerover", this.indexSelector, this.onHoverItem)
            },
            onPress: function(b) {
                a(this).trigger("press", b), this.listHolder.on("jcf-pointerup", this.onRelease)
            },
            onRelease: function(b) {
                a(this).trigger("release", b), this.listHolder.off("jcf-pointerup", this.onRelease)
            },
            onHoverItem: function(a) {
                var b = parseFloat(a.currentTarget.getAttribute(this.options.indexAttribute));
                this.fakeOptions.removeClass(this.options.hoverClass).eq(b).addClass(this.options.hoverClass)
            },
            onItemPress: function(a) {
                "touch" === a.pointerType || this.options.selectOnClick ? (this.tmpListOffsetTop = this.list.offset().top, this.listHolder.on("jcf-pointerup", this.indexSelector, this.onItemRelease)) : this.onSelectItem(a)
            },
            onItemRelease: function(a) {
                this.listHolder.off("jcf-pointerup", this.indexSelector, this.onItemRelease), this.tmpListOffsetTop === this.list.offset().top && this.listHolder.on("click", this.indexSelector, this.onSelectItem), delete this.tmpListOffsetTop
            },
            onSelectItem: function(b) {
                var d, c = parseFloat(b.currentTarget.getAttribute(this.options.indexAttribute));
                this.listHolder.off("click", this.indexSelector, this.onSelectItem), b.button > 1 || this.realOptions[c].disabled || (this.element.prop("multiple") ? b.metaKey || b.ctrlKey || "touch" === b.pointerType ? this.realOptions[c].selected = !this.realOptions[c].selected : b.shiftKey ? (d = [this.lastClickedIndex, c].sort(function(a, b) {
                    return a - b
                }), this.realOptions.each(function(a, b) {
                    b.selected = a >= d[0] && a <= d[1]
                })) : this.element.prop("selectedIndex", c) : this.element.prop("selectedIndex", c), b.shiftKey || (this.lastClickedIndex = c), this.refreshSelectedClass(), "mouse" === b.pointerType && this.scrollToActiveOption(), a(this).trigger("select"))
            },
            rebuildList: function() {
                var b = this,
                    c = this.element[0];
                this.storedSelectHTML = c.innerHTML, this.optionIndex = 0, this.list = a(this.createOptionsList(c)), this.listHolder.empty().append(this.list), this.realOptions = this.element.find("option"), this.fakeOptions = this.list.find(this.indexSelector), this.fakeListItems = this.list.find("." + this.options.captionClass + "," + this.indexSelector), delete this.optionIndex;
                var d = this.options.maxVisibleItems,
                    e = this.element.prop("size");
                e > 1 && (d = e);
                var f = this.fakeOptions.length > d;
                return this.container.toggleClass(this.options.scrollClass, f), f && (this.listHolder.css({
                    maxHeight: this.getOverflowHeight(d),
                    overflow: "auto"
                }), this.options.useCustomScroll && jcf.modules.Scrollable) ? void jcf.replace(this.listHolder, "Scrollable", {
                    handleResize: this.options.handleResize,
                    alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
                }) : void(this.options.alwaysPreventMouseWheel && (this.preventWheelHandler = function(a) {
                    var c = b.listHolder.scrollTop(),
                        d = b.listHolder.prop("scrollHeight") - b.listHolder.innerHeight();
                    b.listHolder.prop("scrollWidth") - b.listHolder.innerWidth();
                    (c <= 0 && a.deltaY < 0 || c >= d && a.deltaY > 0) && a.preventDefault()
                }, this.listHolder.on("jcf-mousewheel", this.preventWheelHandler)))
            },
            refreshSelectedClass: function() {
                var b, a = this,
                    c = this.element.prop("multiple"),
                    d = this.element.prop("selectedIndex");
                c ? this.realOptions.each(function(b, c) {
                    a.fakeOptions.eq(b).toggleClass(a.options.selectedClass, !!c.selected)
                }) : (this.fakeOptions.removeClass(this.options.selectedClass + " " + this.options.hoverClass), b = this.fakeOptions.eq(d).addClass(this.options.selectedClass), this.options.useHoverClass && b.addClass(this.options.hoverClass))
            },
            scrollToActiveOption: function() {
                var a = this.getActiveOptionOffset();
                this.listHolder.prop("scrollTop", a)
            },
            getSelectedIndexRange: function() {
                var a = -1,
                    b = -1;
                return this.realOptions.each(function(c, d) {
                    d.selected && (a < 0 && (a = c), b = c)
                }), [a, b]
            },
            getChangedSelectedIndex: function() {
                var b, a = this.element.prop("selectedIndex");
                return this.element.prop("multiple") ? (this.previousRange || (this.previousRange = [a, a]), this.currentRange = this.getSelectedIndexRange(), b = this.currentRange[this.currentRange[0] !== this.previousRange[0] ? 0 : 1], this.previousRange = this.currentRange, b) : a
            },
            getActiveOptionOffset: function() {
                var a = this.listHolder.height(),
                    b = this.listHolder.prop("scrollTop"),
                    c = this.getChangedSelectedIndex(),
                    d = this.fakeOptions.eq(c),
                    e = d.offset().top - this.list.offset().top,
                    f = d.innerHeight();
                return e + f >= b + a ? e - a + f : e < b ? e : void 0
            },
            getOverflowHeight: function(a) {
                var b = this.fakeListItems.eq(a - 1),
                    c = this.list.offset().top,
                    d = b.offset().top,
                    e = b.innerHeight();
                return d + e - c
            },
            getScrollTop: function() {
                return this.listHolder.scrollTop()
            },
            setScrollTop: function(a) {
                this.listHolder.scrollTop(a)
            },
            createOption: function(a) {
                var b = document.createElement("span");
                b.className = this.options.optionClass, b.innerHTML = a.innerHTML, b.setAttribute(this.options.indexAttribute, this.optionIndex++);
                var c, d = a.getAttribute("data-image");
                return d && (c = document.createElement("img"), c.src = d, b.insertBefore(c, b.childNodes[0])), a.disabled && (b.className += " " + this.options.disabledClass), a.className && (b.className += " " + f(a.className, this.options.cloneClassPrefix)), b
            },
            createOptGroup: function(a) {
                var d, e, b = document.createElement("span"),
                    c = a.getAttribute("label");
                return d = document.createElement("span"), d.className = this.options.captionClass, d.innerHTML = c, b.appendChild(d), a.children.length && (e = this.createOptionsList(a), b.appendChild(e)), b.className = this.options.groupClass, b
            },
            createOptionContainer: function() {
                var a = document.createElement("li");
                return a
            },
            createOptionsList: function(b) {
                var c = this,
                    d = document.createElement("ul");
                return a.each(b.children, function(a, b) {
                    var f, e = c.createOptionContainer(b);
                    switch (b.tagName.toLowerCase()) {
                        case "option":
                            f = c.createOption(b);
                            break;
                        case "optgroup":
                            f = c.createOptGroup(b)
                    }
                    d.appendChild(e).appendChild(f)
                }), d
            },
            refresh: function() {
                this.storedSelectHTML !== this.element.prop("innerHTML") && this.rebuildList();
                var a = jcf.getInstance(this.listHolder);
                a && a.refresh(), this.scrollToActiveOption(), this.refreshSelectedClass()
            },
            destroy: function() {
                this.listHolder.off("jcf-mousewheel", this.preventWheelHandler), this.listHolder.off("jcf-pointerdown", this.indexSelector, this.onSelectItem), this.listHolder.off("jcf-pointerover", this.indexSelector, this.onHoverItem), this.listHolder.off("jcf-pointerdown", this.onPress)
            }
        });
        var f = function(a, b) {
                return a ? a.replace(/[\s]*([\S]+)+[\s]*/gi, b + "$1 ") : ""
            },
            g = function() {
                function b(a) {
                    a.preventDefault()
                }
                var a = jcf.getOptions().unselectableClass;
                return function(c) {
                    c.addClass(a).on("selectstart", b)
                }
            }()
    }(jQuery, this),
    function(a, b) {
        function h(b, d, h) {
            var i;
            document.body && (d = "number" == typeof d ? {
                duration: d
            } : d || {}, c = c || a("html, body"), i = d.container || c, "number" == typeof b && (b = {
                top: b
            }), e && f && e.off(g, f), d.wheelBehavior && "none" !== d.wheelBehavior && (f = function(a) {
                "stop" === d.wheelBehavior ? (i.off(g, f), i.stop()) : "ignore" === d.wheelBehavior && a.preventDefault()
            }, e = i.on(g, f)), i.stop().animate({
                scrollLeft: b.left,
                scrollTop: b.top
            }, d.duration, function() {
                f && i.off(g, f), a.isFunction(h) && h()
            }))
        }

        function i(b) {
            this.options = a.extend({
                anchorLinks: 'a[href^="#"]',
                container: null,
                extraOffset: null,
                activeClasses: null,
                easing: "swing",
                animMode: "duration",
                animDuration: 800,
                animSpeed: 1500,
                anchorActiveClass: "active",
                sectionActiveClass: "section-active",
                wheelBehavior: "stop",
                useNativeAnchorScrolling: !1
            }, b), this.init()
        }
        var c, e, f, d = a(window),
            g = "onwheel" in document || document.documentMode >= 9 ? "wheel" : "mousewheel DOMMouseScroll";
        i.prototype = {
            init: function() {
                this.initStructure(), this.attachEvents()
            },
            initStructure: function() {
                this.container = a(this.options.container ? this.options.container : "html,body"), this.scrollContainer = this.options.container ? this.container : d, this.anchorLinks = a(this.options.anchorLinks)
            },
            getAnchorTarget: function(b) {
                var c = a(b).attr("href");
                return a(c.length > 1 ? c : "html")
            },
            getTargetOffset: function(a) {
                if (a.length) {
                    var b = a.offset().top;
                    return this.options.container && (b -= this.container.offset().top - this.container.prop("scrollTop")), "number" == typeof this.options.extraOffset ? b -= this.options.extraOffset : "function" == typeof this.options.extraOffset && (b -= this.options.extraOffset(a)), {
                        top: b
                    }
                }
                return {
                    top: 0
                }
            },
            attachEvents: function() {
                var b = this;
                this.options.activeClasses && (this.anchorData = [], this.anchorLinks.each(function() {
                    var e, c = jQuery(this),
                        d = b.getAnchorTarget(c);
                    a.each(b.anchorData, function(a, b) {
                        b.block[0] === d[0] && (e = b)
                    }), e ? e.link = e.link.add(c) : b.anchorData.push({
                        link: c,
                        block: d
                    })
                }), this.resizeHandler = function() {
                    b.recalculateOffsets()
                }, this.scrollHandler = function() {
                    b.refreshActiveClass()
                }, this.recalculateOffsets(), this.scrollContainer.on("scroll", this.scrollHandler), d.on("resize", this.resizeHandler)), this.clickHandler = function(a) {
                    b.onClick(a)
                }, this.options.useNativeAnchorScrolling || this.anchorLinks.on("click", this.clickHandler)
            },
            recalculateOffsets: function() {
                var b = this;
                a.each(this.anchorData, function(a, c) {
                    c.offset = b.getTargetOffset(c.block), c.height = c.block.outerHeight()
                }), this.refreshActiveClass()
            },
            refreshActiveClass: function() {
                function h(a, c, d) {
                    a.toggleClass(b.options.anchorActiveClass, d), c.toggleClass(b.options.sectionActiveClass, d)
                }
                var b = this,
                    c = !1,
                    e = this.container.prop("scrollHeight"),
                    f = this.scrollContainer.height(),
                    g = this.options.container ? this.container.prop("scrollTop") : d.scrollTop();
                return this.options.customScrollHandler ? void this.options.customScrollHandler.call(this, g, this.anchorData) : (this.anchorData.sort(function(a, b) {
                    return a.offset.top - b.offset.top
                }), void a.each(this.anchorData, function(a) {
                    var d = b.anchorData.length - a - 1,
                        i = b.anchorData[d],
                        j = "parent" === b.options.activeClasses ? i.link.parent() : i.link;
                    g >= e - f ? d === b.anchorData.length - 1 ? h(j, i.block, !0) : h(j, i.block, !1) : !c && (g >= i.offset.top - 1 || 0 === d) ? (c = !0, h(j, i.block, !0)) : h(j, i.block, !1)
                }))
            },
            calculateScrollDuration: function(a) {
                var b;
                return "speed" === this.options.animMode ? (b = Math.abs(this.scrollContainer.scrollTop() - a.top), b / this.options.animSpeed * 1e3) : this.options.animDuration
            },
            onClick: function(a) {
                var b = this.getAnchorTarget(a.currentTarget),
                    c = this.getTargetOffset(b);
                a.preventDefault(), h(c, {
                    container: this.container,
                    wheelBehavior: this.options.wheelBehavior,
                    duration: this.calculateScrollDuration(c)
                })
            },
            destroy: function() {
                this.options.activeClasses && (d.off("resize", this.resizeHandler), this.scrollContainer.off("scroll", this.scrollHandler)), this.anchorLinks.off("click", this.clickHandler)
            }
        }, a.extend(i, {
            scrollTo: function(a, b, c) {
                h(a, b, c)
            }
        }), b.SmoothScroll = i
    }(jQuery, this),
    function(a) {
        function b(b) {
            this.options = a.extend({
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }, b), this.init()
        }
        b.prototype = {
            init: function() {
                this.findStructure(), this.getInfoWindowContent(), this.createMap(), this.createMarker(), this.createInfoWindow()
            },
            findStructure: function() {
                this.container = a(this.options.container), this.lat = parseFloat(this.container.attr("data-lat")), this.lng = parseFloat(this.container.attr("data-lng")), this.coords = new google.maps.LatLng(this.lat, this.lng), this.zoom = parseInt(this.container.attr("data-zoom")), this.infoWindowContent = this.options.mapInfoContent, this.mapOptions = {
                    mapTypeId: this.options.mapTypeId,
                    panControl: this.options.panControl,
                    zoomControl: this.options.zoomControl,
                    streetViewControl: this.options.streetViewControl,
                    mapTypeControl: this.options.mapTypeControl,
                    center: this.coords,
                    scrollwheel: this.options.scrollwheel,
                    zoom: this.zoom
                }
            },
            getInfoWindowContent: function() {
                this.infoWindowContent = this.options.mapInfoContent
            },
            createMap: function() {
                this.map = new google.maps.Map(this.container.get(0), this.mapOptions)
            },
            createMarker: function() {
                this.marker = new google.maps.Marker({
                    icon: this.options.marker,
                    position: this.coords
                }), this.marker.setMap(this.map)
            },
            createInfoWindow: function() {
                var a = this;
                this.infoWindow = new google.maps.InfoWindow({
                    content: this.infoWindowContent.get(0)
                }), this.marker.addListener("click", function() {
                    a.infoWindow.open(a.map, a.marker)
                })
            }
        }, a.fn.googleMapAPI = function(c) {
            return this.each(function() {
                a(this).data("GoogleMapAPI", new b(a.extend(c, {
                    container: this
                })))
            })
        }
    }(jQuery), ResponsiveHelper = function(a) {
        function f() {
            var e = d.width();
            e !== c && (c = e, a.each(b, function(b, c) {
                a.each(c.data, function(a, b) {
                    b.currentActive && !g(b.range[0], b.range[1]) && (b.currentActive = !1, "function" == typeof b.disableCallback && b.disableCallback())
                }), a.each(c.data, function(a, b) {
                    !b.currentActive && g(b.range[0], b.range[1]) && (b.currentActive = !0, "function" == typeof b.enableCallback && b.enableCallback())
                })
            }))
        }

        function g(a, b) {
            var c = "";
            return a > 0 && (c += "(min-width: " + a + "px)"), b < 1 / 0 && (c += (c ? " and " : "") + "(max-width: " + b + "px)"), h(c, a, b)
        }

        function h(a, b, d) {
            return window.matchMedia && e ? matchMedia(a).matches : window.styleMedia ? styleMedia.matchMedium(a) : window.media ? media.matchMedium(a) : c >= b && c <= d
        }

        function i(a) {
            var b = a.split(".."),
                c = parseInt(b[0], 10) || -(1 / 0),
                d = parseInt(b[1], 10) || 1 / 0;
            return [c, d].sort(function(a, b) {
                return a - b
            })
        }
        var c, b = [],
            d = a(window),
            e = !1;
        return window.matchMedia && (window.Window && window.matchMedia === Window.prototype.matchMedia ? e = !0 : window.matchMedia.toString().indexOf("native") > -1 && (e = !0)), d.bind("load resize orientationchange", f), {
            addRange: function(d) {
                var e = {
                    data: {}
                };
                a.each(d, function(a, b) {
                    e.data[a] = {
                        range: i(a),
                        enableCallback: b.on,
                        disableCallback: b.off
                    }
                }), b.push(e), c = null, f()
            }
        }
    }(jQuery);