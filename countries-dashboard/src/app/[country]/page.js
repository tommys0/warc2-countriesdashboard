import styles from './page.module.css'
import Link from "next/link"

export default async function DetailPage({ params }) {
    const response =  await fetch(`https://restcountries.com/v3.1/name/${params.country}`)
    const data =  await response.json()
    const country = data[0]

    return (
        <main className={styles.main}>
            <div className={styles.country}>
                <h1>{country.name.common}</h1>
                <p>Official Name: {country.name.official}</p>
                <p>Area: {country.area.toLocaleString()} square kilometers</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Capital: {country.capital}</p>
                <p>Subregion: {country.subregion}</p>
                <p>Continent: {country.continents}</p>
                <Link href="/" className={styles.goBack}>Go Back</Link>
            </div>
        </main>
    )
}
