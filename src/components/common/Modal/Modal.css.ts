import styled from 'styled-components';

export const ModalContainer = styled.dialog`
	position: fixed;
	margin: auto;
	width: 80%;
	max-width: 30rem;

	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;

	border: 0;
	border-radius: 0.5rem;
	outline: none;

	&::backdrop {
		background: rgba(0, 0, 0, 0.5);
		-webkit-backdrop-filter: blur(2px);
		backdrop-filter: blur(2px);
	}
`;
