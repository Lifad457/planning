import styled from 'styled-components';

export const PetCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	aspect-ratio: auto 1 / 1;
	background-color: var(--clr-primary);
	color: var(--clr-secondary);
	font-size: var(--fs-normal);
`;
export const PetCardHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr 3fr;
	width: 100%;
	background-color: var(--clr-secondary);
	color: var(--clr-primary);
	padding: 1rem;
	align-items: end;

	h2 {
		font-size: var(--fs-extra-large);
		margin: 0;
		padding: 0;
		color: var(--clr-primary);
	}
	img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		object-fit: cover;
	}
`;
export const PetCardContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	
`;
