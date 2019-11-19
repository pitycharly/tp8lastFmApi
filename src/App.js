import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'

import Header from './components/Header';
import ListaArtistas from './components/ListaArtistas';
import ListaTracks from './components/ListaTracks';

class App extends Component {

    state = {
        artistas: [],
        tracks: [],
        primerartista: ''
    }

    topArtistas = async() => {
        const APP_Clave = 'd777c9f898d53481f07fbaa14c9592f1';
        const fm_api = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${APP_Clave}&format=json`;
        const respuesta = await axios.get(fm_api);
        const artistas = await respuesta.data.artists.artist;

        this.setState({ primerartista: artistas[0].name })
        this.setState({ artistas: artistas })
    }

    topTracks = async() => {
        const APP_Clave = 'd777c9f898d53481f07fbaa14c9592f1';
        const fm_api = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${APP_Clave}&format=json`;
        const respuesta = await axios.get(fm_api);
        const tracks = await respuesta.data.tracks.track;

        this.setState({ tracks: tracks })
    }


  


    componentDidMount() {
        const artistasLS = localStorage.getItem('artistas')
        const tracksLS = localStorage.getItem('tracks')
        const primerartistaLS = localStorage.getItem('primerartista')

        this.topArtistas()
        this.topTracks()

        if (artistasLS) this.setState({ artistas: JSON.parse(artistasLS) })
        if (tracksLS) this.setState({ tracks: JSON.parse(tracksLS) })
        if (primerartistaLS) this.setState({ primerartista: JSON.parse(artistasLS)[0].name })
    }

    componentDidUpdate() {
        localStorage.setItem('artistas', JSON.stringify(this.state.artistas))
        localStorage.setItem('tracks', JSON.stringify(this.state.tracks))
        localStorage.setItem('primerartista', JSON.stringify(this.state.primerartista))
    }

    render() {
        return (
          <Router >
            <Header/>
            <Switch>
            <Route exact path = "/toptracks"
            render = {
                () => ( <
                    ListaTracks tracks = { this.state.tracks }
                    />
                )
            }
            />


            <Route exact path = "/topartistas" render = {
                () => (<ListaArtistas artistas = { this.state.artistas }/>)
            }/>

            <Redirect from = "/"to = "/topartistas"/>
            <Route path = "/topartistas" component = { ListaArtistas }/> 
            </Switch > 
            </Router>
            );
        }


  }
export default App;