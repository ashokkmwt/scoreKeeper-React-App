import { MATCH_OVER_A, MATCH_OVER_B, NEW_MATCH, SCORE_A, SCORE_B, START_MATCH } from "./types"


const teamAScoreAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: SCORE_A,
            payload: data
        })
        dispatch({
            type: MATCH_OVER_A,
            payload: data
        })
    }
}

const teamBScoreAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: SCORE_B,
            payload: data
        })
        dispatch({
            type: MATCH_OVER_B,
            payload: data
        })
    }
}

const startMatchAction = (data) => {
    return {
        type: START_MATCH,
        payload: data
    }
}

const newMatchAction = () => {
    return {
        type: NEW_MATCH
    }
}

export { teamAScoreAction, teamBScoreAction, startMatchAction,newMatchAction }