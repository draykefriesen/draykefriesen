import React from 'react'
import styles from './backgroundGradient.module.scss'

export const BackgroundGradientTop = ({section}) => {
    return (
        <div className={styles.topGradient} data-section={section}/>
    )
}

export const BackgroundGradientBottom = ({section}) => {
    return (
        <div className={styles.bottomGradient} data-section={section} />
    )
}

