import React, { Component } from "react";
import { Link } from "react-router-dom";
import Map from "../../components/startmap";


class Start extends Component {
    onSubmit = () => {
        console.log("Submit");
    };
    render(){
        return (
        <div>
            <div className = "container">
                <h1>Start a Game</h1>
                <form>

                <label for="selectSport">Sport: </label>
                    <select name = "selectSport" id = "selectSport">
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Hockey">Hockey</option>
                        <option value="Tenis">Tenis</option>
                        <option value="Ultimate Frisbee">Ultimate Frisbee</option>
                    </select>

                <label for="selectSkill">What is your groups overall skill level?</label>
                    <select name = "selectSkill" id = "selectSkill">
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
                
                <h5>Where are you playing?</h5>
                <Map>
                </Map>
             
                </form>
                <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
            </div>
        </div>
        )
    }
}

export default Start;