// @ts-ignore
import React from 'react';
import { Component,Props } from '@lc/core';


const propRenders = {
    String: function <T extends { text: string }>(props: T, dispatch: React.Dispatch<React.SetStateAction<T>>) {
        return <input type="text" value={props.text} onChange={(e) => {
            dispatch({ ...props, text: e.target.value })
        }} />;
    },
}

export function renderProp<T extends Props>(component: Component<T>) {
    return Object.keys(component.props).filter((key) =>Object.hasOwn(propRenders,component.props[key].constructor.name)).map((key) => {
        const type = component.props[key].constructor.name;
        // @ts-ignore
        const render = propRenders[type];
        return <div key={type}>
            {render(component._props, component._setProps)}
        </div>;
    })
}