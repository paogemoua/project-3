import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Map from "../../components/startmap";
import Map from "../../components/Map2";


class Start extends Component {
    state = {
        sport:"",
        skill:"",
        playerAmount:"",
        date:"",
        time:""
    }

    //function for submitting the data (still needs to be done)
    onSubmit = () => {
    };

    //Function for updating the state as the dropdowns are updated
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    render(){
        return (
        <div>
            <div className = "container">
                <h1>Start a Game</h1>
                <form>

                <label for="spprt">Sport: </label>
                    <select name = "sport" id = "selectSport">
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Hockey">Hockey</option>
                        <option value="Tenis">Tenis</option>
                        <option value="Ultimate Frisbee">Ultimate Frisbee</option>
                    </select>

                <label for="skill">What is your groups overall skill level?</label>
                    <select name = "skill" id = "selectSkill">
                        <option value="1">1 Beginner</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 Expert</option>
                    </select>

                <label for="playerAmount">What is the maximum number of players you can add to your game?</label>
                    <select name = "playerAmount" id = "playerAmount">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">5</option>
                        <option value="8">6</option>
                    </select>
                
                <div>
                    Time: <input name="time" type="time" id="time"></input>
                </div>

                <div>
                    Date: <input name="date" type = "date" id="myDate"></input>
                </div>
                
                <h5>Where are you playing?</h5>
                <div id = "mapDiv">
                    <Map
                    google = {this.props.google}
                    center = {{lat: 18.5204, lng: 73.8567}}
                    height = '300px'
                    zoom = {15}
                    />

                  
                </div>
             
                </form>
                <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
            </div>
        </div>
        )
    }
}

export default Start;