# Stage 1: Build your Next.js app and export static files
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies and build
COPY package*.json ./
RUN npm install

# Copy source files and build the static export (placed into "out")
COPY . .
RUN npm run build

# Stage 2: Setup Nginx with SSL support
FROM nginx:alpine

# Install OpenSSL for certificate generation
RUN apk add --no-cache openssl

# Create directories for SSL certificates (if they don't exist)
RUN mkdir -p /etc/ssl/private /etc/ssl/certs

# Copy our custom Nginx configuration
# This config file will enable HTTPS on port 443 and (optionally) redirect HTTP to HTTPS.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static export into the directory Nginx serves
COPY --from=builder /app/out /usr/share/nginx/html

# Copy our entrypoint script that generates the self-signed certificate on container start
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose HTTPS port (and optionally port 80 if you want to redirect)
EXPOSE 443 80

# Start the entrypoint script, which generates the cert if needed and then launches Nginx
CMD ["/docker-entrypoint.sh"]