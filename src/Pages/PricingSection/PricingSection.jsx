import React from "react";
import styles from "./PricingSection.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import { VscCheck } from "react-icons/vsc";

const showAlert = () => {
  alert("Thank you for choosing us");
};

function PricingSection() {
  return (
    <>
      <div id="pricing" className={styles.wholePage}>
        <div className={styles.container}>
          {/* Day Pass */}
          <div className={styles.dailyPlans} id="daily">
            {/* Header */}
            <div className={styles.header}>
              <h3>Day Pass</h3>
              <h1>₹1000</h1> {/* Updated currency symbol */}
              <h4>/Pass</h4>
            </div>
            {/* Features */}
            <div className={styles.featuresPlans} id="features">
              <ul className={styles.greenarrowbullet}>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  1 Day Pass
                </li>
                <br />
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  Free Gym Access
                </li>
                <br />
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  24 Hour Access
                </li>
              </ul>
            </div>
            {/* Button */}
            <button className={styles.btn1} onClick={showAlert}>
              Get Started
            </button>
          </div>

          {/* Monthly Plan */}
          <div className={styles.monthlyPlans} id="monthly">
            {/* Header */}
            <div className={styles.header}>
              <h3>Months to Month</h3>
              <span>
                <h1>₹1500</h1> {/* Updated currency symbol */}
              </span>
              <h3>/Month</h3>
            </div>
            {/* Features */}
            <div className={styles.featuresPlans} id="features">
              <ul className={styles.greenarrowbullet}>
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  ₹99 Joining Fee {/* Updated currency symbol */}
                </li>
                <br />
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  No Contract
                </li>
                <br />
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  Free Gym Access
                </li>
                <br />
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  1 Group Class Included
                </li>
                <br />
                <li>
                  <span>
                    <VscCheck />
                  </span>
                  24 Hour Access
                </li>
                <br />
              </ul>
            </div>
            {/* Button */}
            <div className={styles.btnDiv}>
              <button className={styles.btn} onClick={showAlert}>
                Get Started
              </button>
            </div>
          </div>

          {/* Membership */}
          <div className={styles.membership} id="heading">
            <div>
              <h4>
                <u>Membership</u>
              </h4>
            </div>

            <div className={styles.memberHeading}>
              <h2 className={styles.membershiph2}>From Punch Pass to Monthly or Annual</h2>
              <p>
                At gym base, we offer a wide range of memberships with options to
                suit every budget. Everything from One Day Pass, Punch Pass to
                Monthly Pass or Annual prepaid memberships. What's more, we
                won't tie you in a long-term contract, giving you greater
                flexibility.
              </p>
            </div>

            {/* Included plan details */}
            <div className={styles.header2}>
              <h2>Each plan included</h2>
              <ul className={styles.priceSectionList}>
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  The best Equipment Global Brands
                </li>
                <br />
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  The gym is open 24 hours a day, 7 days a week
                </li>
                <br />
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  Two safe payment methods
                </li>
                <br />
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  Group fitness classes included in the subscription price
                </li>
                <br />
                <li>
                  <span>
                    <CgArrowLongRight />
                  </span>
                  No long-term contract period
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingSection;