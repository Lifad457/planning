import styled from 'styled-components';

export const PetCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: var(--clr-primary);
	color: var(--clr-secondary);
	font-size: var(--fs-normal);
`;
export const PetCardHeader = styled.header`
	display: flex;
	width: 100%;
	background-color: var(--clr-secondary);
	color: var(--clr-primary);
	padding: 1rem;
	gap: 1rem;

	h2 {
		font-size: clamp(1.5rem, 3vw, 4rem);
		color: var(--clr-primary);
		align-content: flex-end;
	}
	img {
		width: clamp(3.5rem, 3vw, 4.5rem);
		border-radius: 50%;
		object-fit: cover;
	}
`;
export const PetCardContent = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	form {
		display: grid;
		padding: 1rem;
		gap: 1rem;
	}

	input {
		width: 100%;
		height: 100%;
		background: none;
		padding: 0.2rem;
		border: none;
		border-bottom: 0.5px solid var(--clr-secondary);
		color: var(--clr-black);
		font-size: clamp(1.5rem, 3vw, 4rem);
		font-weight: var(--fw-medium);
		letter-spacing: 1px;
		cursor: pointer;
		outline: none;
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 1rem;
	gap: 1rem;

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
`;
