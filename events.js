const EVENT = Object.assign(Object.create(null), {
    // Mouse events
    CLICK: 'click',
    RIGHTCLICK: 'rightclick',
    DBLCLICK: 'dblclick',
    AUXCLICK: 'auxclick',
    MOUSEDOWN: 'mousedown',
    MOUSEUP: 'mouseup',
    MOUSEOVER: 'mouseover',
    MOUSEOUT: 'mouseout',
    MOUSEMOVE: 'mousemove',
    MOUSEENTER: 'mouseenter',
    MOUSELEAVE: 'mouseleave',

    // Non-existent event; will never fire. This exists as a mouse counterpart to
    // POINTERCANCEL.
    MOUSECANCEL: 'mousecancel',

    // Selection events.
    // https://www.w3.org/TR/selection-api/
    SELECTIONCHANGE: 'selectionchange',
    SELECTSTART: 'selectstart', // IE, Safari, Chrome

    // Wheel events
    // http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
    WHEEL: 'wheel',

    // Key events
    KEYPRESS: 'keypress',
    KEYDOWN: 'keydown',
    KEYUP: 'keyup',

    // Focus
    BLUR: 'blur',
    FOCUS: 'focus',
    DEACTIVATE: 'deactivate', // IE only
    FOCUSIN: 'focusin',
    FOCUSOUT: 'focusout',

    // Forms
    CHANGE: 'change',
    RESET: 'reset',
    SELECT: 'select',
    SUBMIT: 'submit',
    INPUT: 'input',
    PROPERTYCHANGE: 'propertychange', // IE only

    // Drag and drop
    DRAGSTART: 'dragstart',
    DRAG: 'drag',
    DRAGENTER: 'dragenter',
    DRAGOVER: 'dragover',
    DRAGLEAVE: 'dragleave',
    DROP: 'drop',
    DRAGEND: 'dragend',

    // Touch events
    // Note that other touch events exist, but we should follow the W3C list here.
    // http://www.w3.org/TR/touch-events/#list-of-touchevent-types
    TOUCHSTART: 'touchstart',
    TOUCHMOVE: 'touchmove',
    TOUCHEND: 'touchend',
    TOUCHCANCEL: 'touchcancel',

    // Misc
    BEFOREUNLOAD: 'beforeunload',
    CONSOLEMESSAGE: 'consolemessage',
    CONTEXTMENU: 'contextmenu',
    DEVICECHANGE: 'devicechange',
    DEVICEMOTION: 'devicemotion',
    DEVICEORIENTATION: 'deviceorientation',
    DOMCONTENTLOADED: 'DOMContentLoaded',
    ERROR: 'error',
    HELP: 'help',
    LOAD: 'load',
    LOSECAPTURE: 'losecapture',
    ORIENTATIONCHANGE: 'orientationchange',
    READYSTATECHANGE: 'readystatechange',
    RESIZE: 'resize',
    SCROLL: 'scroll',
    UNLOAD: 'unload',

    // Media events
    CANPLAY: 'canplay',
    CANPLAYTHROUGH: 'canplaythrough',
    DURATIONCHANGE: 'durationchange',
    EMPTIED: 'emptied',
    ENDED: 'ended',
    LOADEDDATA: 'loadeddata',
    LOADEDMETADATA: 'loadedmetadata',
    PAUSE: 'pause',
    PLAY: 'play',
    PLAYING: 'playing',
    PROGRESS: 'progress',
    RATECHANGE: 'ratechange',
    SEEKED: 'seeked',
    SEEKING: 'seeking',
    STALLED: 'stalled',
    SUSPEND: 'suspend',
    TIMEUPDATE: 'timeupdate',
    VOLUMECHANGE: 'volumechange',
    WAITING: 'waiting',

    // Media Source Extensions events
    // https://www.w3.org/TR/media-source/#mediasource-events
    SOURCEOPEN: 'sourceopen',
    SOURCEENDED: 'sourceended',
    SOURCECLOSED: 'sourceclosed',
    // https://www.w3.org/TR/media-source/#sourcebuffer-events
    ABORT: 'abort',
    UPDATE: 'update',
    UPDATESTART: 'updatestart',
    UPDATEEND: 'updateend',

    // HTML 5 History events
    // See http://www.w3.org/TR/html5/browsers.html#event-definitions-0
    HASHCHANGE: 'hashchange',
    PAGEHIDE: 'pagehide',
    PAGESHOW: 'pageshow',
    POPSTATE: 'popstate',

    // Copy and Paste
    // Support is limited. Make sure it works on your favorite browser
    // before using.
    // http://www.quirksmode.org/dom/events/cutcopypaste.html
    COPY: 'copy',
    PASTE: 'paste',
    CUT: 'cut',
    BEFORECOPY: 'beforecopy',
    BEFORECUT: 'beforecut',
    BEFOREPASTE: 'beforepaste',

    // HTML5 online/offline events.
    // http://www.w3.org/TR/offline-webapps/#related
    ONLINE: 'online',
    OFFLINE: 'offline',

    // HTML 5 worker events
    MESSAGE: 'message',
    CONNECT: 'connect',

    // Service Worker Events - ServiceWorkerGlobalScope context
    // See https://w3c.github.io/ServiceWorker/#execution-context-events
    // Note: message event defined in worker events section
    INSTALL: 'install',
    ACTIVATE: 'activate',
    FETCH: 'fetch',
    FOREIGNFETCH: 'foreignfetch',
    MESSAGEERROR: 'messageerror',

    // Service Worker Events - Document context
    // See https://w3c.github.io/ServiceWorker/#document-context-events
    STATECHANGE: 'statechange',
    UPDATEFOUND: 'updatefound',
    CONTROLLERCHANGE: 'controllerchange',

    // CSS animation events.
    ANIMATIONSTART: 'animationstart',
    ANIMATIONEND: 'animationend',
    ANIMATIONITERATION: 'animationiteration',

    // CSS transition events. Based on the browser support described at:
    // https://developer.mozilla.org/en/css/css_transitions#Browser_compatibility
    TRANSITIONEND: 'transitionend',

    // W3C Pointer Events
    // http://www.w3.org/TR/pointerevents/
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
    POINTERCANCEL: 'pointercancel',
    POINTERMOVE: 'pointermove',
    POINTEROVER: 'pointerover',
    POINTEROUT: 'pointerout',
    POINTERENTER: 'pointerenter',
    POINTERLEAVE: 'pointerleave',
    GOTPOINTERCAPTURE: 'gotpointercapture',
    LOSTPOINTERCAPTURE: 'lostpointercapture',

    // IE specific events.
    // See http://msdn.microsoft.com/en-us/library/ie/hh772103(v=vs.85).aspx
    // Note: these events will be supplanted in IE11.
    MSGESTURECHANGE: 'MSGestureChange',
    MSGESTUREEND: 'MSGestureEnd',
    MSGESTUREHOLD: 'MSGestureHold',
    MSGESTURESTART: 'MSGestureStart',
    MSGESTURETAP: 'MSGestureTap',
    MSGOTPOINTERCAPTURE: 'MSGotPointerCapture',
    MSINERTIASTART: 'MSInertiaStart',
    MSLOSTPOINTERCAPTURE: 'MSLostPointerCapture',
    MSPOINTERCANCEL: 'MSPointerCancel',
    MSPOINTERDOWN: 'MSPointerDown',
    MSPOINTERENTER: 'MSPointerEnter',
    MSPOINTERHOVER: 'MSPointerHover',
    MSPOINTERLEAVE: 'MSPointerLeave',
    MSPOINTERMOVE: 'MSPointerMove',
    MSPOINTEROUT: 'MSPointerOut',
    MSPOINTEROVER: 'MSPointerOver',
    MSPOINTERUP: 'MSPointerUp',

    // Native IMEs/input tools events.
    TEXT: 'text',
    // The textInput event is supported in IE9+, but only in lower case. All other
    // browsers use the camel-case event name.
    TEXTINPUT: 'textInput',
    COMPOSITIONSTART: 'compositionstart',
    COMPOSITIONUPDATE: 'compositionupdate',
    COMPOSITIONEND: 'compositionend',

    // The beforeinput event is initially only supported in Safari. See
    // https://bugs.chromium.org/p/chromium/issues/detail?id=342670 for Chrome
    // implementation tracking.
    BEFOREINPUT: 'beforeinput',

    // Webview tag events
    // See https://developer.chrome.com/apps/tags/webview
    EXIT: 'exit',
    LOADABORT: 'loadabort',
    LOADCOMMIT: 'loadcommit',
    LOADREDIRECT: 'loadredirect',
    LOADSTART: 'loadstart',
    LOADSTOP: 'loadstop',
    RESPONSIVE: 'responsive',
    SIZECHANGED: 'sizechanged',
    UNRESPONSIVE: 'unresponsive',

    // HTML5 Page Visibility API.  See details at
    // `goog.labs.dom.PageVisibilityMonitor`.
    VISIBILITYCHANGE: 'visibilitychange',

    // LocalStorage event.
    STORAGE: 'storage',

    // DOM Level 2 mutation events (deprecated).
    DOMSUBTREEMODIFIED: 'DOMSubtreeModified',
    DOMNODEINSERTED: 'DOMNodeInserted',
    DOMNODEREMOVED: 'DOMNodeRemoved',
    DOMNODEREMOVEDFROMDOCUMENT: 'DOMNodeRemovedFromDocument',
    DOMNODEINSERTEDINTODOCUMENT: 'DOMNodeInsertedIntoDocument',
    DOMATTRMODIFIED: 'DOMAttrModified',
    DOMCHARACTERDATAMODIFIED: 'DOMCharacterDataModified',

    // Print events.
    BEFOREPRINT: 'beforeprint',
    AFTERPRINT: 'afterprint',

    // Web app manifest events.
    BEFOREINSTALLPROMPT: 'beforeinstallprompt',
    APPINSTALLED: 'appinstalled'
});

