import React from 'react';

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
        <main>

        </main>
    );
}
