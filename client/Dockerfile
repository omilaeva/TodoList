FROM denoland/deno:2.1.10

WORKDIR /app

COPY package.json .

RUN DENO_FUTURE=1 deno install --allow-scripts

COPY . .

CMD [ "run", "dev", "--host"]
