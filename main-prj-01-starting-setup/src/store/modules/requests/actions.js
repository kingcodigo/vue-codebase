export default {
    contactCoach(context,payload) {
        const newRequest = {
            id: Date.now(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        }
        context.commit('addRequest',newRequest);
      } 
};