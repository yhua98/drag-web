// @ts-ignore
import React, { useState } from 'react';
import { Component, type Props } from './component';

export function WithProps<T extends Props>(props:Partial<T>, children:Component<T>[]) {
    const [_props, _setProps] = useState(props);
    return children.map((child) => {
        child._props = _props;
        child._setProps = _setProps;
        return child
    });
}