import EventPublisher from "./events/event-publisher";

export default class StateMachine<STATE_TYPE> extends EventPublisher {
    EVENT_STATE_ENTER: string;
    EVENT_STATE_EXIT: string;
    constructor(transitionsTable: { [key: string]: STATE_TYPE[] }, initialState: STATE_TYPE, breakingStates: STATE_TYPE[]);
    setState(newState: STATE_TYPE): void;
    startTransitionTo(state: STATE_TYPE): void;
    isIn(state: STATE_TYPE): boolean;
    isNotIn(state: STATE_TYPE): boolean;
    canTransitTo(state: STATE_TYPE): boolean;
    cannotTransitTo(state: STATE_TYPE): boolean;
    hasPendingTransition(): boolean;
    getPendingTransition(): { from: STATE_TYPE, to: STATE_TYPE } | null;
    abortPendingTransition(): void;
    getCurrentState(): STATE_TYPE;
    getStatesFollowingFrom(state: STATE_TYPE): STATE_TYPE[];
    getStatesLeadingTo(state: STATE_TYPE): STATE_TYPE[];
}

export class InvalidTransitionError<STATE_TYPE> extends Error {
    from: STATE_TYPE;
    to: STATE_TYPE;
    constructor(from: STATE_TYPE, to: STATE_TYPE);
}

export class PendingTransitionError<STATE_TYPE> extends Error {
    from: STATE_TYPE;
    to: STATE_TYPE;
    constructor(pendingFrom: STATE_TYPE, pendingTo: STATE_TYPE, attempted: STATE_TYPE);
}