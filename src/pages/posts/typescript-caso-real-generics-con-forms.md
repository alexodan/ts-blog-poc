---
layout: '@/templates/BasePost.astro'
title: Ejemplo de caso de uso de TypeScript generics
description: Usando generics para validar campos requeridos de un form.
pubDate: 2022-10-16T00:00:00Z
imgSrc: '/assets/images/image-post7.jpeg'
imgAlt: 'Image post 7'
---

# Ejemplos de casos reales con TypeScript

Recientemente estuve trabajando con algunos formularios para una herramienta interna de la empresa en la que trabajo, y me encuentro con que para validar los campos requeridos estamos duplicando la misma función en dos lugares, y yo añadiría un tercer lugar, únicamente el tipo de dato debiera cambiar ya que cada form tiene distintos inputs y distintos campos requeridos.

## Validando campos requeridos en un formulario

Imaginemos que tenemos un simple form para crear un nuevo usuario en nuestra base de datos.

```ts
type NewUserForm = {
  username: string;
  email: string;
  role: string; // para abreviar vamos a dejarlo así
}
type NewUserFormRequiredFields = ['username', 'email'];
```

Y queremos validar que el formulario esté completo, solo siendo los campos requeridos username e email:

```ts
function validateRequiredFields(formValues: NewUserForm, requiredFields: NewUserFormRequiredFields) {
  
}
```