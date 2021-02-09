import {request} from "./axios";

export const API = {
    getScore() {
        return request.get(`score`)
            .then(res => res.data);
    },
    resetScore() {
        return request.post(`score/reset`)
            .then(res => res.data)
    },
    getGameInfo() {
        return request.get(`game`)
            .then(res => res.data)
    },
    makeMove(cellIndex) {
        return request.post(`game/move`, `{"index":${cellIndex}}`)
            .then(res => res.data)
    },
    gameReset() {
        return request.post(`game/reset`)
            .then(res => res.data)
    },
    nextGame() {
        return request.get(`game/next`)
            .then(res => res.data);
    }
};