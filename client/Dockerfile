FROM denoland/deno:2.1.10

WORKDIR /app

COPY . .

RUN deno install --allow-scripts

CMD [ "run", "dev", "--host"]
