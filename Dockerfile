FROM node:20-alpine
# make working directory
RUN mkdir -p /drive/app/frontend
# run the working directory
WORKDIR /drive/app/frontend
# Copy package.json and package-lock.json
COPY package.json package-lock.json /drive/app/frontend
# Install dependencies
RUN npm install 
# Copy the rest of the application code
COPY . /drive/app/frontend
# Start the application
CMD ["npm", "run", "dev"]