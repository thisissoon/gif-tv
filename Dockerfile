#
# Builds a docker image to run the Frontend and Frontend API for Team Sky
#

# Pull node base image
FROM mhart/alpine-node:7.4

# Install dependencies
COPY package.json /src/app/package.json
WORKDIR /src/app
RUN npm install

# Copy src dir
COPY . /src/app

# Build
RUN PATH=$PATH:$(npm bin) npm run build

# Create volume for mounting gifs
VOLUME /src/app/public/assets/GIFS

# Expose port
EXPOSE 3000

# Default entrypoint arguments
CMD ["npm", "run", "serve"]
