# Node Self Signed Certificate

## Status

https://stackoverflow.com/q/60530225/2715716

## Running

`node .` to generate `cert.pem` and `key.pem`.

`npx serve -h`

## To-Do

### Find a way to convert the public and private key into a self-signed certificate

`npx serve . --ssl-cert cert.pem --ssl-key key.pem`
