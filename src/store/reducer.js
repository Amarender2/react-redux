const initialState = {
    counter : 0
}

const reducer = (state = initialState, action) => {
    console.log('reducer');
    if(action.type === 'INC_COUNTER_5') {
        return {
            counter: state.counter + action.value
        }
    }
    if(action.type === 'INC_COUNTER') {
        return {
            counter: state.counter + 1 
        }
    }
    if(action.type === 'DEC_COUNTER_5') {
        return {
            counter: state.counter - action.value 
        }
    }
    if(action.type === 'DEC_COUNTER') {
        return {
            counter: state.counter - 1 
        }
    }
    return state;
}

export default reducer;
