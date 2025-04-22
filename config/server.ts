export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    // Leemos APP_KEYS como un array separado por comas
    keys: env.array("APP_KEYS", [
      // valores por defecto — se usarán solo si no está definida la var de entorno
      "defaultKeyA",
      "defaultKeyB",
    ]),
  },
});
