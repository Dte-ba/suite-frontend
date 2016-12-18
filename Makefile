NOMBRE=suite

N=[0m
R=[00;31m
G=[01;32m
Y=[01;33m
B=[01;34m
L=[01;30m

BIN_EMBER=./node_modules/.bin/ember

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${G}${NOMBRE}${N}"
	@echo ""
	@echo "  ${Y}Para desarrolladores${N}"
	@echo ""
	@echo "    ${G}iniciar${N}             Instala todas las dependencias."
	@echo "    ${G}test${N}                Ejecuta los tests."
	@echo "    ${G}ejecutar${N}            Ejecuta el servidor en modo desarrollo."
	@echo ""
	@echo ""


dependencias: 
	npm install
	bower install

iniciar: dependencias

test:
	${BIN_EMBER} test

ejecutar: serve

serve: 
	${BIN_EMBER} serve

s: serve
server: serve

