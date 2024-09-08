'use client';
import css from './page.module.css'
import {useRefsComponent, render, WithProps} from '@lc/core'
import { Text, Input,renderProp } from '@lc/components'

export default function Home() {
  // useRefsComponent([Text, Input]);
  WithProps({text: '这是共同拥有文本'},[Text, Input]);
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
