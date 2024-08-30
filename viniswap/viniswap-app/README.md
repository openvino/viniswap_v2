# Ajustar las comisiones

## 1. Localizar el contrato del par

Ubicar el archivo UniswapV2Pair.sol en contracts/univ2/v2-core/contracts/

## 2. Modificar el monto total de la comisión en la función swap()

Modificar el valor 3 por el valor deseado, por ejemplo, para una comisión total de 0.5%:
Solidity
uint balance0Adjusted = balance0.mul(1000).sub(amount0In.mul(5));
uint balance1Adjusted = balance1.mul(1000).sub(amount1In.mul(5));

## 3. Modificar el valor de la comisión de protocolo en la función \_mintFee()

Ubicar la línea: uint denominator = rootK.mul(5).add(rootKLast);
Modificar el valor 5 por el valor deseado, por ejemplo, para un fee de 50% para la billetera de la DAO:
Solidity
uint balance0Adjusted = balance0.mul(1000).sub(amount0In.mul(1));
uint balance1Adjusted = balance1.mul(1000).sub(amount1In.mul(1));

# Deploy de los contratos

## 1. Ejecutar RemixD

Ejecutar remixd en la carpeta univ2

## 2. Conectar a Remix IDE

Abrir Remix IDE y conectar a localhost

## 3. Compilar UniswapV2Factory.sol

Abrir UniswapV2Factory.sol y compilarlo

## 4. Desplegar el factory

Ir a la pestaña "Deploy" y conectar "Injected Provider (Metamask)"
Establecer el feetosetter como la dirección de la billetera que recibirá el protocol fee
Desplegar el factory

## 5. Pinear el contrato

Pinear el contrato una vez confirmada la operación

## 6. Ejecutar la función INIT_CODE_HASH

Ejecutar la función INIT_CODE_HASH y copiar la salida, omitiendo el prefijo 0x

## 7. Modificar UniswapV2Library.sol

Abrir UniswapV2Library.sol y modificar el hash de init code con el valor obtenido

## 8. Compilar UniswapV2Library.sol

Compilar el contrato utilizando la versión de Solidity 0.6.6

## 9. Desplegar UniswapV2Router02.sol

Abrir UniswapV2Router02.sol y desplegarlo

## 10. Configurar el router

Obtener el contrato del Factory y el contrato de WETH en la red a desplegar
Configurar el router con los valores obtenidos

## 11. Interactuar con el contrato WETH

Abrir el ABI del contrato WETH y interactuar con él

## 12. Aprobar el router

Aprobar al router para gastar tokens

## 13. Crear el pool

Ejecutar la función Add Liquidity en el router para crear el pool
