FROM node:14.4.0-alpine3.10

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY . .

CMD ["npm", "start"]

EXPOSE 3000