/**
 * Tipos para Matomo Analytics
 * 
 * Extiende el objeto window para incluir _paq de Matomo
 */
declare global {
  interface Window {
    _paq: Array<[string, ...unknown[]]>;
  }
}

export {};
