// @ts-ignore
import React from 'react';
import { Component, Props, PropValue, type DispathType } from '@lc/core';

type PropRendererType<P extends keyof Props>= {
    [K:string]:(prop:Props[P], dispatch:React.SetStateAction< Props[P]> ) => React.ReactNode;
};

const propRenders:PropRendererType<keyof Props> = {
    String: function(text:string, dispatch) {
        return <input type="text" value={text} onChange={(e) => {
            dispatch(e.target.value);
        }} />;
    },
    Number: function(num:number, dispatch) {
        return <input type="number" value={num} onChange={(e) => {
            dispatch(e.target.value);
        }} />;
    },
}

export function renderProp<T extends Props>(component: Component<T>) {
    return Object.keys(component.props)
    .filter((key) => Object.hasOwn(propRenders, component.props[key].constructor.name))
    .map((key) => {
        const type = component.props[key].constructor.name;
        // @ts-ignore
        const render = propRenders[type];
        return <div key={type}>
            {render(component._props[key], component._setProps[key])}
        </div>;
    })
}