/*
 **
 **
 */
const getMethods = (() => {
    const isFunction = o => f => typeof(o[f]) === "function";
    return function(o) {
        return o.prototype ?
            Object.getOwnPropertyNames(o.prototype).filter(isFunction(o)) :
            Object.getOwnPropertyNames(Reflect.getPrototypeOf(o)).filter(isFunction(o));
    }
})();

/*
 **
 **
 */
const getEventListeners = (() => {

    const kDOMEvents = new Set([...Object.entries(EVENT).map(([k, v]) => v).sort()]);
    const isDOMEvent = Set.prototype.has.bind(kDOMEvents);
    const matchesName = key => /^[Oo][Nn]/.test(key);
    return o => getMethods(o).filter(name => isDOMEvent(name) || matchesName(name));
})();

/*
 **
 **
 */
function getAllMethods(instance, methods = []) {
    if (!instance) return methods;
    methods.push(...Object.getOwnPropertyNames(instance).filter(isFunction(instance)));
    return getAllMethodsFromInstance(Reflect.getPrototypeOf(instance), methods);
}

/*
 **
 **
 */
function injectEvents(src, capture = false) {
    if (!src.handleEvent) {
        Object.defineProperty(handler, "handleEvent", {
            value: function(e) {
                let fn = src['on' + e.type].bind(src) || src[e.type].bind(src) || (e => {});
                fn.call(src, e);
            },
            enumerable: false,
        });
    }
    getEventListeners(src).forEach(type => {
        if (/^[Oo][Nn]/.test(type))
            src.addEventListener(type.slice(2), src, capture)
        else
            src.addEventListener(type, src, capture)
    });
}

/*
 **
 **
 */
function delegateEvents(src, handler, capture = false) {
    if (!src instanceof EventTarget) {
        console.warn('invalid eventtarget');
        return;
    }

    if (!handler.handleEvent) {
        Object.defineProperty(handler, "handleEvent", {
            value: function(e) {
                let fn = handler['on' + e.type] || handler[e.type] || (e => {});
                fn.call(handler, e);
            },
            enumerable: false,
        });
    }

    getEventListeners(handler).forEach(type => {
        if (/^[Oo][Nn]/.test(type))
            src.addEventListener(type.slice(2), handler, capture)
        else
            src.addEventListener(type, handler, capture)
    });
}

export { EVENT, getMethods, getAllMethods, getEventListeners, injectEvents, delegateEvents };