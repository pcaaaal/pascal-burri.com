# BUILDER_IMAGE defaults to your prebuilt image in the repository.
ARG IMAGE=pcaaaal/pascal-burri.com

# Stage 1: Builder stage – pull the prebuilt image.
FROM ${IMAGE} AS builder

WORKDIR /app

# Stage 2: Production image with Nginx and self‑signed SSL support.
FROM nginx:alpine

# Install OpenSSL for generating a self‑signed certificate and prepare directories.
RUN apk add --no-cache openssl && \
    mkdir -p /etc/ssl/private /etc/ssl/certs

# Copy custom Nginx configuration that enables HTTPS (and HTTP→HTTPS redirect).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static site from the builder stage (assumed to be in /app/out).
COPY --from=builder /app/out /usr/share/nginx/html

# Copy the entrypoint script that generates the self‑signed certificate (if needed) and starts Nginx.
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80 443

CMD ["/docker-entrypoint.sh"]
