export default {
   async contactCoach(context,payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        }

        const response = await fetch(
            `https://dummy-33dd0-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
            {
              method: 'POST',
              body: JSON.stringify(newRequest),
            }
          );
      
          const responseData = await response.json();
      
          if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
          }

          newRequest.id = responseData.name;
          newRequest.coachId = payload.coachId;


        context.commit('addRequest',newRequest);
      } ,
      async loadRequests(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(
          `https://dummy-33dd0-default-rtdb.firebaseio.com/requests/${coachId}.jon`
        );
        const responseData = await response.json();
        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to fetch');
          throw error;
        }
    
        const requests = [];
    
        for (const key in responseData) {
            console.log('key' + key);
          const request = {
            id: key,
            coachId: coachId,
            message: responseData[key].message,
            userEmail: responseData[key].userEmail,
         
          };
          requests.push(request);
        }
    
        context.commit('setRequests', requests);
      },
};
