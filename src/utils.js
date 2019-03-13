const isProduction = process.env.NODE_ENV === 'production';

const composer = (...classes) => {
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

/**
 * User: Oleg Kamlowski <n@sovrin.de>
 * Date: 12.03.2019
 * Time: 21:58
 */
module.exports = {
    isProduction, composer
};
