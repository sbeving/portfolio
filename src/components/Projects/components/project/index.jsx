'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, category, url, manageModal}) {
    const hover = {
        onMouseEnter: (e) => {manageModal(true, index, e.clientX, e.clientY)},
        onMouseLeave: (e) => {manageModal(false, index, e.clientX, e.clientY)}
    };

    // Only projects on a domain we control link out; demo hosts stay unlinked.
    if (url) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.project} {...hover}>
                <h2>{title}</h2>
                <p>{category}</p>
            </a>
        )
    }

    return (
        <div className={styles.project} {...hover}>
            <h2>{title}</h2>
            <p>{category}</p>
        </div>
    )
}
