
const initialState = {
    list: [
        {title: 'Primeira Nota', body: 'Teste de primeira nota....'}
    ]
};

export default (state = initialState, action) => {
    let newList = [ ...state.list ] ;

    switch(action.type) {
        case 'ADD_NOTE' :
            newList.push({
                title: action.payload.title,
                body: action.payload.body,
            })
        break;

        case 'EDIT_NOTE' :
            if(newList[action.payload.key]) {
                newList[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body,
                }
            }
        break;

        case 'DEL_NOTE' :
            newList = newList.filter((item, index) => index != action.payload.key) ;
        break;
    }

    return { ...state, list: newList };
}

