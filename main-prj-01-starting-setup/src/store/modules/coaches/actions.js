export default {
    registerCoach(context,payload) {
        const coach = {
            id: context.rootGetters.userId,            
            firstName:payload.first.val,
            lastName: payload.last.val,
            description: payload.desc.val,
            hourlyRate: payload.rate.val,
            areas: payload.areas.val
        }

        context.commit('registerCoach', coach);

    }
};