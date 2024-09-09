// @ts-ignore
import React from "react";
import {DispathType} from './props'

export type PropValue = string | number;

export type Props = Record<string, any>;

export type Render<T extends Props> = (props: T, dispatch: DispathType<T>) => React.ReactNode;

type ChildrenType<T extends Props> = Component<T>[] | React.ReactNode[];

export class Component<T extends Props> {
    name: string;
    props: T;
    children: ChildrenType<T>;
    render: Render<T>;
    _props: T;
    _setProps: DispathType<T>;
    constructor(
        name: string,
        props: T,
        children: ChildrenType<T>,
        render: Render<T>
    ) {
        this.name = name;
        this.props = props;
        this.children = children;
        this.render = render;
        this._props = null as any;
        this._setProps = null as any;
    }
}

export function defineComponent<T extends Props>(
    name: string,
    props: T,
    render: Render<T>
): Component<T> {
    const component: Component<T> = new Component(name, props, [], render);
    return component;
}

export function defineComponentWithChildren<T extends Props>(
    name: string,
    props: T,
    children: ChildrenType<T>,
    render: Render<T>
): Component<T> {
    const component: Component<T> = new Component(name, props, children, render);
    return component;
}

type PropType<T extends Props> = String | Number | Component<T>
export type PropsType<T extends Props> = Record<string, PropType<T>>;

// export function getPropsType<T extends Props>(component: Component<T>): PropsType<T> {
//     const props: Props = Object.create(null);
//     for (const key in component.props) {
//         if (Object.prototype.hasOwnProperty.call(component.props, key)) {
//             props[key] = component.props[key].constructor;
//         }
//     }
//     return props;
// }

export function render<T extends Props>(component: Component<T>): React.ReactNode {
    return component.render(component._props, component._setProps);
}

// export function useProps<T extends Props>(component: Component<T>):[T, React.Dispatch<React.SetStateAction<T>>] {
//     const [props, setProps] = React.useState(component.props);
//     component._props = props;
//     component._setProps = setProps;
//     return [props, setProps];
// }

// export function useRefsComponent<T extends Props>(components: Component<T>[]){
//     components.forEach((component)=>useProps(component));
// }
