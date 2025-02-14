FROM node:jod-alpine3.20
RUN npm install -g serve
WORKDIR /app
COPY dist app/dist
EXPOSE 5172

CMD ["serve", "-s", "dist", "-l", "5172"]
# -s refer the spa as we use the react so if it change from one path to other to aviod 404 error we have used it 

# not work because the backend url is hardcoded so const API_URL = "http://host.docker.internal:3000";
# this should be the required url to work it 