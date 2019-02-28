



  
    //clientSecret: "Dk0x0Ps-bWxEM2nl3xJvm-JeJ5V31zMmxZG_-UNiSZsoTtn6DAl75PAL6hPBi5w_", 
    //callbackURL: "http://localhost:3000/callback"
    import auth0 from 'auth0-js';
    
    class Auth {
      constructor() {
        this.auth0 = new auth0.WebAuth({
          domain: 'kingeric.auth0.com',
          audience: 'https://kingeric.auth0.com/userinfo',
          clientID: 'RgypgNKbpL15E9tPKlmrOYbnEGfaX9UJ',
          redirectUri: 'http://localhost:3000/callback',
          responseType: 'id_token',
          scope: 'openid profile'
        });

        this.getProfile = this.getProfile.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);

      }
    
      getProfile() {
        return this.profile;
      }

      getIdToken() {
        return this.idToken;
      }

      isAuthenticated() {
        return new Date().getTime() < this.expiresAt;
      }

      signIn() {
        this.auth0.authorize();
      }

      handleAuthentication() {
        return new Promise((resolve, reject) => {
          this.auth0.parseHash((err, authResult) => {
            if (err) return reject(err);
            if (!authResult || !authResult.idToken) {
              return reject(err);
            }
            this.idToken = authResult.idToken;
            this.profile = authResult.idTokenPayload;
            // set the time that the id token will expire at
            this.expiresAt = authResult.idTokenPayload.exp * 1000;
            resolve();
          });
        })
      }

      signOut() {
        // clear id token, profile, and expiration
        this.idToken = null;
        this.profile = null;
        this.expiresAt = null;
      }
    }

const auth0Client = new Auth();

export default auth0Client;