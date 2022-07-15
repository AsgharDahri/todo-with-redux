export const addTodo=(data)=>{

    return{
        type:'ADD_TODO',
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }

    }
}

export const deleteTodo=(id)=>{

    return{
        type:'delete_TODO',
        id
    }
}

export const RemoveTodo=()=>{

    return{
        type:'Remove_TODO'
    }
}

