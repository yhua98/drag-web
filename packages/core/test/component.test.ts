import { test, expect } from 'vitest'
import { defineComponent, render,Component, getPropsType } from '../src/component'

const component = defineComponent("Text", { text: "Hello", value: "LP" }, (props) => {
    return props.text;
})
const component1 = defineComponent("Text", { text: "Hello", value: "LP", component }, (props) => {
    return props.text;
})

test('component', async () => {
    expect(render(component), "create component").toBe("Hello")
})

test("componentProps", async () => {
    const props = getPropsType(component1)
    console.log(props)
    expect(props, "component props").toEqual({ text: String, value: String, component: Component })
})