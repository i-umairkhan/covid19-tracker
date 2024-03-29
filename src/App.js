import { FormControl, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import InfoBox from './InfoBox';

function App() {
  const [countries,setCountries] = useState([])
  const [country,setCountry] = useState('worldwide')
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then(reponse => reponse.json())
      .then(data => {
        const countries = data.map(country => ({
          name : country.country,
          value : country.countryInfo.iso2
        }))
        setCountries(countries);
      });
    }
    getCountriesData();
  },[])

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className='app__header'>
      <h1>Covid-19 Tracker</h1>
      <FormControl className='app__dropdown'>
        <Select variant='outlined' onChange={onCountryChange} value={country}>
          <MenuItem value='worldwide'>Worldwide</MenuItem>
          {countries.map(country => {
            return(
              <MenuItem value={country.value}>{country.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      </div>
      <div className='app__stats'>
      <InfoBox title="Coronavirus Cases" cases={1000} total={3000}/>
      <InfoBox title="Recoverd" cases={1000} total={3000}/>
      <InfoBox title="Deaths" cases={1000} total={3000}/>
      </div>
    </div>
  );
}

export default App;
