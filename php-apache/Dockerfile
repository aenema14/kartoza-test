FROM php:7.4-apache
#COPY ./php.ini /usr/local/etc/php/
RUN apt-get update
RUN apt-get install -y zip unzip vim libpng-dev libpq-dev
RUN docker-php-ext-install pdo_mysql

RUN mkdir -p /etc/httpd/ssl
RUN a2enmod ssl
COPY ./ssl.conf /etc/apache2/sites-available/ssl.conf
COPY ./ssl/ssl.key /etc/httpd/ssl/ssl.key
COPY ./ssl/ssl.crt /etc/httpd/ssl/ssl.crt
RUN a2ensite ssl

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
