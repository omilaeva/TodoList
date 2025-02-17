FROM denoland/deno:2.1.10

WORKDIR /app

COPY deno.json .

RUN DENO_FUTURE=1 deno install

COPY . .

CMD [ "run", "--allow-env", "--allow-net", "--watch", "app-run.js" ]
