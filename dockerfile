FROM node:10
WORKDIR /app
RUN npm install --global gulp-cli
RUN npm install -g typescript
COPY package.json /app
RUN npm install
COPY . /app
RUN gulp watch
RUN ls
CMD npm start
EXPOSE 8083