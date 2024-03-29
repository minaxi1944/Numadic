import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import "./App.css";

const countriesURL = "https://restcountries.eu/rest/v2/all";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rowEvent={
  onclick:(e,row)=>{
    console.log(row)
  }
}
function handleCellClick()
{
    
       console.log('Cigarette row clicked');

}



function App() {
  const [countriesData, setCountriesData] = useState([]);
  const classes = useStyles();

  const getCountriesWithAxios = async () => {
    const response = await axios.get(countriesURL);
    setCountriesData(response.data);
    setCountriesData(response.data);
  };

  useEffect(() => {
    getCountriesWithAxios();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table" >
              <TableHead>
                <TableRow>
                  
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Flag</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Capital</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Population</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Region</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countriesData.map((country) => (
                  <TableRow>
                   
                    <TableCell component="th" scope="row" onCellClick= {handleCellClick}>
                    <div class="main_box">
                    
    <input type="checkbox" id="check" />
      <label for="check">
        {country.name}
      </label>
    <div class="sidebar_menu" id="menu">
      <div class="logo">
        <a href="#">INFORMATION</a>
          </div>
        <div class="btn_two">
          <label for="check">
            <i class="fas fa-times">X</i>
          </label>
        </div>
      <div class="menu">
        <ul>
          <li >
            <a href="#">{country.capital}</a>
          </li>
          <li> <a href="#">{country.name}</a></li>
          
          
        </ul>
        

     </div>
      
    </div>
    </div>
  
                    
              {/* <a href="App.html" data-toggle="modal" data-target="#myModal">{country.name}</a> */}
                    </TableCell>
                    <TableCell align="right">
                      <img src={country.flags} alt="a" width="32px" />
                    </TableCell>
                    <TableCell align="right">{country.capital}</TableCell>
                    <TableCell align="right">{country.population}</TableCell>
                    <TableCell align="right">{country.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
