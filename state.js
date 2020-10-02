const DEFAULT_GETSTATE_OPTIONS = {
    //useLocalStorage: true,
    resetState: false,
};

const addHistory = (() => {
    const MAX_HISTORY = 15;
    return function(state, history) {
        if (history.length === MAX_HISTORY) {
            history.shift();
        }
        history.push(state);
    }
})()


const { observeState, emitState } = (() => {
    const _observers = new Map();

    function observeState(id, fn) {
        let observers = _observers.get(id);
        if (!observers) {
            observers = [];
            _observers.set(id, observers);
        }
        observers.push(fn);
    };

    function emitState(previousState, state) {

    }

    return Object.assign(Object.create(null), { observeState, emitState });
})()

const { getState, getStateHistory, reloadState } = (() => {
    const _DEFAULT_KEY = '_SAVESTATE_DEFAULT_KEY';
    const _DEFAULT_STATE = Object.assign(Object.create(null), {});
    const _states = new Map();
    const _history = new Map();
    //_states.set(_DEFAULT_KEY, _DEFAULT_STATE);
    _history.set(_DEFAULT_KEY, []);

    const getStateHistory = (id = undefined) => _history.get(id) || _history.get(_DEFAULT_KEY);

    function reloadState(id = undefined) {
        let key = id || _DEFAULT_KEY;
        let savedState = localStorage.getItem(key);
        if (!savedState) localStorage.setItem(key, JSON.stringify({ state: {}, history: [] }));
        savedState = JSON.parse(localStorage.getItem(key));
        _states.set(key, savedState.state);
        _history.set(key, savedState.history);
        return savedState.state;

    }

    function getState(id = undefined, getStateOptions = {}) {
        let key = id || _DEFAULT_KEY;
        let state = _states.get(key);
        let history = _history.get(key);
        const { resetState } = { ...DEFAULT_GETSTATE_OPTIONS, ...getStateOptions };
        if (resetState) {
            // clear in memory and local storage states for key
            state = Object.assign(Object.create(null), {});
            history = new Array(20);
            _states.set(key, state);
            _history.set(key, history);
        }

        if (!state) {
            // still no state: Page reloaded check for localStorage
            let savedState = localStorage.getItem(key);
            if (savedState) {
                // state found in localStorage so load it
                savedState = JSON.parse(savedState);
                state = savedState.state;
                history = savedState.history;
                _states.set(key, state);
                _history.set(key, history);
            }
        }

        if (!state || !history) {
            console.error('no state found!');
            return;
        }

        // track history
        let previousState = Object.assign(Object.create(null), state);
        addHistory(previousState, history);


        return new Proxy(state, {
            defineProperty(target, name, descriptor) {
                previousState = Object.assign(Object.create(null), state);
                const result = Reflect.defineProperty(target, name, descriptor);
                localStorage.setItem(key, JSON.stringify({ state, history }));
                return target;
            },
            get(src, key, receiver) {
                //let result = Reflect.get(...arguments);
                //return result === null || result === undefined ? () => {} : result;
                return Reflect.get(...arguments);
            },
            set(src, key, value, receiver) {

                return Reflect.set(src, key, value, receiver);
            },
            apply(src, self, args) {
                Reflect.apply(src, self, args);
            }
        });
    }
    return Object.assign(Object.create(null), { getState, getStateHistory, reloadState });
})()


export { observeState, emitState, getState, getStateHistory, reloadState };