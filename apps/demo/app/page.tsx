'use client';
import css from './page.module.css'
import {render, WithProps} from '@lc/core'
import { Text, Input,renderProp } from '@lc/components'

export default function Home() {
  WithProps({text: '这是共同拥有文本', value:0},[Text, Input]);

  // const [props, dispatch] = useProps({text: '这是共同拥有文本'});

  return (
    <div className={css.main}>
      <div className={css['side-nav']}>Nav</div>
      <div className={css['content']}>
        <div>{render(Text)}</div>
        <div>{render(Input)}</div>
      </div>
      <div>
        <div>{renderProp(Text)}</div>
        <div>{renderProp(Input)}</div>
      </div>
    </div>
  )
}
