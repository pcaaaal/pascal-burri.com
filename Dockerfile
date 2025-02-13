# Use a build argument to decide if we build from source or pull a prebuilt image
ARG USE_PREBUILT=true
# BUILDER_IMAGE defaults to node:18-alpine for building from source
ARG BUILDER_IMAGE=ghcr.io/pcaaaal/pascal-burri.com:latest

# Stage 1: Builder stage – either build from source or use a prebuilt image.
FROM ${BUILDER_IMAGE} AS builder

WORKDIR /app

# Only run the build steps if we are not using a prebuilt image.
# (If USE_PREBUILT=true, we expect that /app/out already exists in the builder image.)
COPY package*.json ./
RUN npm install
COPY . .
RUN if [ "$USE_PREBUILT" = "false" ]; then \
      npm run build && npm run export; \
    fi

# Stage 2: Production image with Nginx and self-signed SSL support.
FROM nginx:alpine

# Install OpenSSL for generating a self-signed certificate
RUN apk add --no-cache openssl && \
    mkdir -p /etc/ssl/private /etc/ssl/certs

# Copy custom Nginx configuration that enables HTTPS (and HTTP→HTTPS redirect)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static site from the builder stage.
# We assume the Next.js export is output to /app/out.
COPY --from=builder /app/out /usr/share/nginx/html

# Copy the entrypoint script that generates the self‑signed certificate (if needed) and starts Nginx.
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80 443

CMD ["/docker-entrypoint.sh"]
