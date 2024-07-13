import React from 'react';
import { useState } from 'react';



function Players(props) {
    return <li>{props.player}</li>;
}

function FootBall(props) {
    const [shotResult, setShotResult] = useState("long on");
    const [isGoal, setIsGoal] = useState(props.isGoal);
    const [score, setScore] = useState(0);
    const [teamName, setTeamName] = useState("Argentina");
    const [teamMembers, setTeamMembers] = useState(["Messi", "Di-maria", "Emi Martinage", "Alverage", "Lautaro Martinage", "D-paul", "Koti Romero", "Otamendi", "Lisandro Maritinage"]);
    const [showRegistrationForm, setShowRegistationForm] = useState(false);

    const Shot = (shot_type) => {

        setShotResult(shot_type);
        if (shot_type == "Goal") {
            setScore(updateScore(score));
        }
    }
    function updateScore(a) {
        return a + 1;
    }
    return (
        <football>
            <h1>Show Team Name and Team Members </h1>
            <h2>team name is {teamName} </h2>
            <ul>
                {teamMembers.map((member) => <Players player={member} />)}
            </ul>

            <h1>Hi I am football . please kick me !</h1>
            <h1>{isGoal}</h1>
            <h2>Shot had {shotResult} and current is : {score} </h2>
            <button type="button" onClick={() => Shot("Goal")}>
                shot
            </button>

            <button type="button" onClick={() => setShowRegistationForm(true)}>
                Register your account
            </button>

            {showRegistrationForm && <Registration_from />}
        </football>
    );
}

function Registration_from(props) {
    return (
        <form>
            <label> Enter your name :
                <input type='text' enterKeyHint='first letter will be Capital'></input>

            </label>
        </form>
    );
}


export default FootBall;