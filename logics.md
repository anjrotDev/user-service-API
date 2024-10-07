# Lógica de Roles y Permisos

1.- Cuando revisar actualizar o crear un Role.

- Cuando se crea un usuario (endpoint registro / endpoint createUser / endpoint update user)

  - revisar si viene el campo "roles"

    - Si no viene el role
      - crear un role "user" por default
    - si viene el role, revisar en la bd que ese role exista

      - si el role no existe y retornamos un error.
      - si el role existe continuar

    - crear el permissions type

      2.- Asignar permisos a los Roles

    - Admin: admin_granted
    - Manager: Permisos por Modulo
    - user: solo permisos para Posts
    - guest: solo permisos de lectura en posts

      3.- Revisión de Permisos

    - Obtener lo roles, (desde currentUser)
    - Obtener el Metodo HTTP de la petición
    - Obtener el path/modulos (usuarios - roles - posts)
    - Conseguir en los permisos el metodo que coincida para obtener el objeto que contiene el scope

    - Armar el permiso correspondiente al scope en le momento de la petición
    - obtener todos los permisos de los roles del usuario
    - comparar los permisos armados en el scope con los permisos de los roles de usuario

      - si no hay match, regresamos un error unauthorized
      - si todo bien next()

    - Verificar si el usuario Tiene Permisos
      - Tienen mayor prioridad q los permisos de los roles
