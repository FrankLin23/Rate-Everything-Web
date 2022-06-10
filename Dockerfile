FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /user/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]