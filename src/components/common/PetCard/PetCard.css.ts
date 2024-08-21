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
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;

	input {
		background: none;
		border: none;
		color: var(--clr-secondary);
		font-size: 17px;
		font-weight: 500;
		letter-spacing: 1px;
		cursor: pointer;
		position: relative;
		z-index: 2;
		outline: none;
	}

	button {
		width: 100%;
		height: 2.5rem;
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: 1px solid var(--clr-secondary);
		font-size: var(--fs-normal);
		background-color: var(--clr-secondary);
		color: var(--clr-primary);
	}

	.button-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-top: 1rem;
		gap: 1rem;
	}
`;
