---
sidebar_position: 5
title: 'Manual de Instalación'
---

# Manual de Instalación
## Linux | Valet


Si desea implementar sobre un servidor local Linux “desde cero” debe:
- Contar con acceso root
- Instalar php 7.2 y todas las librerías requeridas por el aplicativo y Laravel
- Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos
- Instalar Git, Curl, Composer
 
Ubuntu no cuenta con la versión 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalación, ellos son

#### Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root.
    <pre>apt-get update</pre>

#### Para poder agregar un PPA, ejecute los siguientes:
<pre>apt-get install software-properties-common
apt-get install python-software-properties</pre>

#### Para agregar el PPA, en algunos casos solicitará confirmar con enter
<pre>add-apt-repository ppa:ondrej/php
apt-get update</pre>

#### Procedemos a Instalar PHP, aunque se instalar algunas librerías junto con PHP, se agregan para asegurar la instalación
<pre>apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt</pre>
 
#### Instalamos Mysql, phpmyadmin opcional
<pre>apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin</pre>
 
Se le solicitara contraseña dos veces, con su confirmación, tanto para mysql como para phpmyadmin
 
#### Instalamos Curl y Git
<pre>apt-get install git
apt-get install curl</pre>
 
#### Luego se procede a instalar Composer
<pre>apt-get install composer</pre>
 
#### Dar permisos de lectura y escritura a la carpeta composer
<pre>Chmod –R 777 ~/.composer</pre>
 
#### Instalar librerias cpriego de Valet
<pre>composer global require cpriego/valet-linux</pre>
 
#### Ir a carpeta home /.profile y añadir la siguiente linea al final del documento y guardar
<pre>Nano ~/.profile
PATH= “HOME/.composer/vendor/bin:$PATH”</pre>
 
Luego ejecutar en terminal: ```source ~/.profile```
 
#### Instalar las siguientes librerías
<pre>apt install network-maneger libnss3-tools jq xsel</pre>
 
Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el ```puerto :80``` . Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto.
 
#### Detener servicios de apache2 si lo tienes instalado.
<pre>services apache2 stop</pre>
 
#### Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet.
<pre>Apt install nginx</pre>
 
#### Verificar que el servidor de nginx se está ejecutando correctamente
<pre>Systemctl status nginx</pre>
 
#### Si todo está ok instalar valet
<pre>Valet install</pre>
 
#### Con valet podemos tener nuestro código en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo.
<pre>Mkdir ~/code
cd code
valet park</pre>
 
Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:

<pre>
git clone https://gitlab.com/b.mendoza/facturadorpro3.git
</pre>

Esto creará una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env
<pre>cp .env.example .env</pre>

Donde **APP_URL_BASE** corresponde a su dominio, **DB_DATABASE** será el nombre que le de a la base de datos principal, **DB_USERNAME** y **DB_PASSWORD** equivalen al usuario creado anteriormente en la instalación de mysql.
 
#### Seguidamente:
<pre>php artisan key:generate
composer dump-autoload</pre>
 
Luego deberá registrar la base de datos mediante phpmyadmin, accediendo a la ruta *__sudominio.com/phpmyadmin__* con el usuario root y contraseña agregada en la instalación.
 
Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones.
<pre>composer install
php artisan migrate --seed</pre>
 
Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrará la base de datos creada y la derecha las tablas generadas.
 
Con estos pasos podrá observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando
<pre>chmod -R 755 storage
chmod -R 755 bootstrap/cache</pre>
 
También es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa
<pre>php artisan storage:link</pre>
 
Si todo se realizó correctamente, ya tendrá las tablas del usuario principal creadas, y podrá acceder mediante la web, al proyecto.
Accesos:
- Facturadorpro3.test
- usuario: admin@gmail.com 
  contraseña: 123456
