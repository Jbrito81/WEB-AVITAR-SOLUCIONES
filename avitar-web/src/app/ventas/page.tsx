 'use client';

import React, { useState } from 'react';
import PropertyFilters from '@/components/PropertyFilters';
import type { PropertyFilters as FiltersType } from '@/lib/types';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function VentasPage() {
  const [activeFilters, setActiveFilters] = useState<FiltersType>({});

  const handleFilterChange = (filters: FiltersType) => {
    setActiveFilters(filters);
    console.log('Filtros aplicados:', filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <a href="/" className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Inicio</a>
        </div>
        <h1 className="text-3xl font-bold text-[#2B3B8C] mb-6">Propiedades en Venta</h1>

        <PropertyFilters isRental={false} onFilterChange={handleFilterChange} className="mb-8" />

        {/* Propiedades Destacadas */}
        <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-6">Propiedades Destacadas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gray-200" />
              <div className="absolute top-0 right-0 bg-[#FF6B38] text-white px-3 py-1 m-2 rounded">Destacado</div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[#2B3B8C]">Casa Moderna en Venta</h3>
                <span className="text-[#FF6B38] font-semibold">$320.000.000</span>
              </div>
              <p className="text-gray-600 mb-4 flex items-center">
                <span className="text-[#FF6B38] mr-2">📍</span> Riohacha, La Guajira
              </p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center"><span className="text-[#FF6B38] mr-2">🛏️</span> <span>4 hab.</span></div>
                <div className="flex items-center"><span className="text-[#FF6B38] mr-2">🛁</span> <span>3 baños</span></div>
                <div className="flex items-center"><span className="text-[#FF6B38] mr-2">📐</span> <span>180 m²</span></div>
              </div>
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-[#2B3B8C] text-white rounded-md hover:bg-[#232f70] transition-colors w-full">Ver Detalles</button>
              </div>
            </div>
          </div>
        </div>

        {/* Lotes y Terrenos */}
        <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-6">Lotes y Terrenos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative h-48"><div className="absolute inset-0 bg-gray-200" /></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-[#2B3B8C]">Lote Urbanizable</h3>
                <span className="text-[#FF6B38] font-semibold">$150.000.000</span>
              </div>
              <p className="text-gray-600 mb-4 flex items-center"><span className="text-[#FF6B38] mr-2">📍</span> Maicao, La Guajira</p>
              <div className="flex items-center mb-4"><span className="text-[#FF6B38] mr-2">📐</span> <span>500 m²</span></div>
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-[#2B3B8C] text-white rounded-md hover:bg-[#232f70] transition-colors w-full">Ver Detalles</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
