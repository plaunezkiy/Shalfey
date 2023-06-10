FROM node:16-alpine

WORKDIR /web

COPY package.json yarn.lock ./
RUN yarn install

COPY tailwind.config.js ./tailwind.config.js
COPY next.config.js ./tailwind.config.js
COPY tsconfig.json ./tsconfig.json

# COPY src/ ./src/
# COPY public/ ./public/

CMD ["yarn", "dev"]