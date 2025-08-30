import WhatsAppButton from '@/components/WhatsAppButton';

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <a href="/" className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Inicio</a>
        </div>
        <h1 className="text-4xl font-bold text-[#2B3B8C] mb-8">Proyectos de Vivienda</h1>
        
        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estado del Proyecto</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]">
                <option value="">Todos</option>
                <option value="en_planos">En Planos</option>
                <option value="en_construccion">En Construcción</option>
                <option value="terminado">Terminado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
              <input
                type="text"
                placeholder="Ciudad o sector..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Vivienda</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B3B8C]">
                <option value="">Todos</option>
                <option value="casa">Casas</option>
                <option value="apartamento">Apartamentos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de Proyectos */}
        <div className="space-y-8">
          {/* Proyecto 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="relative h-64 md:h-full">
                <div className="absolute inset-0 bg-gray-200">
                  {/* Aquí irá la imagen del proyecto */}
                </div>
                <div className="absolute top-0 left-0 bg-[#FF6B38] text-white px-3 py-1 m-2 rounded">
                  En Construcción
                </div>
              </div>
              <div className="col-span-2 p-6">
                <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-3">Conjunto Residencial Las Palmas</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-2">📍</span>
                        <span>Riohacha, La Guajira</span>
                  </div>
                  <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-2">📅</span>
                        <span>Entrega: Diciembre 2025</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Moderno conjunto residencial con amplias zonas verdes, parque infantil, 
                  salón social y seguridad 24/7. Apartamentos de 2 y 3 habitaciones con 
                  excelentes acabados.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">2-3 Habitaciones</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">2 Baños</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">65-85 m²</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Parqueadero</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Desde</span>
                    <p className="text-2xl font-bold text-[#2B3B8C]">$280.000.000</p>
                  </div>
                  <button className="px-6 py-3 bg-[#FF6B38] text-white rounded-md hover:bg-[#e55a2d] transition-colors">
                    Ver Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="relative h-64 md:h-full">
                <div className="absolute inset-0 bg-gray-200">
                  {/* Aquí irá la imagen del proyecto */}
                </div>
                <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 m-2 rounded">
                  En Planos
                </div>
              </div>
              <div className="col-span-2 p-6">
                <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-3">Altos de La Guajira</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-2">📍</span>
                        <span>Maicao, La Guajira</span>
                  </div>
                  <div className="flex items-center">
                        <span className="text-[#FF6B38] mr-2">📅</span>
                        <span>Entrega: Junio 2026</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Exclusivo proyecto de casas unifamiliares con diseño moderno, 
                  acabados de lujo y amplios espacios. Incluye club house, piscina 
                  y áreas deportivas.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">3-4 Habitaciones</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">3 Baños</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">120-150 m²</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Jardín Privado</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Desde</span>
                    <p className="text-2xl font-bold text-[#2B3B8C]">$450.000.000</p>
                  </div>
                  <button className="px-6 py-3 bg-[#FF6B38] text-white rounded-md hover:bg-[#e55a2d] transition-colors">
                    Ver Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#2B3B8C] mb-4 flex items-center">
            <span className="mr-2 text-[#FF6B38]">ℹ️</span>
            Información Importante
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Las imágenes son representaciones artísticas y pueden variar del producto final</li>
            <li>• Los precios están sujetos a cambios sin previo aviso</li>
            <li>• Aplican condiciones y restricciones</li>
            <li>• Consulta la disponibilidad y las condiciones de financiación</li>
          </ul>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
