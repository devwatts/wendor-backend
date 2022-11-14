FROM gcr.io/distroless/nodejs16-debian11:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]