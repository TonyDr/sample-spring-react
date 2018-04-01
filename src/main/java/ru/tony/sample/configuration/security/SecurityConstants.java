package ru.tony.sample.configuration.security;

class SecurityConstants {
    static final String SECRET = "634ec178-310d-11e8-b467-0ed5f89f718b";
    static final long EXPIRATION_TIME = 1_800_000; // 30 minutes
    static final String TOKEN_PREFIX = "Bearer  ";
    static final String HEADER_STRING = "Authorization";
}
