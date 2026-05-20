export default function RetoARutaUI() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Reto a Ruta IA
          </h1>

          <p className="text-slate-600 text-lg">
            Mapeo visual y estructurado de challengers, pilotos y proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">
              🎯 Objetivo del Challenger
            </h2>

            <textarea
              className="w-full h-36 rounded-xl border border-slate-300 p-4"
              placeholder="¿Qué busca lograr el cliente?"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">
              ⚠️ Problema Detectado
            </h2>

            <textarea
              className="w-full h-36 rounded-xl border border-slate-300 p-4"
              placeholder="¿Qué problema existe actualmente?"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">
              📊 Impacto Esperado
            </h2>

            <textarea
              className="w-full h-36 rounded-xl border border-slate-300 p-4"
              placeholder="¿Qué KPI se busca mejorar?"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-4">
              🚧 Riesgos Iniciales
            </h2>

            <textarea
              className="w-full h-36 rounded-xl border border-slate-300 p-4"
              placeholder="¿Qué riesgos podrían existir?"
            />
          </div>

        </div>

        <div className="mt-10 bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            🗺️ Vista General del Challenger
          </h2>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {['Entender','Levantar','Diseñar','Validar','Ejecutar','Medir'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-slate-800 text-white px-5 py-3 rounded-2xl shadow-md text-sm font-medium">
                  {step}
                </div>

                {idx !== 5 && (
                  <div className="text-slate-400 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
