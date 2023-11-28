import { api } from '../services/api'

export const getPosts = async () => {
    try {
        const {data} = await api.get('posts'); 

        if(data){
            return data;
        }

        return []
    } catch (error) {
        console.log(error.message)
    }   
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)

    return {}
}