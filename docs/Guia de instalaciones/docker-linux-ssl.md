---
sidebar_position: 4
title: 'Instalación del Facturador'
---

# Instalación del Facturador
## Docker | Linux | SSL externo

## Pasos

- Para instalar, debe ejecutar el script evitando instalar el SSL. Le será consultado en el proceso, y deberá ingresar "n". 
- Finalizada la instalación, debe dirigirse a la ruta de instalación:
<pre>cd /root/facturadorpro31/</pre>

- Debe editar el archivo **.env**
<pre>*nano .env*</pre>
dentro del editor, ubicar los parámetros y cambiarlos:

|            **Antes**             | **Después** |
|----------------------------------|-------------|
| **APP_URL= http://$\{APP_URL_BASE}** | **APP_URL= https://$\{APP_URL_BASE}** |
|**FORCE_HTTPS=false**             |**FORCE_HTTPS=true**|


- Una vez finalizado, guarde y salga del editor. 
- Ejecute los siguientes comandos para eliminar la caché de la aplicación:

     <pre>*php artisan config:cache*</pre>


- Con eso habrá completado el lado de la herramienta. En ese momento, hasta no tener un SSL configurado, no podrá acceder a la herramienta.

:::caution **¡Importante!**

Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.

:::