// @ts-ignore
import React from 'react';
import { Component, Props, PropValue, type DispathType } from '@lc/core';

const propRenders = {
    String: function(text:string, dispatch:React.Dispatch<React.SetStateAction<string>>) {
        return <input type="text" value={text} onChange={(e) => {
            dispatch(e.target.value);
        }} />;
    },
    Number: function(value:number, dispatch: React.Dispatch<React.SetStateAction<number>>) {
        return <input type="number" value={value} onChange={(e) => {
            dispatch(Number(e.target.value));
        }} />;
    },
};

export function renderProp<T extends Props>(component: Component<T>) {
    return Object.keys(component.props)
    .filter((key) => Object.hasOwn(propRenders, component.props[key].constructor.name))
    .map((key) => {
        const type = component.props[key].constructor.name;
        // @ts-ignore
        const render = propRenders[type];
        return <div key={type}>
            {render(component._props[key], component._setProps['set_' + key as keyof DispathType<T>])}
        </div>;
    })
}