FROM mysql:5.7

ENV MYSQL_DATABASE db
ENV MYSQL_ROOT_PASSWORD pass

COPY create.sql /docker-entrypoint-initdb.d/create.sql
COPY populate.sql /docker-entrypoint-initdb.d/populate.sql

RUN /entrypoint.sh mysqld & sleep 30 && killall mysqld
RUN rm /docker-entrypoint-initdb.d/create.sql
RUN rm /docker-entrypoint-initdb.d/populate.sql
