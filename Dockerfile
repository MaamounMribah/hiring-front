FROM node:18-alpine
WORKDIR /hiring-front/
COPY public/ /hiring-front/public
COPY src/ /hiring-front/src
COPY package.json /hiring-front/
RUN npm install
CMD ["npm", "start"]