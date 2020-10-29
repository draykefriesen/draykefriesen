import React from "react"
import {
  IoIosCall,
  IoMdAnalytics,
  IoMdArrowRoundUp,
  IoMdBriefcase,
} from "react-icons/io"
import { MdEdit } from "react-icons/md"
import { AiOutlineCloudServer } from "react-icons/ai"
import styles from "./pricingSection.module.scss"

const PricingSection = ({ pricingRef }) => {
  return (
    <section className={styles.sectionWrapper} ref={pricingRef}>
      <div className={styles.pricingMainTextArea}>
        <h2 className={styles.pricingMainHeader}>
          <span>$0</span> Down,
          <br className={styles.mdBreak} /> <span>$160</span> Per Month,{" "}
          <br className={styles.alwaysBreak} />
          No Minimum Contract
        </h2>
        <p className={styles.pricingMainText}>
          Don't spend massive amounts up-front for a custom, hand-coded website,
          get a standard 5 page small business website for $<b>0</b>. If you
          need something more custom I can work with you to discuss all your
          options and pricing.
        </p>
      </div>
      <ul className={styles.listGroup}>
        <li className={styles.listItem}>
          <IoIosCall className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Personal Customer Service</h3>
          <p className={styles.listItemText}>
            call anytime for direct assistance from me, no call centers or time
            spent on hold.
          </p>
        </li>
        <li className={styles.listItem}>
          <AiOutlineCloudServer className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Everything Included</h3>
          <p className={styles.listItemText}>
            No additional costs for hosting or maintenance.
          </p>
        </li>
        <li className={styles.listItem}>
          <MdEdit className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Edits</h3>
          <p className={styles.listItemText}>
            Add new photos, change colors, make layout adjustments. Call with
            your changes and it will be done the same day.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoMdAnalytics className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Analytics</h3>
          <p className={styles.listItemText}>
            Get set up with Google analytics for free to monitor your traffic.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoMdBriefcase className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Content Ownership</h3>
          <p className={styles.listItemText}>
            You own your domain, and all your content. Cancel at anytime, taking
            your property with you.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoMdArrowRoundUp className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Scale Up</h3>
          <p className={styles.listItemText}>
            Add custom functionality or third party integrations as you need.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default PricingSection
