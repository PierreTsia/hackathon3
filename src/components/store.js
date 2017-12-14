import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"


Vue.use(Vuex)
var state = {
    assets: [],
    modelAssets: []
}
const getters = {
    assets : state => state.assets,
    modelAssets : state => state.modelAssets
    
}
const mutations = {
    CURRENT_ASSETS : (state, {assets})=>{
        state.assets = assets
    },
    MODEL_ASSETS : (state, {modelAssets})=>{
        state.modelAssets = modelAssets
    },

}

const actions = {
   //  url : 'https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/4/asset/'
    GET_CURRENT_ASSETS : ({commit})=>{
        var url = 'https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/4/asset/'
        axios.get(url).then(response => {
            commit('CURRENT_ASSETS', { assets : response.data} )
        }, (err)=>{
            console.log(err)
        })
    },
    GET_MODEL_ASSETS : ({commit})=>{
        var url = 'https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/model'
        axios.get(url).then(response => {
            commit('MODEL_ASSETS', { modelAssets : response.data} )
        }, (err)=>{
            console.log(err)
        })
    }

}

export default new Vuex.Store({
    state: state,
    getters : getters,
    mutations : mutations,
    actions: actions
})