FROM node:jod-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]


# this will not work first of all go to config.js and change the backend url to your container name or docker url 
# i have already modified the vite.config.json so now worries thier 