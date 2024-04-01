FROM node:latest
LABEL maintainer renzo.remuzgo@tecsup.edu.pe
RUN git clone 
WORKDIR /app
RUN npm install
EXPOSE 14299
CMD ["npm", "start"]
