import React from 'react';
import styles from './page.module.css';
import Link from "next/link";

async function getData() {
    const res = await fetch('https://restcountries.com/v3.1/all');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    const data = await getData();

    return (
        <main className={styles.container}>
            {data.map((country, index) => (
                <div key={index} className={styles.countryCard}>
                    <h2>{country.name.common}</h2>
                </div>
            ))}
        </main>
    );
}