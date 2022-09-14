import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { teamAScoreAction } from '../../Redux/actions/teamAactions';
import styles from './index.module.css'

export default function TeamA() {

    const dispatch = useDispatch();

    const teams = useSelector(state => state.scoreReducer);
    const _overs = teams[2].overs
    const teamA = teams[0]
    const _isFinishedA = teamA.isFinishedA
    let teamAScore = teamA.scoreCountA
    let teamABalls = teamA.ballsA
    let teamAovers = teamA.oversA

    const addScoreA1 = () => {
        const data = {
            _teamAScore: teamAScore + 1,
            _teamABalls: teamABalls + 1,
            _teamAovers: teamAovers,
            _overs: _overs
        }
        if (teamAovers < _overs) dispatch(teamAScoreAction(data));

    }

    const addScoreA4 = () => {
        const data = {
            _teamAScore: teamAScore + 4,
            _teamABalls: teamABalls + 1,
            _teamAovers: teamAovers,
            _overs: _overs
        }
        if (teamAovers < _overs) dispatch(teamAScoreAction(data));
    }

    const addScoreA6 = () => {
        const data = {
            _teamAScore: teamAScore + 6,
            _teamABalls: teamABalls + 1,
            _teamAovers: teamAovers,
            _overs: _overs
        }
        if (teamAovers < _overs) dispatch(teamAScoreAction(data));
    }

    const addScoreA0 = () => {
        const data = {
            _teamAScore: teamAScore + 0,
            _teamABalls: teamABalls + 1,
            _teamAovers: teamAovers,
            _overs: _overs
        }
        if (teamAovers < _overs) dispatch(teamAScoreAction(data));
    }

    const resetA = () => {
        const data = {
            _teamAScore: 0,
            _teamABalls: 0,
            _teamAovers: 0,
            _overs: _overs
        }
        if (teamA.oversA !== parseInt(_overs)) dispatch(teamAScoreAction(data));
    }

    return (
        <div className={styles.teamAScore} style={{ backgroundColor: _isFinishedA && 'red' }} >
            <h2 className={styles.teamName}>{teamA.name}</h2>
            <h2>{teamAScore}</h2>
            <h2>Balls:{teamABalls}/Over:{teamAovers}</h2>
            <h3 onClick={addScoreA1}>run1</h3>
            <h3 onClick={addScoreA4}>run4</h3>
            <h3 onClick={addScoreA6}>run6</h3>
            <h3 onClick={addScoreA0}>noRun</h3>
            <h3 onClick={resetA}>reset</h3>
        </div >
    )
}
