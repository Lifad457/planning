import { useEffect, useState } from 'react';

import {
	ButtonContainer,
	PetCardContainer,
	PetCardContent,
	PetCardHeader,
} from './PetCard.css';

import chat from '../../../assets/images/chat.png';
import chien from '../../../assets/images/chien.png';

interface PET {
	petName: string;
	petType: string;
	pricePerDay: number;
}

function PetCard({ pet, onClose }: { pet: PET | null; onClose: () => void }) {
	const [formData, setFormData] = useState({
		petName: '',
		petType: '',
		pricePerDay: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (pet) {
			setFormData({
				petName: pet.petName,
				petType: pet.petType,
				pricePerDay: pet.pricePerDay.toString(),
			});
		} else {
			setFormData({
				petName: '',
				petType: '',
				pricePerDay: '',
			});
		}
	}, [pet, onClose]);

	return (
		<PetCardContainer>
			<PetCardHeader>
				<img
					src={
						formData.petType.toLowerCase() === 'chat' ? chat : chien
					}
					alt={
						formData.petType.toLowerCase() === 'chat' ? chat : chien
					}
				/>
				<h2>
					{formData.petName === '' ? 'Mon nom' : formData.petName}
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
						placeholder='Je suis un(e) ...'
						value={formData.petType}
						name='petType'
						onChange={handleInputChange}
					/>
					<input
						type='text'
						placeholder='Prix par jour'
						value={
							formData.pricePerDay === null ||
							formData.pricePerDay === ''
								? ''
								: formData.pricePerDay
						}
						name='pricePerDay'
						onChange={handleInputChange}
					/>
					<ButtonContainer>
						<button type='submit'>Valider</button>
						{formData.petName !== '' && formData.petType !== '' ? (
							<button type='submit'>Supprimer</button>
						) : null}
					</ButtonContainer>
				</form>
			</PetCardContent>
		</PetCardContainer>
	);
}

export default PetCard;
