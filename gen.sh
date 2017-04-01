rm -rf dist
mkdir -p dist

cp -r public/* dist/

node generator.js "index">"dist/index.html"
node generator.js "sobre">"dist/sobre.html"
node generator.js "calendario">"dist/calendario.html"
node generator.js "convocatoria">"dist/convocatoria.html"
node generator.js "convocatoriasfice">"dist/convocatoriasfice.html"
node generator.js "voluntarios">"dist/voluntarios.html"
node generator.js "programacao">"dist/programacao.html"
node generator.js "ingressos">"dist/ingressos.html"
node generator.js "imprensa">"dist/imprensa.html"
node generator.js "expandido">"dist/expandido.html"
node generator.js "palestras">"dist/palestras.html"
node generator.js "batepapo">"dist/batepapo.html"
node generator.js "oficinas">"dist/oficinas.html"
mkdir -p dist/programacao
node generator.js "programacao/piranha">"dist/programacao/piranha.html"
node generator.js "programacao/danca">"dist/programacao/danca.html"
node generator.js "programacao/suely">"dist/programacao/suely.html"
node generator.js "programacao/medelei">"dist/programacao/medelei.html"
node generator.js "programacao/kardashian">"dist/programacao/kardashian.html"
node generator.js "programacao/birds">"dist/programacao/birds.html"
node generator.js "programacao/ricardo">"dist/programacao/ricardo.html"
node generator.js "programacao/ciclo">"dist/programacao/ciclo.html"
node generator.js "programacao/ator">"dist/programacao/ator.html"
node generator.js "programacao/the-sirens">"dist/programacao/the-sirens.html"
node generator.js "imprensa">"dist/imprensa.html"
