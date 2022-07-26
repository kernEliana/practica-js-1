/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá
const calculateEnvio = (price) => {
	let costoEnvio;
  
	if (price <= 2000) costoEnvio = 300;
	if (price >= 2001 && price <= 4000) costoEnvio = 500;
	if (price > 4000) costoEnvio = 700;
	return costoEnvio;
  };

  const calculatePrice = (product, price) => {
	if (price <= 0) return "Error";
	if (!product || !price) return "ingresar ambos parámetros";
	if (typeof product !== "string") return "ingresar un nombre válido";
	const envio = calculateEnvio(price);
	const precioFinal = price + envio;
	return `El producto ${product} cuesta ${price} . Su costo de envío es de ${envio} . Por lo tanto, el precio final es de ${precioFinal}`;
  };



module.exports = {
	calculatePrice,
};
