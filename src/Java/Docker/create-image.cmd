docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya14-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya14-java/app ../../..
