/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Countrty/Country";
import './Countries.css'

const Countries = () => {

    
        const[countries, setCountries] = useState([]);
        const [visitedCountries, setVisitedCountries] = useState([]);


        useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data=> setCountries(data));
        },[])


        const handleVisitedCountry = country =>{
            console.log(country);
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    

    return (
        <div>
            <h1>React Countries:{countries.length}</h1>
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country =><Country
                    handleVisitedCountry={handleVisitedCountry}
                     key={country.cca3} 
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;