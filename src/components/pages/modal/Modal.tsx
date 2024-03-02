import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import x_icon from '../../../assets/x-symbol-svgrepo-com.svg';

interface TypeModal {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const ModalBox = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	position: fixed;
	overflow: auto;
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: rgba(2, 2, 2, 0.699);
`;
const ContentModal = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: start;
	max-width: 1200px;
	width: 100%;
	height: 100%;
	margin-left: 70px;
	gap: 10px 100px;
	border-radius: 5px;
	position: absolute;
	z-index: 10;
	top: 10%;
	left: 25%;
`;
const ButtonClose = styled.button`
	border: none;
	outline: none;
	padding: 5px 20px 0px 0px;
	color: white;
	background-color: transparent;
	position: absolute;
	top: 11%;
	left: 67.1%;
	z-index: 11;
	img {
		margin-right: 10px;
		width: 23px;
		cursor: pointer;
	}
`;

const Modal = ({ isOpen, onClose, children }: TypeModal) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const modalContent = isOpen && (
		<ModalBox>
			<ButtonClose
				onClick={(e) => {
					e.stopPropagation();
					onClose();
				}}
			>
				<img src={x_icon} alt="" />
			</ButtonClose>
			<ContentModal>{children}</ContentModal>
		</ModalBox>
	);
	if (!isBrowser) return null;

	const portalRoot = document.getElementById('portal_root');

	return portalRoot ? ReactDOM.createPortal(modalContent, portalRoot) : null;
};

export default Modal;
