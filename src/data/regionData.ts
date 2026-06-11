/**
 * Datos mock de géneros musicales por región
 * 
 * En producción, esto vendría de Spotify Charts API o una base de datos
 */

// Top géneros por código de país
export const regionGenres: Record<string, string[]> = {
  AR: ["Rock Nacional", "Reggaeton", "Cumbia", "Pop", "Electrónica"],
  MX: ["Regional Mexicano", "Reggaeton", "Pop Latino", "Banda", "Cumbia"],
  CO: ["Champeta", "Reggaeton", "Salsa", "Bachata", "Pop Latino"],
  CL: ["Reggaeton", "Pop", "Rock", "Electrónica", "Trap"],
  PE: ["Reggaeton", "Cumbia", "Salsa", "Pop Latino", "Trap"],
  ES: ["Flamenco", "Pop Español", "Reggaeton", "Rock", "Trap"],
  UY: ["Rock", "Cumbia", "Pop", "Electrónica", "Reggaeton"],
  BR: ["Forró", "Sertanejo", "Pagode", " Funk", "Axé"],
  // Por defecto (Estados Unidos y otros)
  default: ["Pop", "Hip-Hop", "Reggaeton", "Rock", "Electrónica"],
};

// Nombres de países para mostrar
export const countryNames: Record<string, string> = {
  AR: "Argentina",
  MX: "México",
  CO: "Colombia",
  CL: "Chile",
  PE: "Perú",
  ES: "España",
  UY: "Uruguay",
  BR: "Brasil",
  US: "Estados Unidos",
  default: "tu país",
};

/**
 * Obtiene los géneros disponibles para una región
 */
export function getGenresForRegion(countryCode: string): string[] {
  return regionGenres[countryCode] || regionGenres.default;
}

/**
 * Obtiene un género aleatorio de los disponibles en la región
 */
export function getRandomGenreForRegion(countryCode: string): string {
  const genres = getGenresForRegion(countryCode);
  return genres[Math.floor(Math.random() * genres.length)];
}

/**
 * Obtiene el nombre del país
 */
export function getCountryName(countryCode: string): string {
  return countryNames[countryCode] || countryNames.default;
}
