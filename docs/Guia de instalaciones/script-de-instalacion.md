---
sidebar_position: 2
title: 'Script de Instalación'
---


## Docker | GitLab | Opción SSL | Opción SSH

### Descripción

Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior. Este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya esté configurado hacia la instancia). Su ejecución es muy sencilla.

### Requisitos previos


1. Tener acceso a su servidor, VPS, máquina virtual o local vía SSH. En las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave SSH que puede ser un archivo .ppk o .pem. Recuerde almacenarlas en su equipo local.


2. Tener instalado una versión de SSH en su máquina para conectarse de manera remota. Puede utilizar Putty, Filezilla o una consola terminal. Para mayor información sobre el acceso SSH, visite los siguientes manuales:
      - [Guía para acceder con Putty (gestión de servidor)](https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#)
      - [Guía para acceder con Winscp (gestión de archivos con aplicación de escritorio)](https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#)


3. Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalación se encuentre disponible el aplicativo. Edite los registros A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta.
![imagen de subdominio](../img/script-instalacion.png)


4. En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasarán a usar el aplicativo con los contenedores de Docker.

### Pasos


1. Acceder a su instancia vía SSH.


2. Loguearse como super usuario.
    Ejecute ``` sudo su ```.


3. Clonar el snippet de GitLab que contiene el script.
    <pre>git clone https://gitlab.com/snippets/2079063.git script </pre>


4. Ingrese a la carpeta clonada.
   ``` cd script ```


5. Dar permisos de ejecución al script.
   ``` chmod +x install.sh ```


6. El comando a utilizar para iniciar el despliegue requiere de un parámetro principalmente:
   ``` ./install.sh [dominio] ```
    **Por ejemplo:**
   ```./install.sh facturador.pro```


7. Una vez ejecutado el comando iniciará el proceso de actualización del sistema. En el proceso se le solicitará:

    **a.** El usuario y contraseña de GitLab, para que se pueda descargar el proyecto en su instancia.


    **b.** Si desea instalar SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 días. El mensaje será el siguiente:
    
    <pre>Instalar con SSL? (debe tener acceso al panel de su dominio para editar/agregar records TXT). Si[s] no[n]</pre>

    - **I.** Deberá contestar con "s" o "n" para continuar.

    - **II.** Si selecciona **SÍ**, deberá contestar las         siguientes preguntas con "y", son 2 en total. Seguidamente se le ofrecerá un código que debe añadir en un récord tipo TXT en su dominio quedando como **_acme-challenge.example.com** o simplemente **_acme-challenge** dependerá de su proveedor. 
       ![imagen de consola](../img/script-instalacion-2.png)


    - **III.** Para continuar, presione **enter**. Luego deberá repetir las acciones para añadir un segundo código y habrá finalizado la configuración. Si el proceso es exitoso, la ejecución del script continuará.


    **c.** Si desea obtener y gestionar actualizaciones automáticas, deberá disponer de su sesión de GitLab al momento.


       <pre>Configurar clave SSH para actualización automática? 
       (requiere acceso a https://gitlab.com/profile/keys). 
       Si[s] no[n]</pre>


     - **I.** Deberá contestar con "s" o "n" para continuar.

     - **II.** De seleccionar SÍ, al final del despliegue se le dará un extracto de texto que debe añadir a su configuración de GitLab.
     ![imagen de SSH key](../img/script-instalacion-3.png)


8. Finalizado el script y dependiendo de sus selecciones anteriores, se le entregará varios datos que debe guardar, como:

    **a.** Usuario administrador

    **b.** Contraseña para usuario administrador

    **c.** URL del proyecto

    **d.** Ubicación del proyecto dentro del servidor

    **e.** Clave SSH para añadir a GitLab (obligatorio para quienes seleccionan la instalación de SSH)


### Enlaces de interés

- [Actualización de SSL](https://gitlab.com/b.mendoza/facturadorpro3/snippets/1955372)
- [Actualización mediante ejecución Script para instalaciones Docker](https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker)
- [Gestión de SSL independiente, no el que incorpora el Script](https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit?usp=sharing)
- [Guía GitLab para la instalación, contiene el script usado en el presente manual](https://gitlab.com/b.mendoza/facturadorpro3/snippets/1971490), además posee los parámetros extras que pueden usarse en la ejecución del paso 6.
