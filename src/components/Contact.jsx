const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const datos = {
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    email: formData.get("email"),
    mensaje: formData.get("mensaje"),
  };

  try {
    const response = await fetch("http://localhost/gruizajes_api/enviar.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const result = await response.json();

    if (result.success) {
      alert("¡Cotización enviada correctamente!");
      e.target.reset();
    } else {
      alert("Error: " + result.message);
    }
  } catch (err) {
    alert("No se pudo conectar con el servidor.");
    console.error(err);
  }
};
