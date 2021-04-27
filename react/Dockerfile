FROM node:alpine as build
WORKDIR /app
COPY react/package*.json ./
RUN npm ci
COPY react ./
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]