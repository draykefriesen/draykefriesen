import React from "react"
import PricingIllustration from "../../../media/svg/pricing-section-illustration.svg"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import styles from "./pricingSection.module.scss"

const PricingSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <PricingIllustration className={styles.illustration} />
      <div className={styles.pricingMainTextArea}>
        <h2 className={styles.pricingMainHeader}>
          <span>$0</span> Down, <span>$150</span> Per Month,
          <br />
          No Minimum Contract
        </h2>
        <p className={styles.pricingMainText}>
          Don't spend massive amounts up-front for a custom, hand-coded website,
          get a standard 5 page small business website for $0. If you need
          something more custom I can work with you to discuss all your options
          and pricing.
        </p>
      </div>
      <ul className={styles.listGroup}>
        <li className={styles.listItem}>
          <IoIosCheckmarkCircleOutline className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>24/7 Customer Service</h3>
          <p className={styles.listItemText}>
            call anytime for direct assistance from me, no call centers or time
            spent on hold.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoIosCheckmarkCircleOutline className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Hosting Included</h3>
          <p className={styles.listItemText}>
            No additional costs for hosting, its built right into the monthly
            payment.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoIosCheckmarkCircleOutline className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Free Edits</h3>
          <p className={styles.listItemText}>
            Add new photos, change colors, make layout adjustments. Call with
            your changes and it will be done the same day.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoIosCheckmarkCircleOutline className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Analytics</h3>
          <p className={styles.listItemText}>
            Get set up with Google analytics for free to monitor your traffic
            and where it comes from.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoIosCheckmarkCircleOutline className={styles.checkmark} />
          <h3 className={styles.listItemHeader}>Content Ownership</h3>
          <p className={styles.listItemText}>
            You own your domain, and all your content. Cancel at anytime, taking
            your property with you.
          </p>
        </li>
        <li className={styles.listItem}>
          <IoIosCheckmarkCircleOutline className={styles.checkmark} />
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
