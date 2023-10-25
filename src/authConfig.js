
import { LogLevel } from "@azure/msal-browser"; //Logger library from MSAL

//User Policies from spa user-flow registration
export const b2cPolicies = {
    names: {
        signUpSignIn: 'B2C_1_signupsignin1', /****CHANGE AFTER CLONING (FROM USER FLOWS)****/
        forgotPassword: 'B2C_1_reset_v3',  /****CHANGE AFTER CLONING****/
        // editProfile: 'B2C_1_edit_profile_v2',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://sspxCAN.b2clogin.com/sspxCAN.onmicrosoft.com/B2C_1_signupsignin1',
        }, /****CHANGE NAME OF B2C TENANT (Domain name) AFTER CLONING****/
        forgotPassword: {
            authority: 'https://sspxCAN.b2clogin.com/sspxCAN.onmicrosoft.com/B2C_1_reset_v3',
        }, /****CHANGE AFTER CLONING****/
        // editProfile: {
        //     authority: 'https://sspxCAN.b2clogin.com/sspxCAN.onmicrosoft.com/B2C_1_edit_profile_v2',
        // }, 
    },
    authorityDomain: 'sspxCAN.b2clogin.com', /****CHANGE AFTER CLONING****/
};


/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
//Hide with environment variables prior to release
export const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_APP_ID, // From b2c tenant spa app
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose signUpSignIn as your default authority.
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};


//Protected resources (future use if needed)
/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */

// //Endpoint from api's live url
// export const protectedResources = {
//     apiTodoList: {
//         endpoint: 'http://localhost:5000/api/todolist',
//         scopes: {
//             read: ['https://sspxCAN.onmicrosoft.com/82465294-cd5d-44de-8f21-eb8b7984a4cb/ToDoList.Read'],
//             write: ['https://sspxCAN.onmicrosoft.com/82465294-cd5d-44de-8f21-eb8b7984a4cb/ToDoList.ReadWrite'],
//         },
//     },
// };

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
// export const loginRequest = {
//     scopes: [...protectedResources.apiTodoList.scopes.read, ...protectedResources.apiTodoList.scopes.write],
// };
