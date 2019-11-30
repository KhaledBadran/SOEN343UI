FROM node:12.13 AS builder

WORKDIR /root
COPY . .

RUN npm install && npm install -g @angular/cli &&  ng build


FROM nginx:1.17.5-alpine


COPY --from=builder  /root/dist/SOEN343UI /usr/share/nginx/html

COPY --from=builder /root/nginx.conf /etc/nginx/conf.d/default.conf
