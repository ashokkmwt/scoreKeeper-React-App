import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startMatchAction } from '../../Redux/actions/teamAactions';
import styles from './index.module.css';

export default function StartMatchPopup() {

    const dispatch = useDispatch();

    const [teamA, setTeamA] = useState("");
    const [teamB, setTeamB] = useState("");
    const [overs, setOvers] = useState("");

    const handleTeamA = (e) => setTeamA(e.target.value)

    const handleTeamB = (e) => setTeamB(e.target.value)

    const handleOvers = (e) => {

        if (isNaN(e.target.value)) {
            alert("Enter Number Here");
            return
        }

        if (e.target.value > 50 || e.target.value.length > 2) {
            alert("Enter Relevant Data. Overs can't excede more than 50.");
            return
        }

        setOvers(e.target.value)
    }

    const startMatch = () => {
        if (!teamA || !teamB || !overs) {
            alert("Enter Valid Data")
            return
        }
        const data = { teamA, teamB, overs }
        dispatch(startMatchAction(data));
    }

    return (
        <div className={styles.startMatch}>
            <div className={styles.matchDetail}>
                <input placeholder='Team A Name' onChange={handleTeamA} value={teamA} />
                <input placeholder='Team A Name' onChange={handleTeamB} value={teamB} />
                <input placeholder='Overs' onChange={handleOvers} value={overs} />
                <button onClick={startMatch}>Start Match</button>
            </div>
        </div>
    )
}
