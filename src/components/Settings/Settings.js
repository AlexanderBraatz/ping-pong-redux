import React, { useState } from "react";
import Input from "./Input";


const Settings = ({name1, name2, winScore, alternation, onStartGame}) => {

    const [name1L, setName1 ] = useState( name1 );
    const [name2L, setName2 ] = useState( name2 );
    const [winScoreL, setWinScore ] = useState( winScore );
    const [alternationL, setAlternation ] = useState( alternation );

    const handleName1 = (e) => ( setName1(e.currentTarget.value));
    const handleName2 = (e) => ( setName2(e.currentTarget.value));
    const handleWinScore = (e) => ( setWinScore(e.currentTarget.value));
    const handleAlternation = (e) => ( setAlternation(e.currentTarget.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        onStartGame(name1L, name2L, winScoreL, alternationL);
    };


    return( 
        <form className="container">
            <Input
                lable= "Player 1 Name:"
                name="name1"
                type= "text"
                handleChange= { handleName1 }
                value= { name1L }
            />
            <Input
                lable= "Player 2 Name:"
                name="name2"
                type= "text"
                handleChange= { handleName2 }
                value= { name2L }
            />
            <Input
                lable= "Winnning Score:"
                name="winScore"
                type= "number"
                handleChange= { handleWinScore }
                value= { winScoreL }
            />
            <Input
                lable= "Alternate Every:"
                name="alternation"
                type= "number"
                handleChange= { handleAlternation }
                value= { alternationL }
            />
            <button 
                onClick={ handleSubmit }
                className="btn btn-primary mb-2"
            >Start Game</button>

        </form>
    )
}
export default Settings;