import adm from "../assets/adm.jpg";
import redes from "../assets/redes.jpg";

const Cursos = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col px-8">
      <h1 className="mt-8 text-2xl font-bold">Cursos disponíveis:</h1>
      <div className="w-full justify-center mx-auto grid md:grid-cols-2 gap-48 place-items-cente">
        <div className="p-10">
          <div className="max-w-sm h-[520px] rounded overflow-hidden shadow-lg  hover:shadow-blue-500 transition-all duration-300 border-[1px] border-blue-900">
            <img className="w-full" src={adm} alt="Administração" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Administração</div>
              <p className="text-gray-700 text-base">
                A Administração é a ciência social que estuda e sistematiza as
                práticas usadas para administrar.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <h1 className="p-3">
                Vagas: <b>90</b>
              </h1>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #adm
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #administração
              </span>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="max-w-sm h-[520px] rounded overflow-hidden shadow-lg  hover:shadow-yellow-500 transition-all duration-300 border-[1px] border-yellow-600">
            <img className="w-full" src={redes} alt="Administração" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Redes de Computadores
              </div>
              <p className="text-gray-700 text-base">
                O profissional formado em Redes de Computadores suas principais
                atribuições estão relacionadas à organização da infraestrutura
                de hardware e softwares.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <h1 className="p-3">
                Vagas: <b>90</b>
              </h1>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #redes
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #redesdecomputadores
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
