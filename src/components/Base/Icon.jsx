import React from 'react'
import PropTypes from "prop-types";
import {composer, oneOfConstants} from '../../utils';

/**
 * User: N <n@sovrin.de>
 * Date: 15.03.2018
 * Time: 21:54
 */
export default class Icon extends React.Component {

    static Size = {
        BIG: '2x',
        BIGGER: '3x',
        BIGGEST: '4x'
    };

    static Type = {
        ARROW_UP: 'arrow-up',
        ARROW_RIGHT: 'arrow-right',
        ARROW_DOWN: 'arrow-down',
        ARROW_LEFT: 'arrow-left',
        UPWARD: 'upward',
        FORWARD: 'forward',
        DOWNWARD: 'downward',
        BACK: 'back',
        CARET: 'caret',
        MENU: 'menu',
        APPS: 'apps',
        MORE_HORIZ: 'more-horiz',
        MORE_VERT: 'more-vert',
        RESIZE_HORIZ: 'resize-horiz',
        RESIZE_VERT: 'resize-vert',
        PLUS: 'plus',
        MINUS: 'minus',
        CROSS: 'cross',
        CHECK: 'check',
        STOP: 'stop',
        SHUTDOWN: 'shutdown',
        REFRESH: 'refresh',
        SEARCH: 'search',
        FLAG: 'flag',
        BOOKMARK: 'bookmark',
        EDIT: 'edit',
        DELETE: 'delete',
        SHARE: 'share',
        DOWNLOAD: 'download',
        UPLOAD: 'upload',
        MAIL: 'mail',
        PEOPLE: 'people',
        MESSAGE: 'message',
        PHOTO: 'photo',
        TIME: 'time',
        LOCATION: 'location',
        LINK: 'link',
        EMOJI: 'emoji'
    };

    static propTypes = {
        loading: PropTypes.bool,
        form: PropTypes.bool,
        size: oneOfConstants(Icon.Size),
        type: PropTypes.oneOfType([
            oneOfConstants(Icon.Type),
            PropTypes.shape({
                before: PropTypes.string
            }),
            PropTypes.shape({
                after: PropTypes.string
            })
        ]).isRequired,
        compact: PropTypes.bool
    };

    static defaultProps = {
        place: 'before'
    };

    /**
     *
     * @returns {*}
     */
    render() {
        let {
            className,
            type,
            compact,
            size,
            form,
            loading,
            place,
            ..._left
        } = this.props;

        if (type.left || type.right) {
            type = Object.values(type).shift();
        }

        className = composer('icon',
            className,
            {[`icon-${type}`]: (type)},
            [place, size].map(p => `icon-${p}`),
            {
                'form-icon': (form),
                loading,
                compact
            });

        return (
            <i
                className={className}
                {..._left}
            />
        );
    }
}
