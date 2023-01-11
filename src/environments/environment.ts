// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiUrlBase: 'http://localhost:8080/api',
  urlToken: 'http://192.168.1.254:8180/realms/quarkus-keycloak-realm/protocol/openid-connect/token',
  production: false,
  CLI_ID: 'token-jwt-app',
  CLI_SECRET: '6gbfK0z02yxmqYcHqp2vVeeeqM97Fe16'

  // 'http://192.168.1.254:8180/realms/quarkus-keycloak-realm/protocol/openid-connect/token'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
