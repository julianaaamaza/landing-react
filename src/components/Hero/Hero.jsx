import React, { useEffect, useState } from "react";
import imagen1 from "../../assets/imagen1.png";

const API_KEY = "7fc1576c4899d697c94705fbca0c4a23";
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=es-ES`;

const Hero = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  // Estado para formulario y para mostrar datos enviados
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    edad: "",
    genero: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results.slice(0, 8));
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, []);

  // Maneja cambios en los inputs del formulario
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // evitar recarga
    setEnviado(true);
  };

  return (
    <main className="bg-red-700 min-h-screen text-white">
      {/* Inicio */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center p-8 text-center"
      >
        <img
          src={imagen1}
          alt="Imagen de inicio"
          className="max-w-xs sm:max-w-md mb-6 rounded-lg shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4">Suspiros del Más Allá</h1>
        <p className="text-xl max-w-xl">
          Tu portal al misterio, relatos escalofriantes y las mejores películas de terror.
        </p>
      </section>

      {/* Recomendaciones */}
      <section
        id="recomendaciones"
        className="bg-red-800 py-12 px-6"
      >
        <h2 className="text-4xl font-semibold mb-8 text-center">
          Recomendaciones de Películas de Terror
        </h2>
        {cargando && <p className="text-center">Cargando recomendaciones...</p>}
        {error && (
          <p className="text-center text-red-300">
            No se pudieron cargar las recomendaciones.
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {peliculas.map((pelicula) => (
            <div
              key={pelicula.id}
              className="bg-red-900 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={
                  pelicula.poster_path
                    ? `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
                    : "https://via.placeholder.com/300x450?text=Sin+imagen"
                }
                alt={pelicula.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pelicula.title}</h3>
                <p className="text-sm line-clamp-4">
                  {pelicula.overview || "Sinopsis no disponible."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relatos */}
      <section id="relatos" className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-center">Relatos de Terror</h2>
        <article className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Kuchisake-onna</h3>
          <p>
            Kuchisake-onna, la mujer de la boca cortada, es una leyenda urbana japonesa
            sobre una mujer que aparece cubierta con una máscara quirúrgica y pregunta a sus víctimas
            si la encuentran hermosa. Dependiendo de la respuesta, revela su aterradora boca mutilada y ataca.
          </p>
        </article>
         <article className="mb-8">
    <h3 className="text-2xl font-bold mb-2">La Llorona</h3>
    <p>
      Una mujer vestida de blanco que vaga por ríos y lagos llorando desconsolada.
      Cuenta la leyenda que perdió a sus hijos y los busca eternamente,
      llevándose a quienes la escuchan cerca de las aguas.
    </p>
  </article>

  <article className="mb-8">
    <h3 className="text-2xl font-bold mb-2">El Jinete Sin Cabeza</h3>
    <p>
      Un jinete espectral aparece montando su caballo por caminos solitarios.
      Se dice que perdió la cabeza en una batalla y que su espíritu vaga en busca de venganza o redención.
    </p>
  </article>

  <article className="mb-8">
    <h3 className="text-2xl font-bold mb-2">La Casa Embrujada de Amityville</h3>
    <p>
      Una vivienda donde ocurrieron terribles sucesos y asesinatos,
      que luego se dice estuvo poseída por fuerzas oscuras.
      Muchos que han entrado han reportado fenómenos paranormales inexplicables.
    </p>
  </article>

  <article className="mb-8">
    <h3 className="text-2xl font-bold mb-2">El Hombre del Saco</h3>
    <p>
      Un personaje sin rostro que se lleva a los niños que se portan mal.
      Se dice que aparece en las noches, acechando las casas,
      y que su saco guarda a las víctimas que jamás vuelven.
    </p>
  </article>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-red-800 py-12 px-6 max-w-2xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-center">Contacto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </label>

          <label className="flex flex-col">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </label>

          <label className="flex flex-col">
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>

          <label className="flex flex-col">
            Edad:
            <input
              type="number"
              name="edad"
              min="0"
              max="120"
              value={formData.edad}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>

          <label className="flex flex-col">
            Género:
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Seleccione</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
              <option value="otro">Otro</option>
              <option value="prefiero-no-decir">Prefiero no decir</option>
            </select>
          </label>

          <label className="flex flex-col">
            Mensaje:
            <textarea
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-red-900 border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
          >
            Enviar
          </button>
        </form>

        {enviado && (
          <div className="mt-8 bg-red-900 p-4 rounded text-white">
            <h3 className="text-2xl mb-4">Información enviada:</h3>
            <p><strong>Nombre:</strong> {formData.nombre}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Teléfono:</strong> {formData.telefono || "No proporcionado"}</p>
            <p><strong>Edad:</strong> {formData.edad || "No proporcionada"}</p>
            <p><strong>Género:</strong> {formData.genero || "No especificado"}</p>
            <p><strong>Mensaje:</strong> {formData.mensaje}</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
