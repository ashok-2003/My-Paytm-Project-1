# adding to the backend for now and looking if backend run or not 
FROM node:jod-alpine3.20
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node" , "index.js"]