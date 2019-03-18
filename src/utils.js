import immer from 'immer';
import {useState} from 'react';

/**
 *
 * @param initialValue
 * @returns {any[]}
 */
export const produce = (initialValue) => {
    const state = useState(initialValue);

    if (typeof initialValue === 'object') {
        const [val, updateValue] = state;

        return [
            val,
            updater => {
                updateValue(immer(updater));
            },
        ];
    }

    return state;
};

/**
 *
 * @param classes
 * @returns {string}
 */
export const composer = (...classes) => {
    let composed = [];

    if (classes.constructor !== Array) {
        classes = new Array(classes);
    }

    classes
        .filter((cls) => cls != null)
        .forEach((cls) => {
            switch (cls.constructor) {
                case String:
                case Number:
                    composed.push(cls);
                    break;
                case Array:
                    composed.push(composer(...cls));
                    break;
                case Object:
                    Object.keys(cls).forEach((item) => {
                        (cls[item]) && composed.push(item);
                    });
                    break;
            }
        });

    return composed.join(' ').trim();
};