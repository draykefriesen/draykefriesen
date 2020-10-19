import React from 'react'
import BackgroundChevron from "../../media/svg/background-chevron.svg"
import styles from './backgroundStripes.module.scss'

export const BackgroundStripes5 = () => {
    return (
        <div className={styles.backgroundStripes5}>
        <BackgroundChevron className={styles.backgroundChevron}/>
        <span />
        <span />
        <span />
      </div>
    )
}


export const BackgroundStripes2 = () => {
    return (
        <div className={styles.backgroundStripes2}>
        <BackgroundChevron className={styles.backgroundChevron}/>
        <span />
        <span />
      </div>
    )
}

