// @ts-ignore
import React, { useEffect } from 'react';
import { defineComponent } from '@lc/core'

export const Text = defineComponent<{ text: string,value:number }>("Text", { text: "这是文本",value:0 }, (props) => {
    return <div>{props.text}</div>;
})

export const Input = defineComponent<{ text: string, value: number }>("Input", { text: "输入内容", value: 0 }, (props, dispatch) => {
    return <div>
        <input type="text" value={props.text} onChange={(e) => {
            dispatch.text(e.target.value);
        }} />
    </div>;
})