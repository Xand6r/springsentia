import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useClickAway } from "react-use";
import { toggleStateValue } from "utilities";

import { DEFAULT_STRUCTURE } from "data/navbar";

import generalStyles from "../dropdown.module.scss";
import styles from "./women.module.scss";


export default function Index({ open, onClose }) {
    if (!open) {
        return "";
    }
    const [activeSection, setActiveSection] = useState("");
    const [activeSubsection, setActiveSubsection] = useState("");

    useEffect(()=>{
        setActiveSubsection('');
    }, [activeSection]);

    return (
        <div
            className={`${generalStyles.nav_dropdown} ${styles.women_dropdown}`}
        >
            <section
                className={`${generalStyles.section} ${generalStyles.first__section}`}
            >
                <p>women</p>
                <div className={generalStyles.section__divider} />
                <div>
                    <h6>see all</h6>
                    {Object.keys(DEFAULT_STRUCTURE).map((oneKey, index) => (
                        <h6
                            key={index + oneKey}
                            className={
                                oneKey === activeSection &&
                                generalStyles.__active
                            }
                            onClick={() =>
                                toggleStateValue(oneKey, setActiveSection)
                            }
                        >
                            {oneKey}
                        </h6>
                    ))}
                </div>
            </section>

            {activeSection ? (
                <section
                    className={`${generalStyles.section} ${generalStyles.second__section}`}
                >
                    <p>{activeSection}</p>
                    <div className={generalStyles.section__divider} />
                    <div>
                        {DEFAULT_STRUCTURE[activeSection].map(
                            (oneKey, index) => (
                                <h6
                                    key={index + oneKey.name}
                                    className={
                                        oneKey.name === activeSubsection &&
                                        generalStyles.__active
                                    }
                                    onClick={() =>
                                        toggleStateValue(oneKey.name, setActiveSubsection)
                                    }
                                >
                                    {oneKey.name}
                                </h6>
                            )
                        )}
                    </div>
                </section>
            ) : (
                ""
            )}

            {
                activeSubsection && DEFAULT_STRUCTURE[activeSection].find(({name}) => name === activeSubsection)?.image ? (
                    <section className={generalStyles.image__section}>
                        <div className={generalStyles.image__wrapper}>
                            <Image alt="" layout="fill" src={DEFAULT_STRUCTURE[activeSection].find(({name}) => name === activeSubsection)?.image} />
                        </div>
                    </section>
                ) : ''
            }

        </div>
    );
}
