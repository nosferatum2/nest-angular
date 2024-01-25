
FROM node:18.13.0 AS development

WORKDIR /ui/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@17.1.0

COPY . .

RUN npm run build

EXPOSE 3000
