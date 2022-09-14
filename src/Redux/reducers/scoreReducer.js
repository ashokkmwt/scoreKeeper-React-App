import { MATCH_OVER_A, MATCH_OVER_B, NEW_MATCH, SCORE_A, SCORE_B, START_MATCH } from "../actions/types";


const initialState = [
    { name: "Team A", id: 1, scoreCountA: 0, ballsA: 0, oversA: 0, isFinishedA: false },
    { name: "Team B", id: 2, scoreCountB: 0, ballsB: 0, oversB: 0, isFinishedB: false },
    { overs: 0, id: 3, popup: true }
];

const scoreReducer = (state = initialState, action) => {

    let newState = [...state];

    switch (action.type) {

        case SCORE_A:
            const scoresA = newState.map(team => {
                if (team.id === 1) {
                    return {
                        ...team,
                        scoreCountA: action.payload._teamAScore,
                        ballsA: team.ballsA === 6 ? 1 : action.payload._teamABalls,
                        oversA: team.ballsA === 5 ? team.oversA + 1 : action.payload._teamAovers
                    }
                }
                return team
            })
            return newState = scoresA

        case MATCH_OVER_A:
            const finishPopupA = newState.map(team => {
                if (team.id === 1) {
                    return {
                        ...team,
                        isFinishedA: team.oversA === parseInt(action.payload._overs) && true
                    }
                }
                return team
            })
            return newState = finishPopupA

        case SCORE_B:
            const scoresB = newState.map(team => {
                if (team.id === 2) {
                    return {
                        ...team,
                        scoreCountB: action.payload._teamBScore,
                        ballsB: team.ballsB === 6 ? 1 : action.payload._teamBBalls,
                        oversB: team.ballsB === 5 ? team.oversB + 1 : action.payload._teamBovers
                    }
                }
                return team
            })
            return newState = scoresB

        case MATCH_OVER_B:
            const finishPopupB = newState.map(team => {
                if (team.id === 2) {
                    return {
                        ...team,
                        isFinishedB: team.oversB === parseInt(action.payload._overs) && true
                    }
                }
                return team
            })
            return newState = finishPopupB

        case START_MATCH:
            const newMatch = newState.map(team => {
                if (team.id === 1) {
                    return { ...team, name: action.payload.teamA }
                }
                if (team.id === 2) {
                    return { ...team, name: action.payload.teamB }
                }
                if (team.id === 3) {
                    return { ...team, overs: action.payload.overs, popup: false }
                }
                return team
            })
            return newState = newMatch

        case NEW_MATCH:
            return initialState

        default:
            return newState
    }
}

export default scoreReducer;