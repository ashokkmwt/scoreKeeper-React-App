import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newMatchAction } from '../../Redux/actions/teamAactions';
import StartMatchPopup from '../StartMatchPopup';
import TeamA from '../TeamA';
import TeamB from '../TeamB';
import styles from './index.module.css'

export default function TeamScore() {

    const getOvers = useSelector(state => state.scoreReducer);

    const dispatch = useDispatch();

    const _overs = getOvers[2].overs;
    const _popup = getOvers[2].popup;

    const newMatch = () => dispatch(newMatchAction());
    return (
        <>
            {_popup && <StartMatchPopup />}
            <div className={styles.teamScorePage}>
                <div className={styles.header}>
                    <h1 className={styles._fs}>Score Keeper [{_overs}]</h1>
                    <h4 className={styles.newMatch} onClick={newMatch}>Start New Match</h4>
                </div>
                <div className={styles.scoreContainer}>
                    <TeamA />
                    <TeamB />
                </div>
            </div>
        </>
    )
}
