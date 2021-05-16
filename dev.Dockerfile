FROM node:14-alpine

# Define working directory
WORKDIR /home/node/app

# Install Nest Cli
RUN yarn global add @nestjs/cli

# Install dependencies - Yarn 2
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# copy source and start script
COPY . .
COPY ./docker/run.sh /usr/bin/run.sh
RUN chmod +x /usr/bin/run.sh

# execute start script
CMD /usr/bin/run.sh
