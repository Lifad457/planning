import { useEffect, useRef, useState } from 'react';
import { ModalContainer } from './Modal.css';

interface ModalProps {
	isOpen: boolean;
	onClose?: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const [isModalOpen, setIsModalOpen] = useState(isOpen);
	const modalRef = useRef<HTMLDialogElement | null>(null);

	const handleCloseModal = (event: React.MouseEvent<HTMLDialogElement>) => {
		if (onClose && event.target === event.currentTarget) {
			onClose();
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === 'Escape') {
			if (onClose) {
				onClose();
			}
		}
	};

	useEffect(() => {
		setIsModalOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		const modalElement = modalRef.current;
		isModalOpen ? modalElement?.showModal() : modalElement?.close();
	}, [isModalOpen]);

	return (
		<ModalContainer
			ref={modalRef}
			onKeyDown={handleKeyDown}
			onClick={handleCloseModal}
		>
			{children}
		</ModalContainer>
	);
};

export default Modal;
