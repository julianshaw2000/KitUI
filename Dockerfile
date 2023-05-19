FROM node:16.10.0-alpine as builder
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
# RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run build --prod

# FROM nginx:latest-alpine
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf


COPY --from=builder /usr/src/app/dist/psp-port/ /usr/share/nginx/html/
# COPY --from=builder /app/dist/psp-port /usr/share/nginx/html

# EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start", "-o"]


# docker build . -t psp-port/test
# docker run -p 3000:80 psp-port/test
