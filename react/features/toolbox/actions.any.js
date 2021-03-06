// @flow

import type { Dispatch } from 'redux';

import {
    SET_TOOLBOX_ENABLED,
    SET_TOOLBOX_VISIBLE
} from './actionTypes';

/**
 * Enables/disables the toolbox.
 *
 * @param {boolean} enabled - True to enable the toolbox or false to disable it.
 * @returns {{
 *     type: SET_TOOLBOX_ENABLED,
 *     enabled: boolean
 * }}
 */
export function setToolboxEnabled(enabled: boolean): Object {
    return {
        type: SET_TOOLBOX_ENABLED,
        enabled
    };
}

/**
 * Shows/hides the toolbox.
 *
 * @param {boolean} visible - True to show the toolbox or false to hide it.
 * @returns {Function}
 */
export function setToolboxVisible(visible: boolean): Object {
    return (dispatch: Dispatch<any>, getState: Function) => {
        const { toolbarConfig: { alwaysVisible } } = getState()['features/base/config'];

        if (!visible && alwaysVisible) {
            return;
        }

        dispatch({
            type: SET_TOOLBOX_VISIBLE,
            visible
        });
    };
}
