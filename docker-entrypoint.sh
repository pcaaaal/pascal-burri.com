#!/bin/sh
set -e

# If the certificate files don't exist, generate a self-signed SSL certificate
if [ ! -f /etc/ssl/certs/nginx-selfsigned.crt ] || [ ! -f /etc/ssl/private/nginx-selfsigned.key ]; then
    echo "Generating self-signed SSL certificate..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -subj "/CN=localhost" \
        -keyout /etc/ssl/private/nginx-selfsigned.key \
        -out /etc/ssl/certs/nginx-selfsigned.crt
fi

echo "Starting Nginx..."
nginx -g "daemon off;"
