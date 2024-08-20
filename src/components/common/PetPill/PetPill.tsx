import { PillContainer, TextWrapper, ImageWrapper } from './PetPill.css';

import chat from '../../../assets/images/chat.png';
import chien from '../../../assets/images/chien.png';

interface PET {
	petType: string;
	petName: string;
	pricePerDay: number;
}

function PetPill({
	currentPet,
	onOpen,
}: {
	currentPet: PET;
	onOpen?: () => void;
}) {
	return (
		<PillContainer onClick={onOpen}>
			<ImageWrapper
				src={currentPet.petType === 'chat' ? chat : chien}
				alt={currentPet.petType}
			/>
			<TextWrapper>
				<p>{currentPet.petName}</p>
				<p>{currentPet.pricePerDay} €</p>
			</TextWrapper>
		</PillContainer>
	);
}

export default PetPill;
