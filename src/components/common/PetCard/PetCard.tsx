import { useEffect, useState } from 'react';

import { PetCardContainer, PetCardContent, PetCardHeader } from './PetCard.css';

import chat from '../../../assets/images/chat.png';
import chien from '../../../assets/images/chien.png';

interface PET {
	petName: string;
	petType: string;
	pricePerDay: number;
}

function PetCard({ pet }: { pet: PET | null }) {
	const [formData, setFormData] = useState({
		petName: '',
		petType: '',
		pricePerDay: 0,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (pet) {
			setFormData({
				petName: pet.petName,
				petType: pet.petType,
				pricePerDay: pet.pricePerDay,
			});
		} else {
			setFormData({
				petName: '',
				petType: '',
				pricePerDay: 0,
			});
		}
	}, [pet]);

	return (
		<PetCardContainer>
			<PetCardHeader>
				<img
					src={formData.petType === 'chat' ? chat : chien}
					alt={formData.petType === 'chat' ? chat : chien}
				/>
				<h2>
					{formData.petName === ''
						? 'Ajouter un animal'
						: formData.petName}
				</h2>
			</PetCardHeader>
			<PetCardContent>
				<form action=''>
					<input
						type='text'
						placeholder='Mon nom'
						value={formData.petName}
						name='petName'
						onChange={handleInputChange}
					/>
					<input
						type='text'
						placeholder='Je suis un ...'
						value={formData.petType}
						name='petType'
						onChange={handleInputChange}
					/>
					<input
						type='text'
						placeholder='Prix par jour'
						value={formData.pricePerDay}
						name='pricePerDay'
						onChange={handleInputChange}
					/>
					<button type='submit'>Valider</button>
					{formData.petName !== '' &&
					formData.petType !== '' &&
					formData.pricePerDay !== 0 ? (
						<button type='submit'>Supprimer</button>
					) : null}
				</form>
			</PetCardContent>
		</PetCardContainer>
	);
}

export default PetCard;
