'use client';

import React, { useState } from 'react';
import PropertyFilters from '@/components/PropertyFilters';
import type { PropertyFilters as FiltersType } from '@/lib/types';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ArriendosPage() {
  const [activeFilters, setActiveFilters] = useState<FiltersType>({});

  const handleFilterChange = (filters: FiltersType) => {
    setActiveFilters(filters);
    // Aquí implementaremos la lógica de filtrado cuando tengamos la base de datos
    console.log('Filtros aplicados:', filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <a href="/" className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Inicio</a>
        </div>
        <h1 className="text-3xl font-bold text-[#2B3B8C] mb-6">Propiedades en Arriendo</h1>

        <PropertyFilters isRental={true} onFilterChange={handleFilterChange} className="mb-8" />

        {/* Lista de Propiedades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ejemplo de tarjeta de propiedad */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 bg-gray-200">
              {/* Aquí irá la imagen de la propiedad */}
              <div className="absolute top-0 right-0 bg-[#FF6B38] text-white px-3 py-1 m-2 rounded">Destacado</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2B3B8C] mb-2">Apartamento en Centro</h3>
              <p className="text-gray-600 mb-4">Ubicación del inmueble</p>

              <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-[#FF6B38] mr-1">🛏️</span>
                    <span>3 hab.</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF6B38] mr-1">🛁</span>
                    <span>2 baños</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#FF6B38] mr-1">📐</span>
                    <span>80 m²</span>
                  </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#2B3B8C]">$1.500.000</span>
                <button className="px-4 py-2 bg-[#2B3B8C] text-white rounded-md hover:bg-[#232f70] transition-colors">Ver detalles</button>
              </div>
            </div>
          </div>

          {/* Puedes duplicar la tarjeta anterior para mostrar más propiedades */}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
