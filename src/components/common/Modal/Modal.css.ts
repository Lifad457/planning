import styled from 'styled-components';

export const ModalContainer = styled.dialog`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 80vw;
	height: 80vh;
	max-width: 30rem;

	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	
	transform: translate(-50%, -50%) scale(0);
	transition: transform 0.3s ease-in-out;
	z-index: 10;

	&[open] {
		transform: translate(-50%, -50%) scale(1);
	}

	border: 0;
	border-radius: 0.5rem;
	outline: none;

	&::backdrop {
		background: rgba(0, 0, 0, 0.5);
		-webkit-backdrop-filter: blur(2px);
		backdrop-filter: blur(2px);
	}
`;
