// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './Home.css';
import { useFormik } from 'formik';
import { Input } from '@mui/material';
import { TextField, Button, FormControl } from '@mui/material';

export function Home() {
  // const [temp, setTemp] = useState('');
  // const [weather, setWeather] = useState();

  // // useEffect(() => {
  //   axios.get('https://goweather.herokuapp.com/weather/Curitiba')
  //   .then((response) => {
  //     setTemp(response.data.temperature);
  //     setWeather(response.data);
  //   })

  // }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: search
    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });

  const { handleChange, values, handleSubmit } = formik;
  const { email } = values

  function search (values) {
    
    alert(JSON.stringify(values, null, 2));

  }

  return (
    <form onSubmit={handleSubmit}>

      <TextField
        id="email"
        name="email"
        type="email"
        label="email"
        onChange={handleChange}
        value={email}
      />

      <Button
        type="submit"
        variant='contained'
      >
        Submit
      </Button>
    </form>
  );
}

export default Home