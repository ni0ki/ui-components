import * as React from 'react'

const styles = require('./styles.css')

export interface Props {
  label: string
}

export const Button: React.StatelessComponent<Props> = (props): JSX.Element => {
  return <button className={styles.button} type="button">{props.label}</button>
}

