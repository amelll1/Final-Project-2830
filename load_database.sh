#!/bin/bash
docker exec -i final-project-2830-db-1 mysql -u User -p root finalproject < /docker-entrypoint-initdb.d/finalproject.sql
