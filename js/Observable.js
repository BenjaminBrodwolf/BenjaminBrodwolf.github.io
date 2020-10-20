const execute = (...fns) => returnValue => {
    fns.reduce((_, fn) => fn);
    return returnValue
}

const ObsObject = listeners => callback => val => obsFn => obsFn(listeners)(callback)(val)

const InitObservable = initVal => ObsObject([])(x => x)(initVal)

const getValue = listeners => callback => val => val

const addListener = listeners => callback => val => newCallback => execute(
    listeners.push(newCallback),
    newCallback(val)
)(ObsObject(listeners)(newCallback)(val))

const setValue = listeners => callback => val => newVal => execute(
    listeners.forEach(callback => callback(newVal))
)(ObsObject(listeners)(callback)(newVal))


const Observable = value => {
    const listeners = [];
    return {
        addListener: callback => {
            listeners.push(callback); // callback is a function
            callback(value);
        },
        getValue: () => value,
        setValue: newValue => listeners.forEach(callback => callback(value))
    }
};