const reducer=(state=defaultState,action)=>{
    let {type,payload}=action;
    switch (type) {
        case 'SHOW_NAV' :
            return Object.assign({},state,{
                showNav:true
            });
        break;
        case 'HIDE_NAV' :
            return Object.assign({},state,{
                showNav:false
            });
            break;
        case 'SHOW_FOOTONE' :
            return Object.assign({},state,{
                showFootOne:true
            });
            break;
        case 'HIDE_FOOTONE' :
            return Object.assign({},state,{
                showFootOne:false
            });
            break;
        case 'SHOW_FOOTTWO' :
            return Object.assign({},state,{
                showFootTwo:true
            });
            break;
        case 'HIDE_FOOTTWO' :
            return Object.assign({},state,{
                showFootTwo:false
            });
            break;
        case 'SHOW_LOADING' :
            return Object.assign({},state,{
                showLoading:true
            });
            break;
        case 'HIDE_LOADING' :
            return Object.assign({},state,{
                showLoading:false
            });
            break;
        default :
            return state
    }
};

export default reducer