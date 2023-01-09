
const PROXY_CONFIG = [
    {
        context: ['/autenticacao'],
        target: 'http://192.168.1.254:8180/realms/quarkus-keycloak-realm/protocol/openid-connect/token',
        secure: false,
        logLevel: 'debug',
        pathRewrite: { '^/autenticacao': '' }
    }
];

module.exports = PROXY_CONFIG;