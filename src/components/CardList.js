import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {
	return (
		<div>
			{
				// Movemos el contenido de la "const cardComponent = "
				// previamente abrimos y cerramos llaves (bloque javascript)
				
				robots.map((user, i) => {
				return (
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					/>
					);
				})
			}
		</div>
	);
}

export default CardList;