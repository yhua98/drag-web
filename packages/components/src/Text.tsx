// @ts-ignore
import React from 'react';
import { defineComponent } from '@lc/core'

export const Text = defineComponent<{text: string}>("Text", { text: "这是文本" }, (props) => {
    return <div>{props.text}</div>;
})

export const Input = defineComponent<{text: string}>("Input", { text: "输入内容" }, (props, dispatch) => {
    return <input type="text" value={props.text} onChange={(e) => {
        dispatch({ ...props, text: e.target.value })
    }} />;
})