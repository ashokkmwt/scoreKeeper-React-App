import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { teamBScoreAction } from '../../Redux/actions/teamAactions';
import styles from './index.module.css'

export default function TeamB() {

    const dispatch = useDispatch();

    const teams = useSelector(state => state.scoreReducer)
    const teamB = teams[1]
    const _isFinishedB = teamB.isFinishedB

    let teamBScore = teamB.scoreCountB
    let teamBBalls = teamB.ballsB
    let teamBovers = teamB.oversB

    const _overs = teams[2].overs

    const addScoreB1 = () => {
        const data = {
            _teamBScore: teamBScore + 1,
            _teamBBalls: teamBBalls + 1,
            _teamBovers: teamBovers,
            _overs: _overs
        }
        if (teamBovers < _overs) dispatch(teamBScoreAction(data));
    }

    const addScoreB4 = () => {
        const data = {
            _teamBScore: teamBScore + 4,
            _teamBBalls: teamBBalls + 1,
            _teamBovers: teamBovers,
            _overs: _overs
        }
        if (teamBovers < _overs) dispatch(teamBScoreAction(data));
    }

    const addScoreB6 = () => {
        const data = {
            _teamBScore: teamBScore + 6,
            _teamBBalls: teamBBalls + 1,
            _teamBovers: teamBovers,
            _overs: _overs
        }
        if (teamBovers < _overs) dispatch(teamBScoreAction(data));
    }

    const addScoreB0 = () => {
        const data = {
            _teamBScore: teamBScore + 0,
            _teamBBalls: teamBBalls + 1,
            _teamBovers: teamBovers,
            _overs: _overs
        }
        if (teamBovers < _overs) dispatch(teamBScoreAction(data));
    }

    const resetB = () => {
        const data = {
            _teamBScore: 0,
            _teamBBalls: 0,
            _teamBovers: 0,
            _overs: _overs
        }
        if (teamB.oversB !== parseInt(_overs)) dispatch(teamBScoreAction(data));
    }

    return (
        <div className={styles.teamBScore} style={{ backgroundColor: _isFinishedB && 'red' }}>
            <h2 className={styles.teamName}>{teamB.name}</h2>
            <h2>{teamBScore}</h2>
            <h2>Balls:{teamBBalls}/Over:{teamBovers}</h2>
            <h3 onClick={addScoreB1}>run1</h3>
            <h3 onClick={addScoreB4}>run4</h3>
            <h3 onClick={addScoreB6}>run6</h3>
            <h3 onClick={addScoreB0}>noRun</h3>
            <h3 onClick={resetB}>reset</h3>
        </div>
    )
}
