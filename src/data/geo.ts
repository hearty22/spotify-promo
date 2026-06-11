/**
 * Servicio de geolocalización
 * 
 * Detecta la ubicación del usuario por IP
 */

// En Next.js 15+, headers() es una función async
export async function getUserLocation(): Promise<string> {
  try {
    // Intentar obtener país desde headers del servidor
    const headers = await import("next/headers").then(h => h.headers());
    
    if (headers) {
      const country = headers.get('x-vercel-ip-country') 
        || headers.get('cf-ipcountry')
        || headers.get('country');
      
      if (country && country !== 'XX') {
        return country;
      }
    }
  } catch (error) {
    console.log('No se pudo obtener país de headers:', error);
  }
  
  // Fallback: API externa
  try {
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000),
    });
    const data = await response.json();
    return data.country_code || 'AR';
  } catch {
    return 'AR';
  }
}
