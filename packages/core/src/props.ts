// @ts-ignore
import React, { useState } from 'react';
import { Component, type Props } from './component';

export function WithProps<T extends Props>(props:Partial<T>, components:Component<T>[]) {
    const [_props, _setProps] = useState(props);
    return components.map((child) => {
        /**
         * 此处需要改造，考虑到组件可能会有多个props，每个props都需要单独的useState，
         * 但是这样会导致组件的props变得非常复杂，所以需要考虑一种更好的方式，
         * 多个组件共享一个props，但是不同组件共享的props是不同的。
         * 因此需要考虑部分更新props的问题。
         */
        // @ts-ignore
        child._props = _props;
        // @ts-ignore
        child._setProps = _setProps;
        return child
    });
}