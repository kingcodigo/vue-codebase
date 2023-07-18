import { createStore } from 'vuex'
import coachesModule from './modules/coaches/index.js'

const store = createStore({
    modules: {coachesModule}
});

export default store;