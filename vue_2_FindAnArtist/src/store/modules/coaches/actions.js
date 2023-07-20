export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coach = {
      firstName: payload.first.val,
      lastName: payload.last.val,
      description: payload.desc.val,
      hourlyRate: payload.rate.val,
      areas: payload.areas.val,
    };

    const response = await fetch(
      `https://dummy-33dd0-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coach),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    context.commit('registerCoach', {
      ...coach,
      id: userId,
    });
  },
  async loadCoaches(context,payload) {

    if(!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://dummy-33dd0-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};
