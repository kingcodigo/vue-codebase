export default {
  async login(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBk6WWg2eXnDsg9VmhLMaR--uVYE36saAU',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    console.log('LOGINDATA');

    console.log(responseData);

    if (!response.ok) {
      const error = new Error(responseData.message || 'Login failed');
      throw error;
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBk6WWg2eXnDsg9VmhLMaR--uVYE36saAU',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    console.log('SIGNUPDATA');
    console.log(responseData.error.message);

    console.log(responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Authentification failed'
      );
      throw error;
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  logout(context) {
    context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null
    });

  },
};
