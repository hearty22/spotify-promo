/**
 * Mock Data - Simula datos del usuario
 * 
 * En producción, esto vendría de una base de datos o API
 */

export async function getMockData() {
  // Simula lectura de base de datos
  const mockData = await import("../data/mockData.json");
  return mockData.default;
}
