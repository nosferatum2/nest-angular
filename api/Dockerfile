# Specify Node version and Image
# name image: development (can be anything)
FROM node:18.13.0 AS development

#Working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json from host to the current working directory inside the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy all files from host to the current working directory inside the container
COPY . .

RUN npm run build

# Expose port
EXPOSE 4200

#######################
# Production stage
#######################
FROM node:18.13.0 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src/app

COPY --from=devalopment /src/app/ .

EXPOSE 8080

CMD [ "node", "dist/main" ]
