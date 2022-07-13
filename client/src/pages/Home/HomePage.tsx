import React, { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from "axios";
import { Container } from '@mui/material';
import { ProgressBar } from '../../components/global';
import './HomePage.css';

function Homepage() {
  const [loading, setLoading] = useState(true);
  const [posts, setData] = useState([])

  const fetchDataCall = async () =>{
    setLoading(true);
    try {
      const options:AxiosRequestConfig = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        url: 'http://127.0.0.1:3002',
      };

      const response = await axios(options);
      return response.data;
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
      } else {
        console.error('Something unexpected happened.');
      }
    }
    finally {
      setTimeout(() => {
        setLoading(false);        
      }, 1300);
    }
  }  

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchDataCall();
      console.log(response);
      setData(response?.data);
    }

    fetchData();
  }, []);

  if (loading) {
    return (<ProgressBar/>);
  }
  
  return (
    <Container className="homepage">
      <h1>{posts}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
    </Container>
  );
}

export default Homepage;
